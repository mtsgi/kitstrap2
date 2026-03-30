# Tree

Tree view for hierarchical data like file explorers.

## Basic usage (with `<details>`/`<summary>`)

<div class="preview">
  <div class="kit-tree">
    <details class="kit-tree-node" open>
      <summary>Documents</summary>
      <div class="kit-tree">
        <div class="kit-tree-item">
          <span class="kit-tree-label">readme.txt</span>
        </div>
        <details class="kit-tree-node">
          <summary>Images</summary>
          <div class="kit-tree">
            <div class="kit-tree-item">
              <span class="kit-tree-label">photo.png</span>
            </div>
            <div class="kit-tree-item">
              <span class="kit-tree-label">icon.svg</span>
            </div>
          </div>
        </details>
      </div>
    </details>
    <div class="kit-tree-item">
      <span class="kit-tree-label">config.json</span>
    </div>
  </div>
</div>

```html
<div class="kit-tree">
  <details class="kit-tree-node" open>
    <summary>Documents</summary>
    <div class="kit-tree">
      <div class="kit-tree-item">
        <span class="kit-tree-label">readme.txt</span>
      </div>
      <details class="kit-tree-node">
        <summary>Images</summary>
        <div class="kit-tree">
          <div class="kit-tree-item">
            <span class="kit-tree-label">photo.png</span>
          </div>
        </div>
      </details>
    </div>
  </details>
  <div class="kit-tree-item">
    <span class="kit-tree-label">config.json</span>
  </div>
</div>
```

## Selected item

<div class="preview">
  <div class="kit-tree">
    <div class="kit-tree-item">
      <span class="kit-tree-label">Normal item</span>
    </div>
    <div class="kit-tree-item">
      <span class="kit-tree-label -selected">Selected item</span>
    </div>
  </div>
</div>

```html
<span class="kit-tree-label -selected">Selected item</span>
```

## Compact

<div class="preview">
  <div class="kit-tree -compact">
    <details class="kit-tree-node" open>
      <summary>src</summary>
      <div class="kit-tree">
        <div class="kit-tree-item">
          <span class="kit-tree-label">index.ts</span>
        </div>
        <div class="kit-tree-item">
          <span class="kit-tree-label">main.scss</span>
        </div>
      </div>
    </details>
  </div>
</div>

```html
<div class="kit-tree -compact">
  ...
</div>
```
