FROM node:12-alpine3.14
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm i
ENV PORT 4005
EXPOSE 4005
CMD node index.js


