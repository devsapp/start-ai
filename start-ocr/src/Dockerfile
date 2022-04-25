FROM rsonghuster/tesseract:latest

RUN git clone https://github.com/tesseract-ocr/tessdata_fast.git

COPY ./app.py .
COPY ./samples ./samples
COPY ./templates ./templates

ENV LD_LIBRARY_PATH /root/usr/local/lib
ENV TESSDATA_PREFIX /usr/src/app/tessdata_fast

CMD [ "python", "./app.py" ]