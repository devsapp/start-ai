FROM python:3.6.3-jessie

RUN cd /tmp ; \
    curl -L https://qianfeng-demo.oss-accelerate.aliyuncs.com/start-ocr/leptonica-1.79.0.tar.gz | tar -zxf - ; \
    cd leptonica-1.79.0 ; \
    autoreconf -f -i ; \
    ./configure --prefix=/root/usr/local ; \
    make ; \
    make install ; \
    rm -rf /tmp/leptonica-1.79.0 ;

RUN  export PKG_CONFIG_PATH=/root/usr/local/lib/pkgconfig ; \
    cd /tmp ; \
    curl -L https://qianfeng-demo.oss-accelerate.aliyuncs.com/start-ocr/tesseract-4.1.1.tar.gz | tar -zxf - ; \
    cd tesseract-4.1.1 ;  \
    ./autogen.sh ;\
    autoreconf -f -i ; \
    ./configure --prefix=/root/usr/local ;  \
    make ;  \
    make install ; \
    rm -rf /tmp/tesseract-4.1.1 ;

WORKDIR /usr/src/app

RUN pip install \
    Cython \
    Werkzeug \
    Flask \
    requests

RUN export PKG_CONFIG_PATH=/root/usr/local/lib/pkgconfig ; \
    CPPFLAGS='-I/root/usr/local/include -L/root/usr/local/lib' pip install tesserocr

RUN git clone https://github.com/tesseract-ocr/tessdata_fast.git
RUN pip install Pillow

COPY ./app.py .
COPY ./samples ./samples
COPY ./templates ./templates

ENV LD_LIBRARY_PATH /root/usr/local/lib
ENV TESSDATA_PREFIX /usr/src/app/tessdata_fast

CMD [ "python", "./app.py" ]