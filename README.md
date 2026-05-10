# kitstrap2

[![npm version](https://img.shields.io/npm/v/kitstrap2)](https://www.npmjs.com/package/kitstrap2)
[![CI](https://github.com/mtsgi/kitstrap2/actions/workflows/ci.yml/badge.svg)](https://github.com/mtsgi/kitstrap2/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight CSS framework written in SCSS. Supports dark mode out of the box via CSS custom properties. Zero JavaScript runtime.

## Installation

### npm

```sh
npm install kitstrap2
```

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/kitstrap2/dist/kitstrap2.css">
```

Or import from a bundler:

```js
import 'kitstrap2';
```

### CDN

```html
<!-- jsDelivr (recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kitstrap2/dist/kitstrap2.css">

<!-- jsDelivr — minified -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kitstrap2/dist/kitstrap2.min.css">

<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/kitstrap2/dist/kitstrap2.css">
```

## Components

| Component | Class | Description |
|---|---|---|
| Badge | `.kit-badge` | Inline label / status pill |
| Box | `.kit-box` | Generic content block with padding |
| Breadcrumb | `.kit-breadcrumb` | Navigation breadcrumb trail |
| Button | `.kit-button` | Styled button with size / color variants |
| Container | `.kit-container` | Centered max-width wrapper |
| Form | `.kit-form` | Form layout and input styling |
| Header | `.kit-header` | Page header / hero area |
| Link | `.kit-link` | Styled anchor element |
| Menu | `.kit-menu` | Vertical navigation menu |
| Navbar | `.kit-navbar` | Horizontal navigation bar |
| Notice | `.kit-notice` | Alert / notification banner |
| Pane | `.kit-pane` | Card-like container with shadow |
| Progress | `.kit-progress` | Progress bar |
| Spinner | `.kit-spinner` | Loading spinner |
| Tab | `.kit-tab` | Tab navigation |
| Table | `.kit-table` | Styled data table |
| Toolbar | `.kit-toolbar` | Horizontal toolbar |
| Tooltip | `[data-kit-tooltip]` | Hover tooltip via data attribute |
| Tree | `.kit-tree` | Hierarchical tree list |
| Typography | `.kit-heading`, `.kit-text` | Headings and body text utilities |

All color/size variants use the modifier pattern: `.-primary`, `.-large`, etc.

## Dark Mode

Dark mode is applied automatically via `@media (prefers-color-scheme: dark)`.

You can also force themes manually:

```html
<!-- Force dark -->
<html class="kit-dark">

<!-- Force light -->
<html class="kit-light">
```

## Development

```sh
# Install dependencies
npm install

# Build the library
npm run build
```

Output: `dist/kitstrap2.css` (unminified) and `dist/kitstrap2.min.css` (minified via LightningCSS).

## License

MIT
