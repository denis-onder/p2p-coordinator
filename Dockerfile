FROM node:10.16.3-alpine

WORKDIR /app

COPY . .

ENV SERVER_PORT=8000

RUN npm install

EXPOSE 8000

CMD npm start