import * as fs from "fs";
import * as path from "path";
import { Octokit } from "@octokit/rest";

// the org name
const orgName = "Flutter-Global";

// the CLI repository name
const cliRepoName = "fsc-git-flutter";

// the asset download dir
const downloadDir = "../git-flutter";

// the output data file
const outputFile = "../_data/cli.json";

// authenticate using a token which is expected
// from env variable ORG_TOKEN
if (!process.env.ORG_TOKEN) {
  throw new Error("env variable ORG_TOKEN must be provided with access token");
}
const octokit = new Octokit({
  auth: process.env.ORG_TOKEN,
  log: {
    debug: () => {},
    info: console.log,
    warn: console.warn,
    error: console.error,
  },
});

// retrieve the latest release and get the
// ID and tag name.
octokit.log.info(`Getting latest release from ${orgName}/${cliRepoName}/`);
const latestRelease = await octokit.request(
  "GET /repos/{owner}/{repo}/releases/latest",
  {
    owner: orgName,
    repo: cliRepoName,
  }
);
const version = latestRelease.data.tag_name;
octokit.log.info(
  `Latest release is ${version} with ID ${latestRelease.data.id}`
);

// check currently loaded release, exit if same.
const buffer = fs.readFileSync(outputFile);
const existing = JSON.parse(buffer);
octokit.log.info(`Existing loaded release version is ${existing.version}`);
if (existing.version == version) {
  octokit.log.info(`No action required, exiting`);
  process.exit(0);
}

// remove old release assets
octokit.log.info(`Remove old release assets from ${downloadDir}`);
const regex = /^git-flutter_/;
fs.readdirSync(downloadDir)
  .filter((f) => regex.test(f))
  .map((f) => fs.unlinkSync(path.resolve(downloadDir, f)));

// download release assets into local folder
for (const asset of latestRelease.data.assets) {
  octokit.log.info(`Release asset of ${asset.name}`);
  const downloadPath = path.resolve(downloadDir, asset.name);
  const buffer = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/assets/{asset_id}",
    {
      headers: {
        Accept: "application/octet-stream",
      },
      owner: orgName,
      repo: cliRepoName,
      asset_id: asset.id,
    }
  );
  const view = new Uint8Array(buffer.data);
  fs.writeFileSync(downloadPath, view);
}

// load test golden file content to create output file
const output = {
  version: version,
  example: {},
};
const contents = await octokit.request(
  "GET /repos/{owner}/{repo}/contents/{path}?ref={tag}",
  {
    owner: orgName,
    repo: cliRepoName,
    path: "integration/testdata",
    tag: version,
  }
);
for (const file of contents.data) {
  const key = file.name.replace(".golden", "");
  octokit.log.info(`File ${file.path} discovered as example ${key}.`);

  // get file contents
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}?ref={tag}",
    {
      mediaType: { format: "raw" },
      owner: orgName,
      repo: cliRepoName,
      path: file.path,
      tag: version,
    }
  );
  output.example[key] = response.data.trim();

  // add a small delay (500ms) to avoid rate limits
  await new Promise((resolve) => setTimeout(resolve, 500));
}

// write output to json file
const jsonOutput = JSON.stringify(output, null, 2);
fs.writeFileSync(outputFile, jsonOutput);
