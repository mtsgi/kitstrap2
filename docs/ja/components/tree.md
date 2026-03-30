# ツリービュー

ファイルエクスプローラのような階層データ表示用ツリービュー。

## 基本的な使い方（`<details>`/`<summary>` 利用）

<div class="preview">
  <div class="kit-tree">
    <details class="kit-tree-node" open>
      <summary>ドキュメント</summary>
      <div class="kit-tree">
        <div class="kit-tree-item">
          <span class="kit-tree-label">readme.txt</span>
        </div>
        <details class="kit-tree-node">
          <summary>画像</summary>
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
    <summary>ドキュメント</summary>
    <div class="kit-tree">
      <div class="kit-tree-item">
        <span class="kit-tree-label">readme.txt</span>
      </div>
      <details class="kit-tree-node">
        <summary>画像</summary>
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

## 選択状態

<div class="preview">
  <div class="kit-tree">
    <div class="kit-tree-item">
      <span class="kit-tree-label">通常のアイテム</span>
    </div>
    <div class="kit-tree-item">
      <span class="kit-tree-label -selected">選択中のアイテム</span>
    </div>
  </div>
</div>

```html
<span class="kit-tree-label -selected">選択中のアイテム</span>
```

## コンパクト

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
