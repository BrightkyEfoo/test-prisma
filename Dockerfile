FROM node:hydrogen-alpine as base

WORKDIR /usr/src/app

ENV DATABASE_URL="postgresql://root:12345678@db:5432/testprisma?schema=public"

COPY . .

RUN npm install

RUN echo "DATABASE_URL=$DATABASE_URL" >> .env

RUN npm run build

RUN npx prisma migrate dev --name init

RUN npx prisma generate

ENV NODE_ENV production

ENV PORT=3000

USER node

EXPOSE ${PORT}

CMD npm start
