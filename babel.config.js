module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      "@babel/preset-env", {
        modules: false
      }
    ],
    '@babel/preset-react',
      '@babel/preset-typescript'
  ]
  const plugins = [
    '@babel/plugin-syntax-dynamic-import'
  ]

  return {
    presets,
    plugins
  }
}