# ====== Basic =======
FROM node:12.13.1-alpine as basic

ENV APP_DIR=/app

WORKDIR ${APP_DIR}

COPY package.json package.json
COPY yarn.lock yarn.lock


# ===== For developmemnt =====
FROM basic as develop

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "dev"]
# ============================


# ===== For production =====
FROM basic as production

COPY . ${APP_DIR}

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "start"]
# ============================
