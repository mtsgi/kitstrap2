# ユーティリティ

kitstrap2は包括的なユーティリティクラスを提供します。

## ディスプレイ

| クラス | 効果 |
| ------ | ---- |
| `.kit-block` | `display: block` |
| `.kit-inline-block` | `display: inline-block` |
| `.kit-inline` | `display: inline` |
| `.kit-hidden` / `.kit-nodisp` / `.kit-nd` | `display: none` |
| `.kit-visible` | `visibility: visible` |
| `.kit-invisible` | `visibility: hidden` |
| `.kit-noevents` | `pointer-events: none` |

## Flexbox

<div class="preview">
  <div class="kit-flex kit-gap-s">
    <div class="kit-button">A</div>
    <div class="kit-button">B</div>
    <div class="kit-button">C</div>
  </div>
</div>

```html
<div class="kit-flex kit-gap-s">
  <div class="kit-button">A</div>
  <div class="kit-button">B</div>
  <div class="kit-button">C</div>
</div>
```

| クラス | 効果 |
| ------ | ---- |
| `.kit-flex` | `display: flex` |
| `.kit-inline-flex` | `display: inline-flex` |
| `.kit-flex-row` / `.kit-flex-column` | 方向 |
| `.kit-flex-wrap` / `.kit-flex-nowrap` | 折り返し |
| `.kit-flex-grow` / `.kit-flex-shrink` | 伸縮 |
| `.kit-flex-start` / `.kit-flex-center` / `.kit-flex-end` | 主軸配置 |
| `.kit-flex-between` / `.kit-flex-around` / `.kit-flex-evenly` | 分散配置 |
| `.kit-flex-top` / `.kit-flex-middle` / `.kit-flex-bottom` | 交差軸配置 |
| `.kit-flex-fit` | `flex: 1 1 0%` |
| `.kit-gap-{size}` | ギャップ (`0`, `xs`, `s`, `m`, `l`, `xl`, `xxl`) |

## スペーシング

パターン: `.kit-p-{size}`（パディング）、`.kit-m-{size}`（マージン）

方向: `t`（上）、`b`（下）、`l`（左）、`r`（右）、`x`（水平）、`y`（垂直）

サイズ: `0`, `xs` (4px), `s` (8px), `m` (12px), `l` (16px), `xl` (24px), `xxl` (32px), `auto`（マージンのみ）

<div class="preview">
  <div class="kit-p-l kit-bgc-secondary">パディング Large</div>
  <div class="kit-m-t-s kit-p-s kit-bgc-secondary">マージン上 Small + パディング Small</div>
</div>

```html
<div class="kit-p-l kit-bgc-secondary">パディング Large</div>
<div class="kit-m-t-s kit-p-s kit-bgc-secondary">マージン上 Small</div>
```

## サイズ

| クラス | 効果 |
| ------ | ---- |
| `.kit-width-{0..100}` | 5%刻みの幅指定 |
| `.kit-width-auto` | `width: auto` |
| `.kit-fit` | フルワイドブロック |
| `.kit-max-width-sm/md/lg/xl` | 最大幅ブレークポイント |
| `.kit-height-auto` / `.kit-height-100` / `.kit-height-screen` | 高さ |

## シャドウ

<div class="preview kit-flex kit-gap-m kit-flex-wrap">
  <div class="kit-p-m kit-shadow-1">Shadow 1</div>
  <div class="kit-p-m kit-shadow-3">Shadow 3</div>
  <div class="kit-p-m kit-shadow-5">Shadow 5</div>
  <div class="kit-p-m kit-shadow-8">Shadow 8</div>
  <div class="kit-p-m kit-shadow-10">Shadow 10</div>
</div>

```html
<div class="kit-shadow-1">Shadow 1</div>
<div class="kit-shadow-5">Shadow 5</div>
<div class="kit-shadow-10">Shadow 10</div>
```

## フォント

| クラス | 効果 |
| ------ | ---- |
| `.kit-font-xxl` 〜 `.kit-font-xs` / `.kit-font-0` | フォントサイズ |
| `.kit-font-bold` / `.kit-font-normal` / `.kit-font-thin` | フォントウェイト |

## テキスト

| クラス | 効果 |
| ------ | ---- |
| `.kit-text-l` / `.kit-text-c` / `.kit-text-r` | テキスト配置 |
| `.kit-text-upper` / `.kit-text-lower` / `.kit-text-capitalize` | テキスト変換 |
| `.kit-text-zenkaku` | 全角文字 |
| `.kit-line-xl` 〜 `.kit-line-0` | 行高 |
| `.kit-text-underline` / `.kit-text-overline` / `.kit-text-wavy` / `.kit-text-double` / `.kit-text-nodecoration` | テキスト装飾 |
| `.kit-text-nowrap` / `.kit-text-break` / `.kit-text-truncate` | 折り返し制御 |

## カラー

テキスト色: `.kit-c-{name}` — 背景色: `.kit-bgc-{name}`

利用可能な名前: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `orange`, `dodgerblue`, `deeppink`, `limegreen`, `crimson`, `green`, `silver`, `black`

<div class="preview kit-flex kit-gap-s kit-flex-wrap">
  <span class="kit-bgc-primary kit-p-xs kit-rounded-s">Primary</span>
  <span class="kit-bgc-success kit-p-xs kit-rounded-s">Success</span>
  <span class="kit-bgc-danger kit-p-xs kit-rounded-s">Danger</span>
  <span class="kit-bgc-orange kit-p-xs kit-rounded-s">Orange</span>
</div>

```html
<span class="kit-bgc-primary">Primary</span>
<span class="kit-bgc-success">Success</span>
```

## ポジション

| クラス | 効果 |
| ------ | ---- |
| `.kit-static` | `position: static` |
| `.kit-relative` | `position: relative` |
| `.kit-absolute` | `position: absolute` |
| `.kit-fixed` | `position: fixed` |
| `.kit-sticky` | `position: sticky; top: 0` |

## その他

| クラス | 効果 |
| ------ | ---- |
| `.kit-scroll` / `.kit-scroll-x` / `.kit-scroll-y` | オーバーフロースクロール |
| `.kit-overflow-hidden` | `overflow: hidden` |
| `.kit-selectable` | テキスト選択可能 |
| `.kit-init` | `cursor: default` |
| `.kit-pointer` | `cursor: pointer` |
| `.kit-rounded-s/m/l/full/0` | ボーダーラジアス |
| `.kit-opacity-0/25/50/75/100` | 不透明度 |
