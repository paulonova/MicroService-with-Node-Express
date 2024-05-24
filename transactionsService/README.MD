# How it Works

## To generate the Image in docker
```
docker build .
```

### dockerId: d9664c90b5dd1a4d423bf5c2d76e034218abb2dd9c998c8aeb45e5371c099428

```
docker run d9664c90b5dd1a4d423bf5c2d76e034218abb2dd9c998c8aeb45e5371c099428
```

- And the server will be started on port 3001..



### POSTMAN

<!-- docker build -t express-app . -->

```
docker build -t k8s.gcr.io/transactions-service:v0.0.1 .
```

```
docker run -p 3001:3001 k8s.gcr.io/transactions-service:v0.0.1