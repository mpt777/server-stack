docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker compose down -v

docker compose -f docker-compose.prod.yml up -d --build

docker compose -f docker-compose.prod.yml exec server python manage.py migrate --noinput

docker compose -f docker-compose.prod.yml exec server python manage.py collectstatic --no-input --clear


https://testdriven.io/blog/django-lets-encrypt/

