# Stage 1: build with Node (version from .nvmrc)
FROM node:24-alpine AS build
WORKDIR /app

# Dependencies first, to take advantage of layer caching
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: static server
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
