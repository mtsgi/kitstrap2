# Tooltip

CSS-only tooltips using the `data-kit-tooltip` attribute.

## Basic usage

<div class="preview" style="padding: 32px;">
  <button class="kit-button" data-kit-tooltip="This is a tooltip">Hover me</button>
</div>

```html
<button class="kit-button" data-kit-tooltip="This is a tooltip">Hover me</button>
```

## Positions

<div class="preview" style="padding: 48px; display: flex; gap: 16px; justify-content: center;">
  <button class="kit-button" data-kit-tooltip="Top (default)">Top</button>
  <button class="kit-button -bottom" data-kit-tooltip="Bottom tooltip">Bottom</button>
  <button class="kit-button -left" data-kit-tooltip="Left tooltip">Left</button>
  <button class="kit-button -right" data-kit-tooltip="Right tooltip">Right</button>
</div>

```html
<button data-kit-tooltip="Top (default)">Top</button>
<button class="-bottom" data-kit-tooltip="Bottom tooltip">Bottom</button>
<button class="-left" data-kit-tooltip="Left tooltip">Left</button>
<button class="-right" data-kit-tooltip="Right tooltip">Right</button>
```
