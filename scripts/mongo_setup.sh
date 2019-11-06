#!/bin/bash
#Setup MongoDB credentials.

green=$(tput setaf 2)
reset=$(tput sgr0)

echo -e "${green}Running Database Setup...${reset}\n"

read -p "Use default configuration? [y/n]: " ans

if [ $ans == "n" ]; then
  while [$usr -ne ""] || [$pass -ne ""]; do
    echo -e "\n"
    read -p "Enter username: " usr
    read -p "Enter password: " pass
  done

  tee ../docker-compose.yml <<EOF
version: "3.6"

services:
  mongo:
    container_name: mongodb
    image: mongo
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: $usr
      MONGO_INITDB_ROOT_PASSWORD: $pass
EOF
fi
