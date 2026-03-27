import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '../../../src/index.scss'
import './custom.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
