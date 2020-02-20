echo "Preparing python env"
pip freeze > ./sidon-app/requirements.dev.txt
sed -i.bak '/^psycopg2-binary*/d' ./sidon-app/requirements.dev.txt
echo "psycopg2==2.8.4" >> ./sidon-app/requirements.dev.txt

echo "React Build"
cd ./web-app
yarn install
yarn run build
cd ..
echo "Launching Database"
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up -d database;
echo "[Database] Done"
wait
echo "[Database] Ready"
echo "[APP] Applying migrations"
docker-compose -f docker-compose.dev.yml run --rm sidon-app /bin/bash -c "./manage.py migrate";
docker-compose -f docker-compose.dev.yml up -d;
docker-compose -f docker-compose.dev.yml run sidon-app ./manage.py collectstatic --no-input;
echo "[APP] Ready"
