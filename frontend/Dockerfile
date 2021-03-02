FROM node:14.15.0
# TODO: production build
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005
CMD [ "npm", "start" ]
