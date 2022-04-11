FROM node:14.18.2-alpine

COPY package*.json package-lock.json /api/

RUN npm install

WORKDIR /api

COPY ./ /api/

EXPOSE 3000

CMD ["npm", "start"]
