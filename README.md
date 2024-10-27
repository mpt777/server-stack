
docker compose -f docker-compose.prod.yml down -v

docker compose -f docker-compose.prod.yml up -d --build

docker compose -f docker-compose.prod.yml exec server python manage.py migrate --noinput

docker compose -f docker-compose.prod.yml exec server python manage.py collectstatic --no-input --clear



docker compose -f docker-compose.prod.yml exec acme-companion /app/force_renew

docker compose -f docker-compose.prod.yml logs

https://testdriven.io/blog/django-lets-encrypt/

