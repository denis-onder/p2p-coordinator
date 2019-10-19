#!/bin/bash

cd ./app

if [ ! -d "keys" ]; then
  mkdir keys
fi

cd ./keys

rm *domain*

echo Generating SSL Key/Cert pair...

openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
    -subj "/C=US/ST=Denial/L=Denial/O=Denial/CN=www.example.com" \
    -keyout domain.key -out domain.crt