# Table

Styled tables with striped, bordered, hoverable, and compact variants.

## Basic usage

<div class="preview">
  <table class="kit-table">
    <thead>
      <tr><th>Name</th><th>Type</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>Item 1</td><td>File</td><td>Active</td></tr>
      <tr><td>Item 2</td><td>Folder</td><td>Inactive</td></tr>
      <tr><td>Item 3</td><td>File</td><td>Active</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table">
  <thead>
    <tr><th>Name</th><th>Type</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Item 1</td><td>File</td><td>Active</td></tr>
    <tr><td>Item 2</td><td>Folder</td><td>Inactive</td></tr>
    <tr><td>Item 3</td><td>File</td><td>Active</td></tr>
  </tbody>
</table>
```

## Striped

<div class="preview">
  <table class="kit-table -striped">
    <thead><tr><th>Name</th><th>Value</th></tr></thead>
    <tbody>
      <tr><td>Row 1</td><td>Value 1</td></tr>
      <tr><td>Row 2</td><td>Value 2</td></tr>
      <tr><td>Row 3</td><td>Value 3</td></tr>
      <tr><td>Row 4</td><td>Value 4</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -striped">...</table>
```

## Bordered

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

## Hoverable

<div class="preview">
  <table class="kit-table -hoverable">
    <thead><tr><th>Name</th><th>Action</th></tr></thead>
    <tbody>
      <tr><td>Hover me</td><td>Row 1</td></tr>
      <tr><td>Hover me</td><td>Row 2</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -hoverable">...</table>
```

## Compact

<div class="preview">
  <table class="kit-table -compact -bordered">
    <thead><tr><th>ID</th><th>Name</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Process A</td><td>Running</td></tr>
      <tr><td>2</td><td>Process B</td><td>Stopped</td></tr>
      <tr><td>3</td><td>Process C</td><td>Running</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="kit-table -compact -bordered">...</table>
```

## Semantic header colors

<div class="preview">
  <table class="kit-table -primary">
    <thead><tr><th>Name</th><th>Value</th></tr></thead>
    <tbody><tr><td>Item</td><td>100</td></tr></tbody>
  </table>
</div>

```html
<table class="kit-table -primary">...</table>
```

## Responsive

<div class="preview">
  <div class="kit-table-responsive">
    <table class="kit-table">
      <thead><tr><th>Col 1</th><th>Col 2</th><th>Col 3</th><th>Col 4</th><th>Col 5</th></tr></thead>
      <tbody><tr><td>Data</td><td>Data</td><td>Data</td><td>Data</td><td>Data</td></tr></tbody>
    </table>
  </div>
</div>

```html
<div class="kit-table-responsive">
  <table class="kit-table">...</table>
</div>
```
