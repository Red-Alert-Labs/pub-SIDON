docker-compose -f /opt/app/docker-compose.yml down
docker-compose -f /opt/app/docker-compose.yml build;
docker-compose -f /opt/app/docker-compose.yml up -d database;
docker-compose -f /opt/app/docker-compose.yml run --rm sidon-app /bin/bash -c "./manage.py migrate";
docker-compose -f /opt/app/docker-compose.yml up -d;
docker-compose -f /opt/app/docker-compose.yml run sidon-app ./manage.py collectstatic --no-input;
