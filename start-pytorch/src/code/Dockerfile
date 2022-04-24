FROM bitnami/pytorch:latest

WORKDIR /usr/src/app
RUN pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple
COPY . .

CMD [ "python", "-u", "/usr/src/app/app.py" ]
