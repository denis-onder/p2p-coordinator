#!/bin/bash

cd ./app

if [ ! -d "keys" ]; then
  mkdir keys
fi

cd keys

rm *domain*

Generating SSL Key/Cert pair...

openssl req \
  -newkey rsa:2048 -nodes -keyout domain.key \
  -x509 -days 365 -out domain.crt
