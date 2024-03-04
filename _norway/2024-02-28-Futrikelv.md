---
title: Storslett-Futrikelv
layout: album-page
date: 2024-02-28
---
## {{ page.date | date: "%Y-%m-%d" }} – {{ page.title }}
{% capture album-date %}{{ page.date | date: "%Y-%m-%d" }}{% endcapture %}
{% include album.html album=album-date %}