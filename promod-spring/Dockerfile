FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY promod-spring.jar promod.jar
ENTRYPOINT ["java","-jar","/promod.jar"]
