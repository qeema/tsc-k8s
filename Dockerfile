FROM node:14.15.1
WORKDIR /app
COPY . /app
RUN npm install && npm run build

CMD ["node", "/app/dist/index.js"]
