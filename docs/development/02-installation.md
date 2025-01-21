# Installation

Receipt Wrangler can be installed either via docker (recommended) or bare metal.

## Docker

## Prerequisites

* Docker

Receipt Wrangler API and Desktop development environment has been containerized for ease of development. Below we'll go through step 
by step to get it installed.

1\. Clone the receipt-wrangler-monolith: https://github.com/Receipt-Wrangler/receipt-wrangler-monolith. This repository contains Dockerfiles for the prod monolithic image, as well as the development image.  
2\. In your command line, navigate to the dev directory.  
3\. Build the docker image locally. 
```bash
docker build .
```
4\. Run
```bash
docker image ls
```
to view the list of images on your system. The latest image should be the receipt wrangler monolith image. Copy the IMAGE ID to use later.  
5\.
Run the following to start the container
```bash
docker run -d <IMAGE_ID>
```
6\. The container has been configured to expose ssh from port 22, so you may connect to this container with VSCode, or any other IDE that supports remote development over SSH.
The default credentials are:
```text title="default username"
root
```
```text title="default password"
development
```

7\. To find the IP address of your container, run:
```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id>
```
container_id can be found by running:
```bash
docker ps -a
```
Then you can use the obtained IP address to SSH into the container. To learn how to run the API and Desktop, continue reading.

## Bare Metal

### API
#### Prerequisites

* Native debian/debian derivative environment (highly recommended), WSL works on windows as well
* Go https://go.dev/doc/install
* Python 3.8+ https://www.python.org/downloads/

#### Setup

1. Clone the repository https://github.com/Receipt-Wrangler/receipt-wrangler-api.git
2. Install tesseract dependencies. If you are running a debian derivative (recommended),
   run `sudo sh set-up-tesseract-env.sh`, otherwise see https://github.com/otiai10/gosseract for other installation
   details.
3. Install OpenAPI generator v6 https://openapi-generator.tech/docs/installation (I personally use the jar installation)
4. Set up a db instance however you like. Sqlite is the easiest route to go. Otherwise, docker is recommended.
   Example mariadb docker
   command: `docker run --name receipt-wrangler-db -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_USER=wrangler -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=wrangler -p 9001:3306 -d library/mariadb`.
5. Set your environment variables, see [configuration documentation](/docs/configuration) for more details.
   Alternatively, source one of the script files in /dev in the Receipt Wrangler project to set some default environment
   variables for you.
6. In the terminal navigate to the root project directory
7. Run `go run .`

### Desktop
#### Prerequisites

* Node latest LTS version https://nodejs.org/en/download
* Angular CLI run ```npm install -g @angular/cli```

#### Setup

1. Clone the repository https://github.com/Receipt-Wrangler/receipt-wrangler-desktop
2. Open a terminal and navigate to the root of the project
3. Run ```npm install```
4. Run ```npm run start```
