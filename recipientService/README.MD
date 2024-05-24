# How it Works

## To generate the Image in docker
```
docker build .
```

### dockerId: 85b6a2d0c46242f4a6a5035c610a3cd6348451528a0b89752dbfc60274488d4e

```
docker run 85b6a2d0c46242f4a6a5035c610a3cd6348451528a0b89752dbfc60274488d4e
```

- And the server will be started on port 3002..


### POSTMAN

<!-- docker build -t recipient-app . -->

```
docker build -t k8s.gcr.io/recipient-service:v0.0.1 .

```

```
docker run -p 3002:3002 k8s.gcr.io/recipient-service:v0.0.1
```