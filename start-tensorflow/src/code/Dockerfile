FROM python:3.9.0-slim

RUN pip install tensorflow-cpu -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple

WORKDIR /usr/src/
COPY . .

CMD [ "python", "-u", "/usr/src/app.py" ]
