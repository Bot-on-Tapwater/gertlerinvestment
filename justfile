# Kill containers and volumes
down:
    docker compose -f docker-compose.local.yml down -v --remove-orphans


# Build images and start up containers
build:
    docker compose -f docker-compose.local.yml up --build