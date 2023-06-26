FROM node:18-alpine

#ARG UID
#ARG GID
#
#ENV UID=${UID}
#ENV GID=${GID}
#
#RUN addgroup -g ${GID} --system nuxt
#RUN adduser -G laravel --system -D -s /bin/sh -u ${UID} nuxt

USER node
WORKDIR /client