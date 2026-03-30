# ペイン

フレキシブルなスプリットパネルレイアウトコンテナ。

## 基本的な使い方

<div class="preview">
  <div class="kit-pane-group" style="height: 120px;">
    <div class="kit-pane" style="background: var(--kit-bg-secondary);">左ペイン</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">右ペイン</div>
  </div>
</div>

```html
<div class="kit-pane-group">
  <div class="kit-pane">左ペイン</div>
  <div class="kit-pane">右ペイン</div>
</div>
```

## 縦分割

<div class="preview">
  <div class="kit-pane-group -vertical" style="height: 160px;">
    <div class="kit-pane" style="background: var(--kit-bg-secondary);">上ペイン</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">下ペイン</div>
  </div>
</div>

```html
<div class="kit-pane-group -vertical">
  <div class="kit-pane">上ペイン</div>
  <div class="kit-pane">下ペイン</div>
</div>
```

## 固定サイズペイン

<div class="preview">
  <div class="kit-pane-group" style="height: 120px;">
    <div class="kit-pane -fixed" style="width: 200px; background: var(--kit-bg-secondary);">固定 200px</div>
    <div class="kit-pane" style="background: var(--kit-bg-tertiary);">フレキシブル</div>
  </div>
</div>

```html
<div class="kit-pane-group">
  <div class="kit-pane -fixed" style="width: 200px;">固定 200px</div>
  <div class="kit-pane">フレキシブル</div>
</div>
```
