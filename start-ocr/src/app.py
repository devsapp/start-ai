# -*- coding: utf-8 -*-
import logging
import tesserocr
import json
from PIL import Image
import requests
from io import BytesIO
from flask import Flask, request, render_template, send_file
from werkzeug.routing import  BaseConverter

class RegexConverter(BaseConverter):
    def __init__(self,url_map,*items):
        super(RegexConverter,self).__init__(url_map)
        self.regex=items[0]

app = Flask(__name__)
app.url_map.converters['regex'] = RegexConverter

@app.route('/')
def index():
   return render_template('index.html')


@app.route('/<regex("sample[1-3].jpg"):image>')
def sample(image):
    image_path = '/usr/src/app/samples/%s' % image
    return send_file(image_path, mimetype='image/gif')

@app.route('/recognize', methods = ['POST'])
def recognize():
    type = request.form.get('type')
    print('recognition type is: %s' % type)
    api = tesserocr.PyTessBaseAPI()
    text = None
    error = None
    # 处理示例图片
    if type == 'sample':
        sample = request.form.get('sample')
        api.SetImageFile("samples/%s" % sample)
        text = api.GetUTF8Text()
    # 处理上传图片
    elif type == 'upload':
        fileItem = request.files['upload'].stream.read()
        # fileItem = request.form.get('upload')
        image = Image.open(BytesIO(fileItem))
        text = tesserocr.image_to_text(image)
    # 处理图片 URL
    elif type == 'url':
        url = request.form.get('url')
        try:
            response = requests.get(url)
            image = Image.open(BytesIO(response.content))
            text = tesserocr.image_to_text(image)
        except Exception as e:
            if hasattr(e, 'message'):
                error = e.message
            else:
                error = str(e)
    if error:
      print(error)
      return '500 Internal Error', 500
    else:
      return json.dumps({"code": 200, "text": text}).encode(), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=9000)
