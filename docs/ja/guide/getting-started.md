# はじめに

## インストール

npmでkitstrap2をインストールします:

```sh
npm install kitstrap2
```

## 使い方

プロジェクトにCSSをインポートします:

```js
import 'kitstrap2'
```

またはHTMLで直接リンクします:

```html
<link rel="stylesheet" href="kitstrap2.css">
```

本番環境ではminify版も利用できます:

```html
<link rel="stylesheet" href="kitstrap2.min.css">
```

## クラス命名規則

kitstrap2のコンポーネントクラスは `kit-` プレフィックスを使用し、修飾子クラスは `-modifier` パターン（先頭にハイフン）を使用します。

| クラス | 説明 |
| ------ | ---- |
| `.kit-button` | ボタンコンポーネント |
| `.kit-button.-primary` | プライマリカラーバリアント |
| `.kit-button.-alt` | アウトライン（alt）バリアント |
| `.kit-textbox` | テキスト入力 |
| `.kit-badge` | バッジ |
| `.kit-notice` | 通知ブロック |

## CSSカスタムプロパティによるテーマ設定

kitstrap2はテーマ設定にCSSカスタムプロパティを使用しています。`:root` や任意のコンテナでオーバーライドできます:

```css
:root {
  --kit-color-primary: #6366f1;
  --kit-color-success: #22c55e;
  --kit-radius-s: 8px;
}
```

## ダークモード

kitstrap2は `prefers-color-scheme` による自動ダークモードと `.kit-dark` クラスによる手動切替の両方をサポートしています:

```html
<!-- デフォルトでOSの設定に自動追従 -->

<!-- ダークモードを強制 -->
<html class="kit-dark">

<!-- ライトモードを強制（OSがダークでも） -->
<html class="kit-light">
```
