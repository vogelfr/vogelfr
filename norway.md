---
category: travel
layout: page
permalink: /travel/norway/
title: Norway
---

{% for item in site.norway %}
### {{ item.date | date: "%F" }} -- {{ item.location }}
{{ item.content }}
{% endfor %}
