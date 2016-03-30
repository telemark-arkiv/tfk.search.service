###########################################################
#
# Dockerfile for tfk.search.service
#
###########################################################

# Setting the base to nodejs 4.4.1
FROM mhart/alpine-node:4.4.1

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVER_PORT 3000
ENV JWT_SECRET "Louie Louie, oh no, I got to go"
ENV COOKIE_SECRET "Louie Louie, oh no, I got to go"
ENV ELASTIC_URL "http://elasticsearch"
ENV ELASTIC_PORT 9200

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js