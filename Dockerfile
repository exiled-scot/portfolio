FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install --production

COPY . .

RUN yarn build

ENV PORT=3001

CMD ["yarn", "start"]