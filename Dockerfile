FROM node:12 AS builder

# Create app directory
WORKDIR /usr/src

# Copy projects
COPY . .

WORKDIR /usr/src
RUN npm install
RUN npm run build-docker

FROM nginx:alpine

COPY --from=builder /usr/src/dist/* /usr/share/nginx/html/
