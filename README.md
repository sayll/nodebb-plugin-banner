## 调试
1. 编写插件，保存。
2. `yarn link` 来软链接插件
3. 在 NodeBB 目录下执行 `yarn link nodebb-plugin-banner` 来引入插件
4. `./nodebb build && ./nodebb dev` 启动 NodeBB 开发环境 
