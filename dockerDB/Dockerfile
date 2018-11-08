 FROM mysql:5.6
 RUN mkdir -p /usr/src/db
 WORKDIR /usr/src/db
 COPY src/db/ /docker-entrypoint-initdb.d/
 COPY src/db/ /usr/src/db/
 EXPOSE 3306 
 