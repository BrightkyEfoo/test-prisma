FROM node:hydrogen-alpine as base

USER node

WORKDIR /usr/src/app

ENV DATABASE_URL="postgresql://root:12345678@db:5432/testprisma?schema=public"

COPY . .

RUN npm install

RUN echo "DATABASE_URL=$DATABASE_URL" >> .env

# RUN npx prisma migrate dev --name init

# RUN npx prisma generate

ENV NODE_ENV production

ENV PORT=3000

RUN echo "PORT=$PORT" >> .env

USER node

EXPOSE ${PORT}

CMD npm run build
