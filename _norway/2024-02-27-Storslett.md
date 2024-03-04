---
title: Øksfjord-Storslett
layout: album-page
date: 2024-02-27
---
## {{ page.date | date: "%Y-%m-%d" }} – {{ page.title }}
{% capture album-date %}{{ page.date | date: "%Y-%m-%d" }}{% endcapture %}
{% include album.html album=album-date %}