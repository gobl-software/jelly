#!/bin/bash
#Setup containers

printf "\033c"

./scripts/mongo_setup.sh

printf "\033c"

read -p "Run mongodb container now? [y/n]: " ans

printf "\033c"

if [ $ans == "y" ]; then
    docker-compose "up" "-d"
fi
