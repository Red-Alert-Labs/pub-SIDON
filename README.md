# SIDON

## Backend Server
Python web framework is used to develop the backend application. It provides a REST API, authenticated by JWT tokens. 
The django framework was used to develop the RESTFUL API. The authentication is managed by the in built django admin module.
It also manages the roles of each registered user. Database models are generated by django ORM, and serialised by the rest framework to deliver json
data at each endpoint.
The dockerrised django application uses python 3.6 based image and application is managed by gunicorn application server. This container users a bridged network adapter of docker to create a communication only with the reverse-proxy server.

## Front-end Application
Front end application is built with react library. Single page application with dynamic page loading. Routing is managed by react-router-dom and the http requests to the API uses axios libraries. The bootstrap CSS and HTML5 design models are used for the UI.
The docker container with node image is used for building the deployment version of the react app in the build stage of the CI & CD cycle. At the end of build, only the artifacts are stored and the container is terminated.

## Database
PostgreSQL is ran in a docker container during developmentstage and production stage. The container has attached volume in production state and production state. The container has attached volume in productionstate to persist the data. The database configurations are loaded from the configuration management system. The container is connected to docker's bridged network to only communicate with django application.

## Server
NGNIX is used as the proxy server. All requests through the firewall will reach this server and the server redirects the requests according to its configuration.
At the root level, the static contents of the react web app is delivered. This prevents the usage of extra resources and the content is quickly delivered.
At the sub-directorylevel, the django admon panelis delivered to only admins for advanced data management. Some static contents of the admin page are also delivered statically, as the django collect static functions stores the file under NGNIX's static folder.
All requests made to API endpoint are forwarded to the gunicorn application server that's running the django application.

## ML Prediction Engine
A dockerized flask application installed on python container provides the support for predictio. This service is isolated from main django app to preventpython compatibility issues and easy maintenance. This docker container uses most of the modules used by machine learning instances.

## System Requirements
Ubuntu 18.04
Server 8GB RAM
80GB storage
Dual core 3.0GHZ processors

## Installation

### Setup a python runtime environtment

- Create a virtual python environment using venv or mkvirtualenv for python 3
- pip install -r sidon-app/requirements.txt

### Setup a node to build react packages

- install yarn

### Start the application
- Then run sh start-dev-env.sh

## Configuration

- Docker container ports are hard coded in the compose file. Ports conflicts will prevent the app from launching

