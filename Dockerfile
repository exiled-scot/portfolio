FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm build

ENV PORT=3001

CMD ["npm", "run", "start"]
