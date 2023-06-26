const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()
const cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置静态资源目录 整一个文件夹 通过域名能访问
app.use(express.static(path.join(__dirname,"../static")))
//数据模型
//路由配置
const upload=require('./rout.js');
app.use('/upload',upload)
app.listen(3000, () => console.log("服务器开启"))
