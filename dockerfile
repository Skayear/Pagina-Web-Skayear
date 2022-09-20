FROM nginx:1.23.0-alpine
#Install tools
RUN apk add vim \
    && apk add curl \
    && apk add nano;

COPY .devops/conf/default.conf /etc/nginx/conf.d/default.conf
COPY .devops/conf/nginx.conf /etc/nginx/nginx.conf

COPY ./src /usr/share/nginx/html

EXPOSE 8082

CMD [ "nginx" , "-g" , "daemon off;"]