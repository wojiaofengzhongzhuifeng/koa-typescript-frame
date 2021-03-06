define({ "api": [
  {
    "type": "get",
    "url": "/blogs/:id",
    "title": "使用 id 获取某篇 blog",
    "name": "getBlog",
    "group": "Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>想要获取 blog 的 id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blogTitle",
            "description": "<p>blog 的标题.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blogContent",
            "description": "<p>blog 的内容.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"message\": \"获取某个数据成功\",\n  \"data\": {\n    \"blogTitle\": \"blog 标题\",\n    \"blogContent\": \"今天天气很好\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BlogNotFound",
            "description": "<p>The id of the Blog was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"BlogNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/index.ts",
    "groupTitle": "Blog"
  }
] });
