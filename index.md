---
layout: home
---

{% for item in site.norway reversed %}
## {{ item.date | date: "%Y-%m-%d" }} – {{ item.title }}
{{ item.content }}
{% endfor %}
