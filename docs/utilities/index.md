# Utilities

kitstrap2 provides a comprehensive set of utility classes for rapid styling.

## Display

| Class | Effect |
| ----- | ------ |
| `.kit-block` | `display: block` |
| `.kit-inline-block` | `display: inline-block` |
| `.kit-inline` | `display: inline` |
| `.kit-hidden` / `.kit-nodisp` / `.kit-nd` | `display: none` |
| `.kit-visible` | `visibility: visible` |
| `.kit-invisible` | `visibility: hidden` |
| `.kit-noevents` | `pointer-events: none` |

## Flexbox

<div class="preview">
  <div class="kit-flex kit-gap-s">
    <div class="kit-button">A</div>
    <div class="kit-button">B</div>
    <div class="kit-button">C</div>
  </div>
</div>

```html
<div class="kit-flex kit-gap-s">
  <div class="kit-button">A</div>
  <div class="kit-button">B</div>
  <div class="kit-button">C</div>
</div>
```

| Class | Effect |
| ----- | ------ |
| `.kit-flex` | `display: flex` |
| `.kit-inline-flex` | `display: inline-flex` |
| `.kit-flex-row` / `.kit-flex-column` | Direction |
| `.kit-flex-wrap` / `.kit-flex-nowrap` | Wrap |
| `.kit-flex-grow` / `.kit-flex-shrink` | Grow/Shrink |
| `.kit-flex-start` / `.kit-flex-center` / `.kit-flex-end` | Justify |
| `.kit-flex-between` / `.kit-flex-around` / `.kit-flex-evenly` | Justify distribution |
| `.kit-flex-top` / `.kit-flex-middle` / `.kit-flex-bottom` | Align items |
| `.kit-flex-fit` | `flex: 1 1 0%` |
| `.kit-gap-{size}` | Gap (`0`, `xs`, `s`, `m`, `l`, `xl`, `xxl`) |

## Spacing

Pattern: `.kit-p-{size}` for padding, `.kit-m-{size}` for margin.

Directions: `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical).

Sizes: `0`, `xs` (4px), `s` (8px), `m` (12px), `l` (16px), `xl` (24px), `xxl` (32px), `auto` (margin only).

<div class="preview">
  <div class="kit-p-l kit-bgc-secondary">Padding Large</div>
  <div class="kit-m-t-s kit-p-s kit-bgc-secondary">Margin Top Small + Padding Small</div>
</div>

```html
<div class="kit-p-l kit-bgc-secondary">Padding Large</div>
<div class="kit-m-t-s kit-p-s kit-bgc-secondary">Margin Top Small</div>
```

## Sizing

| Class | Effect |
| ----- | ------ |
| `.kit-width-{0..100}` | Width in 5% steps |
| `.kit-width-auto` | `width: auto` |
| `.kit-fit` | Full-width block |
| `.kit-max-width-sm/md/lg/xl` | Max-width breakpoints |
| `.kit-height-auto` / `.kit-height-100` / `.kit-height-screen` | Height |

## Shadow

<div class="preview kit-flex kit-gap-m kit-flex-wrap">
  <div class="kit-p-m kit-shadow-1">Shadow 1</div>
  <div class="kit-p-m kit-shadow-3">Shadow 3</div>
  <div class="kit-p-m kit-shadow-5">Shadow 5</div>
  <div class="kit-p-m kit-shadow-8">Shadow 8</div>
  <div class="kit-p-m kit-shadow-10">Shadow 10</div>
</div>

```html
<div class="kit-shadow-1">Shadow 1</div>
<div class="kit-shadow-5">Shadow 5</div>
<div class="kit-shadow-10">Shadow 10</div>
```

## Font

| Class | Effect |
| ----- | ------ |
| `.kit-font-xxl` ~ `.kit-font-xs` / `.kit-font-0` | Font size |
| `.kit-font-bold` / `.kit-font-normal` / `.kit-font-thin` | Font weight |

## Text

| Class | Effect |
| ----- | ------ |
| `.kit-text-l` / `.kit-text-c` / `.kit-text-r` | Text align |
| `.kit-text-upper` / `.kit-text-lower` / `.kit-text-capitalize` | Transform |
| `.kit-text-zenkaku` | Full-width characters |
| `.kit-line-xl` ~ `.kit-line-0` | Line height |
| `.kit-text-underline` / `.kit-text-overline` / `.kit-text-wavy` / `.kit-text-double` / `.kit-text-nodecoration` | Text decoration |
| `.kit-text-nowrap` / `.kit-text-break` / `.kit-text-truncate` | Wrapping |

## Color

Text color: `.kit-c-{name}` — Background: `.kit-bgc-{name}`

Available names: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `orange`, `dodgerblue`, `deeppink`, `limegreen`, `crimson`, `green`, `silver`, `black`.

<div class="preview kit-flex kit-gap-s kit-flex-wrap">
  <span class="kit-bgc-primary kit-p-xs kit-rounded-s">Primary</span>
  <span class="kit-bgc-success kit-p-xs kit-rounded-s">Success</span>
  <span class="kit-bgc-danger kit-p-xs kit-rounded-s">Danger</span>
  <span class="kit-bgc-orange kit-p-xs kit-rounded-s">Orange</span>
</div>

```html
<span class="kit-bgc-primary">Primary</span>
<span class="kit-bgc-success">Success</span>
```

## Position

| Class | Effect |
| ----- | ------ |
| `.kit-static` | `position: static` |
| `.kit-relative` | `position: relative` |
| `.kit-absolute` | `position: absolute` |
| `.kit-fixed` | `position: fixed` |
| `.kit-sticky` | `position: sticky; top: 0` |

## Miscellaneous

| Class | Effect |
| ----- | ------ |
| `.kit-scroll` / `.kit-scroll-x` / `.kit-scroll-y` | Overflow scroll |
| `.kit-overflow-hidden` | `overflow: hidden` |
| `.kit-selectable` | User-selectable text |
| `.kit-init` | `cursor: default` |
| `.kit-pointer` | `cursor: pointer` |
| `.kit-rounded-s/m/l/full/0` | Border radius |
| `.kit-opacity-0/25/50/75/100` | Opacity |
