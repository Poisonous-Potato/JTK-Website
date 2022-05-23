FROM node:16

# install dependencies
WORKDIR /app

COPY . .
RUN yarn cache clean
RUN yarn install --update-checksums --frozen-lockfile
RUN yarn  build

EXPOSE 3000
ENV HOST=0.0.0.0

CMD [ "yarn", "start" ]