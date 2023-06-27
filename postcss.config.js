module.exports = ({ file }) => {
  // vant使用375宽的设计搞，我们用的750的设计稿
  const designWidth = file.indexOf('vant') !== -1 ? 375 : 750
  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport-8-plugin': {
        viewportWidth: designWidth,
        unitToConvert: 'px',
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        replace: true
      }
    }
  }
}
