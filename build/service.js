const { execSync } = require('child_process')
const path = require('path')
const glob = require('glob')

const params = process.argv.slice(2)
const index = params.findIndex((item) => item.startsWith('page='))
const page = params[index]

if (index !== -1) {
  params.splice(index, 1)
}

const paramsStr = params.join(' ')

if (page) {
  // 指定项目单独打包
  process.env.PAGE_NAME = page.split('=')[1]
  execSync(`vue-cli-service ${paramsStr}`, {
    stdio: 'inherit'
  })
} else {
  // 分目录打包所有项目
  const PATH_ENTRY = path.resolve(__dirname, '../src/pages')
  const entryFilePaths = glob.sync(PATH_ENTRY + '/**/main.js')
  entryFilePaths.forEach((filePath) => {
    process.env.PAGE_NAME = filePath.match(/([^/]+)\/main\.js$/)[1]
    console.log(`${'\033[36m'}正在打包 ${process.env.PAGE_NAME} 页面${'\033[0m'}`, '\n')
    execSync(`vue-cli-service ${paramsStr}`, {
      stdio: 'inherit'
    })
  })
}
