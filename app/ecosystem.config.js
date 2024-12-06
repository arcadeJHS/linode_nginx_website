/**
  Currently pm2 is not used, because the application is running in a docker container (and we are setting: "restart: always" in the config)
  pm2 start ecosystem.config.js
  pm2 save
  pm2 startup
  pm2 list

  OPPURE (se nel docker-compose.yml, per il servizio in questione, è impostato "restart: always" e il demone di docker è impostato per partire in automatico all'avvio del server):
  docker compose up -d --build
 */

module.exports = {
  apps: [{
    name: "linode_docker_test",
    script: "docker compose",
    args: "up -d --build",
    cwd: "/home/jhs/docker_test_application",
    restart_delay: 5000,
    watch: true,
    env: {
      "NODE_ENV": "production"
    }
  }]
};