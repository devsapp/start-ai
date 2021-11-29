FROM python:3.9.0-slim

WORKDIR /usr/src/app
RUN pip install torch -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple
COPY . .

CMD [ "python", "-u", "/usr/src/app/app.py" ]
