FROM node:18.17.1-alpine
ENV PORT=8000
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
EXPOSE 8000

CMD [ "yarn", "dev" ]