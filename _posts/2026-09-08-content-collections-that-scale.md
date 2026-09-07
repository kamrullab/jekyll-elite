---
title: Content collections that scale
description: Use posts, projects, and documentation as reusable sources for multiple presentations.
date: 2026-09-08 02:00:00 +0600
author: KAMRUL HOSSAIN
tags:
  - Content architecture
  - Liquid
---

Jekyll collections separate what content means from how a particular page presents it.

```liquid
{% raw %}{% assign projects = site.projects | sort: "order" %}
{% for project in projects %}
  {% include project-card.html project=project %}
{% endfor %}{% endraw %}
```

The portfolio and creative layouts both use the project collection, but each creates a different browsing experience.
