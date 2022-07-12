# syntax=docker/dockerfile:1

FROM node:16.15.1
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
COPY . .
#RUN npm install
CMD ["npm", "start"]
