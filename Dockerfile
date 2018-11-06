FROM mhart/alpine-node:latest
MAINTAINER Manuel Venegas <mengasis@outlook.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]