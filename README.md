# Mayaz Uddin Gazi — Research Portfolio

A data-driven academic portfolio built with Jekyll and hosted with GitHub Pages.

## Update the site

Most updates require editing only one YAML file:

| Content | File |
| --- | --- |
| Name, bio, education, email, and profile links | `_data/profile.yml` |
| Research themes | `_data/research.yml` |
| Ongoing projects | `_data/projects.yml` |
| Journal articles | `_data/publications.yml` |
| Conference papers | `_data/conferences.yml` |
| Employment and research experience | `_data/experience.yml` |
| Methods and software | `_data/skills.yml` |
| Leadership and service | `_data/service.yml` |

To add an item, copy one complete YAML entry, paste it in the appropriate file, and edit its fields. Preserve the indentation and use spaces rather than tabs.

## Add a blog post

1. Create a Markdown file in `_posts/`.
2. Name it `YYYY-MM-DD-short-title.md`.
3. Start it with:

```yaml
---
title: "Post title"
excerpt: "One-sentence summary shown on the home page."
category: "Research practice"
---
```

Write the post below the second `---`. Jekyll automatically adds it to the Blog section.

## Replace the portrait

Replace `assets/img/mxg.png` with the new image while keeping the same filename, or update the `photo` path in `_data/profile.yml`.

## Image credit

The University of Miami campus photograph at `assets/img/umiami-campus.jpg` is “Palm Tree Walkway” by Chad Cooper, sourced from Wikimedia Commons and used under the Creative Commons Attribution 2.0 license. The required credit and license links are displayed directly below the photograph on the website.

## Add a CV

Place the PDF at `assets/files/Mayaz-Uddin-Gazi-CV.pdf`, then add this item under `links` in `_data/profile.yml`:

```yaml
- label: "CV"
  url: "/mayaz-portfolio/assets/files/Mayaz-Uddin-Gazi-CV.pdf"
```

## Important fields to verify

- Add the verified University of Miami email when ready.
- Add the exact LinkedIn profile URL in `_data/profile.yml`.
- Complete missing author, year, DOI, and venue fields in the publication and conference YAML files.
- Add only methods personally used or clearly label methods still being learned.

## GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose the `main` branch and `/ (root)`. The public address is expected to be:

`https://mayazuddingazi.github.io/mayaz-portfolio/`
