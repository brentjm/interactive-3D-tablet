FROM node:16.13.1 AS builder

RUN mkdir /app
WORKDIR /app

COPY /app /app

RUN apt update && apt install -y npm\
    && npm install\
    && mkdir build\
    && npm run build


FROM nginx

COPY nginx/nginx.conf /etc/nginx/conf.d/.
RUN mkdir /etc/nginx/ssl
COPY ./nginx/xeon.crt ./nginx/xeon.key /etc/nginx/ssl/

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
COPY --from=builder /app/synthetic-tablet /usr/share/nginx/html/synthetic-tablet
