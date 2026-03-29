# メニュー

コンテキストメニューとドロップダウンメニュー。

## 基本的な使い方

<div class="preview">
  <div class="kit-menu" style="position: relative;">
    <div class="kit-menu-header">ファイル</div>
    <a class="kit-menu-item" href="#">新規</a>
    <a class="kit-menu-item" href="#">開く</a>
    <a class="kit-menu-item" href="#">保存</a>
    <div class="kit-menu-separator"></div>
    <a class="kit-menu-item -danger" href="#">削除</a>
  </div>
</div>

```html
<div class="kit-menu">
  <div class="kit-menu-header">ファイル</div>
  <a class="kit-menu-item" href="#">新規</a>
  <a class="kit-menu-item" href="#">開く</a>
  <a class="kit-menu-item" href="#">保存</a>
  <div class="kit-menu-separator"></div>
  <a class="kit-menu-item -danger" href="#">削除</a>
</div>
```

## アクティブ・無効状態

<div class="preview">
  <div class="kit-menu" style="position: relative;">
    <a class="kit-menu-item -active" href="#">選択中</a>
    <a class="kit-menu-item" href="#">通常</a>
    <a class="kit-menu-item -disabled" href="#">無効</a>
  </div>
</div>

```html
<div class="kit-menu">
  <a class="kit-menu-item -active" href="#">選択中</a>
  <a class="kit-menu-item" href="#">通常</a>
  <a class="kit-menu-item -disabled" href="#">無効</a>
</div>
```

## コンパクト

<div class="preview">
  <div class="kit-menu -compact" style="position: relative;">
    <a class="kit-menu-item" href="#">切り取り</a>
    <a class="kit-menu-item" href="#">コピー</a>
    <a class="kit-menu-item" href="#">貼り付け</a>
    <div class="kit-menu-separator"></div>
    <a class="kit-menu-item" href="#">すべて選択</a>
  </div>
</div>

```html
<div class="kit-menu -compact">
  <a class="kit-menu-item" href="#">切り取り</a>
  <a class="kit-menu-item" href="#">コピー</a>
  <a class="kit-menu-item" href="#">貼り付け</a>
  <div class="kit-menu-separator"></div>
  <a class="kit-menu-item" href="#">すべて選択</a>
</div>
```
