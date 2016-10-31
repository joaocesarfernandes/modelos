FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /home/seta/rest-genoa/vendas
ADD rest-genoa-0.0.1-SNAPSHOT.jar rest-genoa-0.0.1-SNAPSHOT.jar
RUN sh -c 'touch /rest-genoa-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/rest-genoa-0.0.1-SNAPSHOT.jar"]

