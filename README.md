# Music in Motion Ottawa - Website

This is the source code for the Music in Motion Ottawa website, hosted free on GitHub Pages.

**Live site:** https://musicinmotionottawa.github.io

---

## How to Update Website Content

All editable content (events, links, descriptions) lives in **one file**: `config.js`

### Steps to update

1. Go to https://github.com/musicinmotionottawa/musicinmotionottawa.github.io
2. Click on **`config.js`**
3. Click the **pencil icon** (top-right of the file) to edit
4. Make your changes (see examples below)
5. Scroll down and click **"Commit changes"**
6. The website will update automatically within a few minutes

### Common updates

#### Add a new event

Find the `events: [` section and add a new block inside the brackets:

```js
{
  title: "Music in Motion Performance",
  date: "May 10, 2026",
  day: "Saturday",
  time: "2:00 pm - 3:00 pm",
  location: "Timberwalk Retirement Community",
  address: "1250 Maritime Way, Kanata, ON K2K 0L7",
  signUpUrl: "https://forms.gle/YOUR_NEW_FORM_LINK"
},
```

#### Remove a past event

Delete the entire `{ ... },` block for the event you want to remove.

#### Add a YouTube video

Find the `videos: [` section. Remove the `//` at the start of a line (or add a new line):

```js
{ title: "Spring 2026 Concert", url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID" },
```

#### Update the Instagram link

Find the `social:` section and paste your Instagram URL:

```js
instagram: "https://www.instagram.com/musicinmotionottawa",
```

#### Update the mailing list link

Change the `mailingListUrl:` value to the new Google Form link.

---

## For Developers

This is a pure HTML + CSS + vanilla JavaScript site with no build tools or dependencies.

### File structure

```
index.html   - Main page (layout and structure)
style.css    - All styles
config.js    - Editable content (events, links, text)
images/      - Logo and any images
README.md    - This file
```

### Local preview

Open `index.html` in any web browser -- no server needed.

### Hosting

The site is hosted via GitHub Pages from the `main` branch. Any push to `main` triggers an automatic deployment.
