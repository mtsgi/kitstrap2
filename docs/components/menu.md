# Menu

Context menus and dropdown menus.

## Basic usage

<div class="preview">
  <div class="kit-menu" style="position: relative;">
    <div class="kit-menu-header">File</div>
    <a class="kit-menu-item" href="#">New</a>
    <a class="kit-menu-item" href="#">Open</a>
    <a class="kit-menu-item" href="#">Save</a>
    <div class="kit-menu-separator"></div>
    <a class="kit-menu-item -danger" href="#">Delete</a>
  </div>
</div>

```html
<div class="kit-menu">
  <div class="kit-menu-header">File</div>
  <a class="kit-menu-item" href="#">New</a>
  <a class="kit-menu-item" href="#">Open</a>
  <a class="kit-menu-item" href="#">Save</a>
  <div class="kit-menu-separator"></div>
  <a class="kit-menu-item -danger" href="#">Delete</a>
</div>
```

## Active and disabled items

<div class="preview">
  <div class="kit-menu" style="position: relative;">
    <a class="kit-menu-item -active" href="#">Selected item</a>
    <a class="kit-menu-item" href="#">Normal item</a>
    <a class="kit-menu-item -disabled" href="#">Disabled item</a>
  </div>
</div>

```html
<div class="kit-menu">
  <a class="kit-menu-item -active" href="#">Selected item</a>
  <a class="kit-menu-item" href="#">Normal item</a>
  <a class="kit-menu-item -disabled" href="#">Disabled item</a>
</div>
```

## Compact

<div class="preview">
  <div class="kit-menu -compact" style="position: relative;">
    <a class="kit-menu-item" href="#">Cut</a>
    <a class="kit-menu-item" href="#">Copy</a>
    <a class="kit-menu-item" href="#">Paste</a>
    <div class="kit-menu-separator"></div>
    <a class="kit-menu-item" href="#">Select All</a>
  </div>
</div>

```html
<div class="kit-menu -compact">
  <a class="kit-menu-item" href="#">Cut</a>
  <a class="kit-menu-item" href="#">Copy</a>
  <a class="kit-menu-item" href="#">Paste</a>
  <div class="kit-menu-separator"></div>
  <a class="kit-menu-item" href="#">Select All</a>
</div>
```
