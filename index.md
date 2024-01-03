---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% for item in site.norway %}
## {{ item.date | date: "%F" }} -- {{ item.location }}
{{ item.content }}
{% endfor %}
