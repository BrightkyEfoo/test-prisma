FROM node:hydrogen-alpine as base

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

USER node

WORKDIR /home/node/app

ENV DATABASE_URL="postgresql://root:12345678@db:5432/testprisma?schema=public"

COPY --chown=node:node . .

RUN npm install

RUN echo "DATABASE_URL=$DATABASE_URL" >> .env

# RUN npx prisma migrate dev --name init

# RUN npx prisma generate

ENV NODE_ENV production

ENV PORT=3000

RUN echo "PORT=$PORT" >> .env

USER node

RUN npm run build

# RUN npx prisma migrate dev --name init

# RUN npx prisma generate

EXPOSE ${PORT}

