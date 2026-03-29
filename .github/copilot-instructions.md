# GitHub Copilot カスタム命令

- kitstrap2はSCSSで記述されたCSSフレームワークで、Viteでビルドされます
- kitstrap2は、kitstrapの後継でよりモダンなCSSフレームワークです
- 実装に合わせて docs 以下のドキュメント(各言語)も更新する

## SCSS 規約

- `@use` に名前空間エイリアスを付けて使う（例: `@use '../variables' as v;`）
- クラスプレフィックスは `kit-`
- モディファイアは `.-modifier` 形式（例: `.kit-button.-primary`）
- 色・サイズのハードコード禁止。ビルド時は `v.$kit-colors` 等のSCSSマップを参照し、コンポーネントのCSS出力では `var(--kit-color-*)` 等のCSSカスタムプロパティを使用する
- ダークモード対応はCSSカスタムプロパティ経由で自動的に行われるため、コンポーネントに直接色値を書かない

## ビルド規約

- CSS minifyには `cssMinify: 'lightningcss'` を使う
- `cssCodeSplit: false` を維持し、CSSは単一ファイルとして出力する

## ドキュメント規約

- コンポーネント追加・変更時は `docs/components/` (英語) と `docs/ja/components/` (日本語) を**必ず両方**同時に更新する。片方のみの更新は不可
