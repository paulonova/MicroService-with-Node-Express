# GENERAL INFORMATIONS

## This micro-services test has some parts:

### RecipientIdService ****************************

-  run on port: 3002

#### DOCKER

- To save the images in Docker Repository, yu need to create the repository in DockerHub.
- will be like  username/repository-name
- Example: paulonova/recipient-service
- The "username" needs to be set before the / when you build the image, otherwise it will be an error of credentials.

## To generate the Image in docker
```
docker build -t paulonova/recipient-service:v0.0.1 .
```

```
docker run -p 3002:3002 paulonova/recipient-service:v0.0.1
```

## TransactionsService

- runs on port: 3001

## DOCKER

```
docker build -t paulonova/transactions-service:v0.0.1 .
```

```
docker run -p 3001:3001 paulonova/transactions-service:v0.0.1
```

## Kubernet

<a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/">Kubernet</a>

* In micro-service/config/k8s

```
kubectl apply -f recipient.yaml
```

```
kubectl apply -f transactions.yaml
```


<h2>Check the services</h2>

```
kubectl get services
```

<h2>Check the Pods running</h2>

```
kubectl get pods
```

<h2>DELETE PODS or SERVICES</h2>

```
kubectl delete pods <pod-name>
```

```
kubectl delete service <service-name>
```

<h2>Create Kubernet Service</h2>

```
docker build -t paulonova/transactions .
```

```
docker push paulonova/transactions
```

```
docker build -t paulonova/recipient .
```

```
docker push paulonova/recipient
```

## MONGO DB

<p>In the transactionsService folder, run this commands</p>

```
npm install typescript ts-node-dev @types/express
```

```
tsc -init
```

## Kubernet to deploy in to MongoDB

- Link: https://hub.docker.com/_/mongo

* Create a mongo service recipient-mongo-depl.yaml
* kubectl apply -f recipient-mongo-depl.yaml

* kubectl logs <pod name>


##

* Stopped at 27:00