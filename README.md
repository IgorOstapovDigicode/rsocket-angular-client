## Install Java server with rsocket

Pull the project from here https://github.com/dsibilio/rsocket-demo
and run it with docker
**NOTE:** if there is some problem with docker, please, make changes in 
<br/> *docker-compose.yaml*:
<br/>version: '3.2'
<br/>services:
<br/>  rsocket-demo:
<br/>    container_name: "rsocket-demo"
<br/>   build: .
<br/>    ports:
<br/>      - "8080:8080"
<br/>    depends_on:
<br/>      - redis
<br/>  redis:
<br/>    container_name: "redis"
<br/>    image: "redis:5.0.5"
<br/>    ports:
<br/>      - "6379:6379"
<br/>networks:
<br/>  f-net:
<br/>    driver: "bridge" 
<br/>
<br/> and here *src/main/resources/application.yml*:
<br/>
<br/>local:
<br/>  server:
<br/>    port: 8080
<br/>spring:
<br/>  redis:
<br/>    host: redis
<br/>    port: 6379
<br/>  rsocket:
<br/>    server:
<br/>      mapping-path: /tweetsocket
<br/>      transport: websocket
<br/>

## Run the client

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
