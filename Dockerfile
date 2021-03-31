FROM node:14

RUN yarn global add gatsby-cli

WORKDIR /home/node
USER node

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
