const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  // 删除所有console.log
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 按需引入vant组件
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }
    ],
    ...prodPlugins
  ]
}
