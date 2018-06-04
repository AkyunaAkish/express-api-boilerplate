# Simple Express API Boilerplate

### To setup on your machine:

```
Install node on your machine: https://nodejs.org/en/download/
Install git on your machine: https://git-scm.com/downloads
Clone this repo onto your machine through the command line(terminal or equivalent on mac, git bash or equivalent on windows, terminal or equivalent on linux)
$ git clone https://github.com/AkyunaAkish/express-api-boilerplate.git
$ cd express-api-boilerplate
$ npm install 
$ npm start
```

### API Endpoints you can make requests to in this API(Postman is a good tool to test these API endpoints and to add your own):

```
GET http://localhost:3000/api/endpoints/

POST http://localhost:3000/api/endpoints/ (Provide JSON request body with any data: { "data": "some data" })

PUT http://localhost:3000/api/endpoints/ (Provide JSON request body with any data: { "data": "some data" })

DELETE http://localhost:3000/api/endpoints/ (Provide JSON request body with any data: { "data": "some data" })

GET http://localhost:3000/api/endpoints/param/:param (:param should be any string value you want, :param is a placeholder)

GET http://localhost:3000/api/endpoints/query?key=value&key=value (key=value should be any key value pair you want, you can add as many &'s and extra data as you want)
```