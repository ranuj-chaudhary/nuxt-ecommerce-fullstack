// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt([
  eslintPluginPrettierRecommended,
  {
    // Add custom ESLint rules or overrides here
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
])
