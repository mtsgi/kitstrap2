# ツールバー

アクションやツール用の水平ツールバー。

## 基本的な使い方

<div class="preview">
  <div class="kit-toolbar">
    <button class="kit-toolbar-item">新規</button>
    <button class="kit-toolbar-item">開く</button>
    <div class="kit-toolbar-separator"></div>
    <button class="kit-toolbar-item">切り取り</button>
    <button class="kit-toolbar-item">コピー</button>
    <button class="kit-toolbar-item">貼り付け</button>
    <div class="kit-toolbar-separator"></div>
    <button class="kit-toolbar-item -disabled">元に戻す</button>
  </div>
</div>

```html
<div class="kit-toolbar">
  <button class="kit-toolbar-item">新規</button>
  <button class="kit-toolbar-item">開く</button>
  <div class="kit-toolbar-separator"></div>
  <button class="kit-toolbar-item">切り取り</button>
  <button class="kit-toolbar-item">コピー</button>
  <button class="kit-toolbar-item">貼り付け</button>
  <div class="kit-toolbar-separator"></div>
  <button class="kit-toolbar-item -disabled">元に戻す</button>
</div>
```

## ボタンと組み合わせて

<div class="preview">
  <div class="kit-toolbar">
    <button class="kit-button -small -primary">保存</button>
    <button class="kit-button -small">キャンセル</button>
    <div class="kit-toolbar-separator"></div>
    <button class="kit-toolbar-item -active">太字</button>
    <button class="kit-toolbar-item">斜体</button>
  </div>
</div>

```html
<div class="kit-toolbar">
  <button class="kit-button -small -primary">保存</button>
  <button class="kit-button -small">キャンセル</button>
  <div class="kit-toolbar-separator"></div>
  <button class="kit-toolbar-item -active">太字</button>
  <button class="kit-toolbar-item">斜体</button>
</div>
```

## フラット

<div class="preview">
  <div class="kit-toolbar -flat">
    <button class="kit-toolbar-item">アクション 1</button>
    <button class="kit-toolbar-item">アクション 2</button>
  </div>
</div>

```html
<div class="kit-toolbar -flat">
  <button class="kit-toolbar-item">アクション 1</button>
  <button class="kit-toolbar-item">アクション 2</button>
</div>
```

## コンパクト

<div class="preview">
  <div class="kit-toolbar -compact">
    <button class="kit-toolbar-item">新規</button>
    <button class="kit-toolbar-item">開く</button>
    <div class="kit-toolbar-separator"></div>
    <button class="kit-toolbar-item">保存</button>
  </div>
</div>

```html
<div class="kit-toolbar -compact">
  <button class="kit-toolbar-item">新規</button>
  <button class="kit-toolbar-item">開く</button>
  <div class="kit-toolbar-separator"></div>
  <button class="kit-toolbar-item">保存</button>
</div>
```
