# プログレスバー

ローディングや進捗表示用のプログレスバー。

## 基本的な使い方

<div class="preview">
  <div class="kit-progress">
    <div class="kit-progress-bar" style="width: 60%;"></div>
  </div>
</div>

```html
<div class="kit-progress">
  <div class="kit-progress-bar" style="width: 60%;"></div>
</div>
```

## サイズ

<div class="preview" style="display: flex; flex-direction: column; gap: 12px;">
  <div class="kit-progress -small">
    <div class="kit-progress-bar" style="width: 40%;"></div>
  </div>
  <div class="kit-progress">
    <div class="kit-progress-bar" style="width: 60%;"></div>
  </div>
  <div class="kit-progress -large">
    <div class="kit-progress-bar" style="width: 80%;"></div>
  </div>
</div>

```html
<div class="kit-progress -small">
  <div class="kit-progress-bar" style="width: 40%;"></div>
</div>
<div class="kit-progress">
  <div class="kit-progress-bar" style="width: 60%;"></div>
</div>
<div class="kit-progress -large">
  <div class="kit-progress-bar" style="width: 80%;"></div>
</div>
```

## セマンティックカラー

<div class="preview" style="display: flex; flex-direction: column; gap: 12px;">
  <div class="kit-progress">
    <div class="kit-progress-bar -primary" style="width: 70%;"></div>
  </div>
  <div class="kit-progress">
    <div class="kit-progress-bar -success" style="width: 100%;"></div>
  </div>
  <div class="kit-progress">
    <div class="kit-progress-bar -warning" style="width: 50%;"></div>
  </div>
  <div class="kit-progress">
    <div class="kit-progress-bar -danger" style="width: 30%;"></div>
  </div>
</div>

```html
<div class="kit-progress">
  <div class="kit-progress-bar -success" style="width: 100%;"></div>
</div>
```

## 不確定（インデターミネート）

<div class="preview">
  <div class="kit-progress">
    <div class="kit-progress-bar -indeterminate"></div>
  </div>
</div>

```html
<div class="kit-progress">
  <div class="kit-progress-bar -indeterminate"></div>
</div>
```
