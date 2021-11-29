# -*- coding: utf-8 -*-

from imageai.Prediction import ImagePrediction
import base64
import bottle
import random
import json

# 随机字符串
randomStr = lambda num=5: "".join(random.sample('abcdefghijklmnopqrstuvwxyz', num))

# 模型加载
prediction = ImagePrediction()
prediction.setModelTypeAsResNet()
prediction.setModelPath("/mnt/auto/model/resnet50_weights_tf_dim_ordering_tf_kernels.h5")
prediction.loadModel()


@bottle.route('/image_prediction', method='POST')
def getNextLine():
    postData = json.loads(bottle.request.body.read().decode("utf-8"))
    image = postData.get("image", None)
    image = image.split("base64,")[1]

    # 图片获取
    imagePath = "/tmp/%s" % randomStr(10)
    with open(imagePath, 'wb') as f:
        f.write(base64.b64decode(image))

    # 内容预测
    result = {}
    predictions, probabilities = prediction.predictImage(imagePath, result_count=5)
    for eachPrediction, eachProbability in zip(predictions, probabilities):
        result[str(eachPrediction)] = str(eachProbability)

    return result


@bottle.route('/', method='GET')
def getNextLine():
    return bottle.template('./html/index.html')


app = bottle.default_app()
if __name__ == "__main__":
    bottle.run(host='localhost', port=8080)
