FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN NODE_OPTIONS=--max-old-space-size=4096 yarn build

RUN yarn install

COPY . .

RUN yarn build

ENV PORT=3001

CMD ["yarn", "start"]
