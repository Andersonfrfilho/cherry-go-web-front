FROM node:14

WORKDIR /usr/app

COPY package.json yarn.lock ./

COPY . .

RUN yarn && \
    yarn build

EXPOSE 3000

CMD ["yarn","start"]
