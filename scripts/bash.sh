#!/bin/bash
#Enter bash for specific containers.

green=$(tput setaf 2)
reset=$(tput sgr0)

printf "\033c"

docker-compose ps

echo -e "\n"

read -p "What container would you like to access? " ans

printf "\033c"

echo -e "Entering $green$ans$reset bash...\n"

docker "exec" "-it" "$ans" "bash"
