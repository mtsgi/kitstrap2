# Pane

Flexible split-panel layout container.

## Basic usage

<div class="preview">
  <div class="kit-pane-group" style="height: 120px;">
    <div class="kit-pane" style="background: var(--kit-bg-secondary);">Left pane</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">Right pane</div>
  </div>
</div>

```html
<div class="kit-pane-group">
  <div class="kit-pane">Left pane</div>
  <div class="kit-pane">Right pane</div>
</div>
```

## Vertical split

<div class="preview">
  <div class="kit-pane-group -vertical" style="height: 160px;">
    <div class="kit-pane" style="background: var(--kit-bg-secondary);">Top pane</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">Bottom pane</div>
  </div>
</div>

```html
<div class="kit-pane-group -vertical">
  <div class="kit-pane">Top pane</div>
  <div class="kit-pane">Bottom pane</div>
</div>
```

## Fixed-size pane

<div class="preview">
  <div class="kit-pane-group" style="height: 120px;">
    <div class="kit-pane -fixed" style="width: 200px; background: var(--kit-bg-secondary);">Fixed 200px</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">Flexible</div>
  </div>
</div>

```html
<div class="kit-pane-group">
  <div class="kit-pane -fixed" style="width: 200px;">Fixed 200px</div>
  <div class="kit-pane">Flexible</div>
</div>
```
