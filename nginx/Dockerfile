FROM nginx

COPY nginx/nginx.conf /etc/nginx/.

WORKDIR /usr/share/nginx/html
COPY package.json rollup_config.js ./
COPY app app/.
COPY app/index.html .

RUN apt update && apt install -y npm\
    && npm install\
    && mkdir build\
    && npm run build

#CMD ["/bin/bash", "-c", "sleep 1000"]
