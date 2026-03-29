# Getting Started

## Installation

Install kitstrap2 via npm:

```sh
npm install kitstrap2
```

## Usage

Import the CSS file into your project:

```js
import 'kitstrap2'
```

Or link the CSS directly in your HTML:

```html
<link rel="stylesheet" href="kitstrap2.css">
```

For production, you can use the minified file:

```html
<link rel="stylesheet" href="kitstrap2.min.css">
```

## Class naming

All kitstrap2 component classes use the `kit-` prefix. Modifier classes use the `-modifier` pattern (with a leading hyphen).

| Class | Description |
| ----- | ----------- |
| `.kit-button` | Button component |
| `.kit-button.-primary` | Primary color variant |
| `.kit-button.-alt` | Outline (alt) variant |
| `.kit-textbox` | Text input |
| `.kit-badge` | Badge |
| `.kit-notice` | Notice block |

## Theming with CSS Custom Properties

kitstrap2 uses CSS custom properties for theming. Override them on `:root` or any container:

```css
:root {
  --kit-color-primary: #6366f1;
  --kit-color-success: #22c55e;
  --kit-radius-s: 8px;
}
```

## Dark mode

kitstrap2 supports automatic dark mode via `prefers-color-scheme` and manual toggle via the `.kit-dark` class:

```html
<!-- Automatically follows OS setting by default -->

<!-- Force dark mode -->
<html class="kit-dark">

<!-- Force light mode (even if OS is dark) -->
<html class="kit-light">
```
