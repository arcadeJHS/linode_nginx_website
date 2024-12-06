FROM nginx:latest

# RUN apt-get update && apt-get install -y nano

# We need to remove the "default.conf" in order to use "localhost" as the default domain with the "nginx.conf" custom configuration
RUN if [ -f /etc/nginx/conf.d/default.conf ]; then mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.BAK; fi