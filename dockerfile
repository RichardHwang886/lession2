#FROM node:latest
FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
#COPY package.json package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3001
CMD ["npm", "run", "start:prod"]