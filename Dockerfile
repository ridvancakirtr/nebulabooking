FROM node:12.18.2

WORKDIR /
COPY backend .

RUN npm install
CMD npm run start
EXPOSE 7878
