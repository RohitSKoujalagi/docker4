FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install


EXPOSE 5000
CMD ["node","index.js"]
