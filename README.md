# SIDON

Install the latest version of Docker and docker-compose

RUN
docker-compose build;
docker-compose up -d database;
docker-compose run --rm sidon-app /bin/bash -c "./manage.py migrate";
docker-compose up -d;
docker-compose run sidon-app ./manage.py collectstatic --no-input;
