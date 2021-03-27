FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build app/dist/AngularApp /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#use:
# sudo docker build -t angular_app .
# sudo docker run -p 8081:80 --name angular_app angular_app
