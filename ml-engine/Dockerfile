FROM python:3.6

RUN mkdir -p /opt/services/engine
WORKDIR /opt/services/engine

COPY requirements.txt /opt/services/engine

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "/opt/services/engine/app.py"]
