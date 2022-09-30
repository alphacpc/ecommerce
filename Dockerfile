FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY Config .
COPY models .
COPY Routers .
COPY .env .
COPY server.js .
COPY yarn.lock .
COPY Dockerfile .

EXPOSE 5050

CMD ["npm","start"]