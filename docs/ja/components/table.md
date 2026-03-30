# テーブル

ストライプ、ボーダー、ホバー、コンパクトバリアント付きスタイルテーブル。

## 基本的な使い方

<div class="preview">
  <table class="kit-table">
    <thead>
      <tr><th>名前</th><th>タイプ</th><th>ステータス</th></tr>
    </thead>
    <tbody>
      <tr><td>アイテム 1</td><td>ファイル</td><td>アクティブ</td></tr>
      <tr><td>アイテム 2</td><td>フォルダ</td><td>非アクティブ</td></tr>
      <tr><td>アイテム 3</td><td>ファイル</td><td>アクティブ</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table">
  <thead>
    <tr><th>名前</th><th>タイプ</th><th>ステータス</th></tr>
  </thead>
  <tbody>
    <tr><td>アイテム 1</td><td>ファイル</td><td>アクティブ</td></tr>
    <tr><td>アイテム 2</td><td>フォルダ</td><td>非アクティブ</td></tr>
    <tr><td>アイテム 3</td><td>ファイル</td><td>アクティブ</td></tr>
  </tbody>
</table>
```

## ストライプ

<div class="preview">
  <table class="kit-table -striped">
    <thead><tr><th>名前</th><th>値</th></tr></thead>
    <tbody>
      <tr><td>行 1</td><td>値 1</td></tr>
      <tr><td>行 2</td><td>値 2</td></tr>
      <tr><td>行 3</td><td>値 3</td></tr>
      <tr><td>行 4</td><td>値 4</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -striped">...</table>
```

## ボーダー

<div class="preview">
  <table class="kit-table -bordered">
    <thead><tr><th>A</th><th>B</th><th>C</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>2</td><td>3</td></tr>
      <tr><td>4</td><td>5</td><td>6</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -bordered">...</table>
```

## ホバー

<div class="preview">
  <table class="kit-table -hoverable">
    <thead><tr><th>名前</th><th>アクション</th></tr></thead>
    <tbody>
      <tr><td>ホバーしてみてください</td><td>行 1</td></tr>
      <tr><td>ホバーしてみてください</td><td>行 2</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -hoverable">...</table>
```

## コンパクト

<div class="preview">
  <table class="kit-table -compact -bordered">
    <thead><tr><th>ID</th><th>名前</th><th>ステータス</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>プロセス A</td><td>実行中</td></tr>
      <tr><td>2</td><td>プロセス B</td><td>停止</td></tr>
      <tr><td>3</td><td>プロセス C</td><td>実行中</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -compact -bordered">...</table>
```

## セマンティックヘッダーカラー

<div class="preview">
  <table class="kit-table -primary">
    <thead><tr><th>名前</th><th>値</th></tr></thead>
    <tbody><tr><td>アイテム</td><td>100</td></tr></tbody>
  </table>
</div>

```html
<table class="kit-table -primary">...</table>
```

## レスポンシブ

<div class="preview">
  <div class="kit-table-responsive">
    <table class="kit-table">
      <thead><tr><th>列 1</th><th>列 2</th><th>列 3</th><th>列 4</th><th>列 5</th></tr></thead>
      <tbody><tr><td>データ</td><td>データ</td><td>データ</td><td>データ</td><td>データ</td></tr></tbody>
    </table>
  </div>
</div>

```html
<div class="kit-table-responsive">
  <table class="kit-table">...</table>
</div>
```
