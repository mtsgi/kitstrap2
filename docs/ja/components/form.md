# フォーム

kitstrap2はテキスト入力、トグルスイッチ、ファイル入力、フォームグループなどのフォームコンポーネントを提供します。

## テキストボックス

<div class="preview">
  <input class="kit-textbox" type="text" placeholder="デフォルトテキストボックス">
</div>

```html
<input class="kit-textbox" type="text" placeholder="デフォルトテキストボックス">
```

## テキストボックスのバリアント

<div class="preview">
  <input class="kit-textbox -flat" type="text" placeholder="フラット">
  <input class="kit-textbox -rounded" type="text" placeholder="角丸">
</div>

```html
<input class="kit-textbox -flat" type="text" placeholder="フラット">
<input class="kit-textbox -rounded" type="text" placeholder="角丸">
```

## テキストボックスのサイズ

<div class="preview">
  <input class="kit-textbox -small" type="text" placeholder="Small">
  <input class="kit-textbox -medium" type="text" placeholder="Medium">
  <input class="kit-textbox -large" type="text" placeholder="Large">
</div>

```html
<input class="kit-textbox -small" type="text" placeholder="Small">
<input class="kit-textbox -medium" type="text" placeholder="Medium">
<input class="kit-textbox -large" type="text" placeholder="Large">
```

## テキストエリア

<div class="preview">
  <textarea class="kit-textbox" placeholder="テキストエリア"></textarea>
</div>

```html
<textarea class="kit-textbox" placeholder="テキストエリア"></textarea>
```

## トグルスイッチ

<div class="preview">
  <div class="kit-toggle">
    <span>オプション切替</span>
    <input type="checkbox" id="toggle-ja">
    <label for="toggle-ja"></label>
  </div>
</div>

```html
<div class="kit-toggle">
  <span>オプション切替</span>
  <input type="checkbox" id="toggle1">
  <label for="toggle1"></label>
</div>
```

## ファイル入力

<div class="preview">
  <div class="kit-input-file">
    ファイルを選択
    <input type="file">
  </div>
</div>

```html
<div class="kit-input-file">
  ファイルを選択
  <input type="file">
</div>
```

## フォームグループ

テキストボックスとボタンを結合して使用できます。

<div class="preview">
  <div class="kit-formgroup">
    <input class="kit-textbox" type="text" placeholder="検索...">
    <button class="kit-button -primary">検索</button>
  </div>
</div>

```html
<div class="kit-formgroup">
  <input class="kit-textbox" type="text" placeholder="検索...">
  <button class="kit-button -primary">検索</button>
</div>
```
