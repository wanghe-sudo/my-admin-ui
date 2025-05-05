const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // 关闭校验
    lintOnSave: false,
    // 生产环境是否需要sourcemap
    productionSourceMap: false,
    // 部署应用包时的基本 URL。
    // 用法和 webpack 一样，这里只设置了基本 URL，因为文件都放在 dist 目录下，所以 baseUrl 设置成 '/'。
    // 如果部署在 GitHub Pages，那么 baseUrl 应该设置成仓库名。
    // 如果部署在 URL_ADDRESS  // 如果部署在 https://<USERNAME>.github.io/<REPO>/，那么 baseUrl 应该设置成 "/<REPO>/"。
    publicPath: "/",
    // build时构建文件的目录，构建时传入 --outDir 或 -o 指定输出目录。
    // 默认值 'dist'，构建输出将放在项目根目录下的 dist 目录。
    // 如果 dist 目录存在，构建之前会被删除。
    // 可以是一个绝对路径，也可以是相对于项目根目录的相对路径。
    // 例如，设置为 'dist' 或 './dist' 都可以。
    // 注意：如果设置为 './dist'，则构建输出将放在项目根目录下的 dist 目录中。
    // 例如，如果项目根目录为 /home/user/project，那么构建输出将放在 /home/user/project/dist 目录中。
    outputDir: "dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // 相对于 outputDir 的目录，也可以是一个绝对路径。
    assetsDir: "assets",

    devServer: {
        //  服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
        port: 2003,
        host: "0.0.0.0",
        //  是否开启 https
        https: false,
        //  服务启动时是否自动打开浏览器
        open: false,
        //  配置后台代理
        //  注意：这里只能配置当前 Vite 服务的代理，不能配置跨域。
        //  跨域需要使用其他方式，例如：nginx、CORS 等。
        proxy: {
            "/api": {
                target: "http://localhost:2002",
                changeOrigin: true
            }
        },
        client: {
            // // 关闭全屏报错 Uncaught runtime errors:
            overlay: false
        }
    }
})
