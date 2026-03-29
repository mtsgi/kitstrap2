# ツールチップ

`data-kit-tooltip` 属性を使ったCSS-onlyツールチップ。

## 基本的な使い方

<div class="preview" style="padding: 32px;">
  <button class="kit-button" data-kit-tooltip="これはツールチップです">ホバーしてください</button>
</div>

```html
<button class="kit-button" data-kit-tooltip="これはツールチップです">ホバーしてください</button>
```

## 位置

<div class="preview" style="padding: 48px; display: flex; gap: 16px; justify-content: center;">
  <button class="kit-button" data-kit-tooltip="上（デフォルト）">上</button>
  <button class="kit-button -bottom" data-kit-tooltip="下のツールチップ">下</button>
  <button class="kit-button -left" data-kit-tooltip="左のツールチップ">左</button>
  <button class="kit-button -right" data-kit-tooltip="右のツールチップ">右</button>
</div>

```html
<button data-kit-tooltip="上（デフォルト）">上</button>
<button class="-bottom" data-kit-tooltip="下のツールチップ">下</button>
<button class="-left" data-kit-tooltip="左のツールチップ">左</button>
<button class="-right" data-kit-tooltip="右のツールチップ">右</button>
```
