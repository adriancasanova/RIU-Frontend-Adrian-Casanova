FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./


RUN npm cache clean --force


RUN npm install


COPY . .

RUN npm run build --configuration=production --base-href=/

FROM nginx:alpine

RUN apk add --no-cache nodejs npm

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/riu-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
