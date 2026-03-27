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
