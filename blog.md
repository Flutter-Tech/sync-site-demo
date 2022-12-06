---
layout: blog
title: Blog
---

{% for post in site.posts %}

<div class="block mb-8">
  {% if post.image %}
  <img src="{{ post.image }}" class="float-right p-2 mt-0 h-14"/>
  {% endif %}
  <a href="{{ post.url }}" class="block text-xl">{{ post.title }}</a>
  <div class="text-xs">{{ post.date | date_to_string }}{% if post.author %} - by {{ post.author }}{% endif %}</div>
  {% if post.summary %}
  <div class="pt-3 text-sm">
  {{ post.summary}}
  </div>
  {% endif %}
</div>
{% endfor %}
