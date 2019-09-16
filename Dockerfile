# base image
FROM node:8.11.2-jessie

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @angular/cli@7.1.2

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0 --port 4200
