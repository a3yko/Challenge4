FROM node:14-alpine AS build
COPY package*.json /src/app/
WORKDIR /src/app
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /src/app/
RUN npm run-script build:prod
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /src/app/www/ /usr/share/nginx/html/
