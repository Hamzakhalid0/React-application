FROM node:14.18.2-alpine as builder

COPY package*.json package-lock.json /app/

RUN npm install

WORKDIR /app

COPY ./ /app/

RUN npm run build


FROM nginx:1.16.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
