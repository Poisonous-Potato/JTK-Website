FROM node:16

ENV NODE_ENV production

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm build

EXPOSE 1337