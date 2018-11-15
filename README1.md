# Image-server
  ```javascript
    /*
      上传的图片会默认转换成同名的webp格式图片文件，返回结果会按照上传格式返回，可以直接在前端请求webp格式的图片
      http://127.0.0.1/photo/7891693689182.jpg   'ok'
      http://127.0.0.1/photo/7891693689182.webp  'ok'
    */
  ```
## 接口说明

- 将图片上传至接口，成功会返回在线的图片链接提供使用

  ```javascript
  请求地址：/photo/:children1?/:children2?
  请求类型：post
  类型：file
  说明：:'children1?/:children2?' 为可选，代表图片在photo目录下的哪个文件夹，最多2级目录

  请求参数：无
  响应参数:
  { 
  	code: 200, 
  	msg: "上传成功", 
  	data: [
          'http://127.0.0.1/photo/7891693689182.jpg'
  	]
   }
  ```
- 以base64的方式将图片上传至接口，成功会返回在线的图片链接提供使用

  ```javascript
  请求地址：/blog/:children1?/:children2?
  请求类型：post
  说明：:'children1?/:children2?' 为可选，代表图片在目录下的哪个文件夹，最多2级目录

  请求参数：
  {
    imagData:'base64'
  }
  响应参数:
  { 
  	code: 200, 
  	msg: "上传成功", 
  	data: [
          'http://127.0.0.1/photo/7891693689182.jpg'
  	]
   }
  ```
  ​