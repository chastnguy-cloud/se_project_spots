# Spots

A responsive photo-sharing web app where users can showcase their favorite places and discover new ones.

## GITHUB Link

https://chastnguy-cloud.github.io/se_project_spots/

## Overview

Spots is a social media style platform built as part of the TripleTen Software Engineering bootcamp. Users can view a profile section with an avatar, name, and bio, as well as a grid of photo cards with captions and like buttons. The layout is fully responsive across desktop, tablet, and mobile screen sizes.

## Features

- Profile section with avatar, name, subtitle, and action buttons
- Responsive 3-column photo card grid that adapts to smaller screens
- Hover states on buttons and like icons
- BEM-based CSS architecture for clean, maintainable styles
- Mobile-first responsive design with media query breakpoints

## Technologies

- **HTML5** — semantic markup
- **CSS3** — Flexbox, CSS Grid, custom properties, media queries
- **BEM** — Block Element Modifier methodology for CSS organization
- **Figma** — design reference and asset export

## Project Structure

```
spots/
  index.html
  pages/
    index.css         ← imports all block styles
  blocks/
    page.css
    header.css
    profile.css
    cards.css
    card.css
    footer.css
    content.css
  vendor/
    normalize.css
    fonts.css
    fonts/
  images/
```

## Responsive Breakpoints

| Breakpoint | Layout                  |
| ---------- | ----------------------- |
| 1280px+    | Full desktop layout     |
| 768px      | 2-column card grid      |
| 627px      | Mobile profile layout   |
| 480px      | Single column card grid |

## Design

Designed in Figma as part of the TripleTen Sprint 3 project. View the original design file [here](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots).

## Project Pitch Video

Check out [this video](https://www.loom.com/share/7504f5b5c5484e9880b649cd9988addb), where I describe my
project and some challenges I faced while building it.

## Author

Charles Nguyen
