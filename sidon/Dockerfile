FROM python:3.6

RUN mkdir -p /opt/services/djangoapp/src
WORKDIR /opt/services/djangoapp/src

COPY . /opt/services/djangoapp/src

RUN pip install < requirements.txt

EXPOSE 8000

CMD ["gunicorn", "--bind", ":8000", "hello.wsgi:application"]
