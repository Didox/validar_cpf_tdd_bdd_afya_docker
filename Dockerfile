FROM node:15
WORKDIR /usr/src/app
COPY package-docker.json ./package.json
RUN npm install
COPY . .

RUN rm -rf cypress
RUN rm -rf test
RUN rm -rf .gitignore
RUN rm -rf jest.config.js

RUN npm install
EXPOSE 3000
CMD [ "node", "bin/www" ]
