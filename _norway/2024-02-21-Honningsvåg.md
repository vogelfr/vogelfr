---
title: Kjøllefjord - Honningsvåg
layout: album-page
date: 2024-02-21
---
## {{ page.date | date: "%Y-%m-%d" }} – {{ page.title }}
{% capture album-date %}{{ page.date | date: "%Y-%m-%d" }}{% endcapture %}
{% include album.html album=album-date %}