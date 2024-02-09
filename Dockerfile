FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install --production

COPY package*.json ./

ENV PORT=3001

CMD ["yarn", "start"]
