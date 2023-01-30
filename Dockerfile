# Stage 1
FROM node:18-alpine3.16 AS app-build

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g @angular/cli --no-update-notifier && npm ci --no-update-notifier

COPY . .

RUN ng build

# Stage 2

FROM nginx:1.23.3-alpine

COPY --from=app-build /app/dist/tic-tac-toe-ng /usr/share/nginx/html
