FROM python:3.6

RUN mkdir -p /opt/services/engine
WORKDIR /opt/services/engine

COPY requirements.txt /opt/services/engine
COPY app /opt/services/engine
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "--bind", ":5000", "app"]
