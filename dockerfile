FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner

COPY .devops/conf/nginx.conf /etc/nginx/nginx.conf
COPY .devops/conf/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8082

CMD ["nginx", "-g", "daemon off;"]
