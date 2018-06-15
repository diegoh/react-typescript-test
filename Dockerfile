FROM node:8.11.3-alpine AS build
WORKDIR /app
COPY . .
RUN yarn && yarn build --production

FROM nginx:1.15.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
