echo "Preparing python env"
pip freeze > ./sidon-app/requirements.txt
sed -i.bak '/^psycopg2-binary*/d' ./sidon-app/requirements.txt
echo "psycopg2==2.8.4" >> ./sidon-app/requirements.txt
sed '\'
cd ./web-app
yarn run build
cd ..
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up -d database;
docker-compose -f docker-compose.dev.yml run --rm sidon-app /bin/bash -c "./manage.py migrate";
docker-compose -f docker-compose.dev.yml up -d;
docker-compose -f docker-compose.dev.yml run sidon-app ./manage.py collectstatic --no-input;
