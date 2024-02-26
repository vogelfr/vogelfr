---
title: Vardø - Smalfjordbotn
layout: album-page
date: 2024-02-18
---
## {{ page.date | date: "%Y-%m-%d" }} – {{ page.title }}
{% capture album-date %}{{ page.date | date: "%Y-%m-%d" }}{% endcapture %}
{% include album.html album=album-date %}