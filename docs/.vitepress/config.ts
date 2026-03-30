import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  title: 'kitstrap2',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'A lightweight CSS framework written in SCSS',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Components', link: '/components/button' },
          { text: 'Utilities', link: '/utilities/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/guide/getting-started' },
              ],
            },
          ],
          '/components/': [
            {
              text: 'Components',
              items: [
                { text: 'Button', link: '/components/button' },
                { text: 'Form', link: '/components/form' },
                { text: 'Typography', link: '/components/typography' },
                { text: 'Badge', link: '/components/badge' },
                { text: 'Notice', link: '/components/notice' },
              ],
            },
            {
              text: 'Layout',
              items: [
                { text: 'Container', link: '/components/container' },
                { text: 'Box', link: '/components/box' },
                { text: 'Pane', link: '/components/pane' },
                { text: 'Header & Footer', link: '/components/header' },
                { text: 'Navbar', link: '/components/navbar' },
              ],
            },
            {
              text: 'Navigation',
              items: [
                { text: 'Tab', link: '/components/tab' },
                { text: 'Toolbar', link: '/components/toolbar' },
                { text: 'Menu', link: '/components/menu' },
                { text: 'Breadcrumb', link: '/components/breadcrumb' },
              ],
            },
            {
              text: 'Data & Content',
              items: [
                { text: 'Table', link: '/components/table' },
                { text: 'Tree', link: '/components/tree' },
                { text: 'Tooltip', link: '/components/tooltip' },
                { text: 'Link', link: '/components/link' },
                { text: 'Progress', link: '/components/progress' },
                { text: 'Spinner', link: '/components/spinner' },
              ],
            },
          ],
          '/utilities/': [
            {
              text: 'Utilities',
              items: [
                { text: 'Overview', link: '/utilities/' },
              ],
            },
          ],
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: 'SCSSで記述された軽量CSSフレームワーク',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/getting-started' },
          { text: 'コンポーネント', link: '/ja/components/button' },
          { text: 'ユーティリティ', link: '/ja/utilities/' },
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'ガイド',
              items: [
                { text: 'はじめに', link: '/ja/guide/getting-started' },
              ],
            },
          ],
          '/ja/components/': [
            {
              text: 'コンポーネント',
              items: [
                { text: 'ボタン', link: '/ja/components/button' },
                { text: 'フォーム', link: '/ja/components/form' },
                { text: 'タイポグラフィ', link: '/ja/components/typography' },
                { text: 'バッジ', link: '/ja/components/badge' },
                { text: '通知', link: '/ja/components/notice' },
              ],
            },
            {
              text: 'レイアウト',
              items: [
                { text: 'コンテナ', link: '/ja/components/container' },
                { text: 'ボックス', link: '/ja/components/box' },
                { text: 'ペイン', link: '/ja/components/pane' },
                { text: 'ヘッダー・フッター', link: '/ja/components/header' },
                { text: 'ナビバー', link: '/ja/components/navbar' },
              ],
            },
            {
              text: 'ナビゲーション',
              items: [
                { text: 'タブ', link: '/ja/components/tab' },
                { text: 'ツールバー', link: '/ja/components/toolbar' },
                { text: 'メニュー', link: '/ja/components/menu' },
                { text: 'パンくずリスト', link: '/ja/components/breadcrumb' },
              ],
            },
            {
              text: 'データ・コンテンツ',
              items: [
                { text: 'テーブル', link: '/ja/components/table' },
                { text: 'ツリービュー', link: '/ja/components/tree' },
                { text: 'ツールチップ', link: '/ja/components/tooltip' },
                { text: 'リンク', link: '/ja/components/link' },
                { text: 'プログレスバー', link: '/ja/components/progress' },
                { text: 'スピナー', link: '/ja/components/spinner' },
              ],
            },
          ],
          '/ja/utilities/': [
            {
              text: 'ユーティリティ',
              items: [
                { text: '概要', link: '/ja/utilities/' },
              ],
            },
          ],
        },
      },
    },
  },
})
