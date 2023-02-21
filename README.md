[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<p align="center">

  <h2 align="center">Flask Nextjs E-commerce Web Template</h2>
  <h4 align="center">Frontend was hosted through Netlify</h4>
  <h4 align="center">Backend was once hosted through Heroku for project when it was free</h4>

  <p align="center">
    A structured E-commerce REST API built to be the foundational backbone of a production-grade web app. Dev for hosting & new features such as a cart & payment is still ongoing.
    <br />
    <p>
    <br />
    <!--
    <a href="https://github.com/jonnyg23/flask-rest-ecommerce"><strong>Explore the docs »</strong></a>
    <br />
    -->
    <br />
    <!--
    <a href="https://github.com/jonnyg23/flask-rest-ecommerce">View Demo</a>
    ·
    -->
    <a href="https://github.com/jonnyg23/flask-rest-ecommerce/issues">Report Bug</a>
    ·
    <a href="https://github.com/jonnyg23/flask-rest-ecommerce/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installing-backend-dependencies">Installing Backend Dependencies</a></li>
        <li><a href="#installing-frontend-dependencies">Installing Frontend Dependencies</a></li>
        <li><a href="#setting-up-auth0">Setting up Auth0</a></li>
        <li><a href="#setting-up-environment-variables">Setting up Environment Variables</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li>
      <a href="#api-documentation">API Documentation</a>
      <ul>
        <li><a href="#getting-started-api">Getting Started API</a></li>
        <li><a href="#error-handling">Error Handling</a></li>
        <li><a href="#table-of-endpoints">Table of Endpoints</a></li>
        <li><a href="#endpoint-table-of-contents">Endpoint Table of Contents</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project
<!--
[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

This project is the Capstone Project for the Udacity Full-Stack Web
Developer Nanodegree program. The purpose of this REST API is to develop a
template for the creation of custom modern E-commerce websites.


A list of helpful resources are listed in the acknowledgements.


### Built With

* [Python-3.7.9](https://www.python.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [PostgreSQL](https://www.postgresql.org/)
* [SQLAlchemy](https://www.sqlalchemy.org/)
* [Auth0](https://auth0.com/)
* [Heroku](https://www.heroku.com/) Backend Deployment
* [Netlify](https://www.netlify.com/) Frontend Deployment
* [Postman](https://www.postman.com/)
* [Next.js](https://nextjs.org/)

## Getting Started

### Installing Backend Dependencies

#### Python 3.7

Follow the instructions to install **Python 3.7.9** for your platform in the
[python docs](https://www.python.org/downloads/release/python-379/)

#### PostgreSQL

Follow the instructions to install **PostgreSQL** locally for your platform on
the [PostgreSQL website](https://www.postgresql.org/download/)

#### Virtual Environment

It is recommended to work within a virtual environment using venv for this
project. This keeps dependencies organized for each project. Instructions for
setting this up can be found
[here](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once the virtual environment is setup and running, install the pip dependencies
by navigating to the root directory of the project and running:  

```bash
pip3 install -r requirements.txt
```
This will install all required packages that are used for the Flask backend.

##### Key Dependencies

* [Flask](http://flask.pocoo.org/) 
* [SQLAlchemy](https://www.sqlalchemy.org/)
* [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#)

### Installing Frontend Dependencies

#### Setup NPM

Follow the instructions to install `npm` at the following
[link](https://www.npmjs.com/get-npm)

#### Node Modules

While in the root directory of the project, run the following:  

```bash
npm install
```
This will install the `node-modules` needed by referencing the `package.json`
file.

### Setting up Auth0

To set up Auth0 for this project, refer to the following steps:  

1. Sign up for a free account on the [Auth0 website](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22docs%22%7D).
2. Next, create a new **single-page application** with the name
   **Flask-Ecommerce**. 
3. In Application settings, input your root URL to **Allowed Callback URLs**,
   **Allowed Logout URLs**, and **Allowed 
   Web Origins**. For example:  
   a. `http://localhost:3000` on all of the above for
   local hosting, or  
   b. `https://HEROKU_APP_NAME.herokuapp.com` for your
   Heroku deployment.
4. Create an API in Auth0 with `RBAC` and `Add Permissions in the Access Token`
   enabled in the API settings.
5. In the API's `Permissions` tab, add the following permissions:  

| Permission      | Description       |
| --------------- | ----------------- |
| post:products   | Adds new products |
| patch:products  | Edits products    |
| delete:products | Deletes products  |

6. Finally, add the `Role` of **Admin** to the API that has all of the above
   permissions. Add `Users` with the **Admin** role in order for them to be
   authenticated to use the above HTTP requests.

#### Roles (Admin & Public)

- **Admin**: This role includes permissions for all endpoints in the **Table of
  Endpoints**, as well as the `POST`, `PATCH`, & `DELETE` requests shown above in
  `Step 5`.
- **Public**: This role includes only `GET` request permissions, as this will be
  for the users of the world to use. This role excludes any rights to
  manipulating the PostgreSQL database.

### Setting up Environment Variables

Create 2 `.env` files in the following locations following the `.env.example`
file format:  

1. In the directory `/backend/src` and
2. in the root directory.

>NOTE: These environment variables will need to be added to the `Configure
>Vars` Settings on your Heroku deployment app if using Heroku.
   
## Usage
Currently, the Frontend is still in development, but the Backend REST API can
be used/tested with **Postman**.

## Testing

The preferred way to test the backend HTTP requests are to use Postman,
however, the Python Unittest file is included in `/backend/src` folder and is
titled `test_app.py`.
### Postman Testing

Refer to the documentation within the [Postman
Collection](https://www.getpostman.com/collections/c6c47d866430c3fd9359) for
details regarding setup.  
>NOTE: A JWT access token is needed for Postman testing. The JWT token must be
>from an authenticated user with the role of `Admin`, which has all the
>necessary permissions.

### Python Unittest

The Python Unittest is located in the `/backend` folder titled `test_app.py`.
Run the tests following these steps:  

1. Run the Flask server from the `/backend/src` directory virtual environment using these terminal bash
   commands:

   ```bash
   # This will run the flask app on port 5000
   # On Linux: use `export`
   # On Windows: use `set`
   export FLASK_APP=app.py
   export FLASK_ENV=development
   flask run
   ```
2. Now that the Flask server is running locally, the python unit tests can be
   run with:  
    ```bash
    python3 test_app.py
    ```


## API Documentation

### Getting Started API

* Base URL: The backend can only be run locally or viewed at the URL:
  **https://flask-ecommerce-rest-api.herokuapp.com/**. When running locally, the backend app is
  hosted at the default URL, **http://127.0.0.1:5000/**, which is set as a proxy in
  the frontend configuration. This is the domain which must be used when making
  API requests via `postman` or `curl`.
* Authentication: This version of the application does not require authentication or API keys.
### Error Handling

Errors are returned as JSON objects in the following format:

```js
{
    "success": False,
    "error": 400,
    "message": "bad request"
}
```

The API will return the five error type default responses when requests fail (unless custom response is assigned):

* 400: Bad Request
* 401: Unauthorized
* 403: Forbidden
* 404: Resource Not Found
* 422: Not Processable
* 500: Internal Server Error

### Table of Endpoints

Below is a table of the methods allowed for each of the 3 endpoints.

| Endpoints                              |     | Methods |       |        |
| -------------------------------------- | --- | ------- | ----- | ------ |
|                                        | GET | POST    | PATCH | DELETE |
| /                                      | X   |         |       |        |
| /collections                           | X   |         |       |        |
| /collections/category_id               | X   |         |       |        |
| /collections/mens-apparel              | X   |         |       |        |
| /collections/mens-apparel/product_id   | X   |         |       |        |
| /collections/womens-apparel            | X   |         |       |        |
| /collections/womens-apparel/product_id | X   |         |       |        |
| /collections/holiday                   | X   |         |       |        |
| /collections/holiday/product_id        | X   |         |       |        |
| /collections/misc                      | X   |         |       |        |
| /collections/misc/product_id           | X   |         |       |        |
| /products                              | X   | X       | X     | X      |
| /products/product_id                   | X   |         |       |        |

### Endpoint Table of Contents

1. Collections:
    * [GET /collections](#get-collections)
    * [GET /collections/category_id](#get-collections-id)
    * [GET /collections/mens-apparel](#get-collections-mens-apparel)
    * [GET /collections/mens-apparel/product_id](#get-collections-mens-apparel-id)
    * [GET /collections/womens-apparel](#get-collections-womens-apparel)
    * [GET /collections/womens-apparel/product_id](#get-collections-womens-apparel-id)
    * [GET /collections/holiday](#get-collections-holiday)
    * [GET /collections/holiday/product_id](#get-collections-holiday-id)
    * [GET /collections/misc](#get-collections-misc)
    * [GET /collections/misc/product_id](#get-collections-misc-id)
2. Products:
    * [GET /products](#get-products)
    * [GET /products/product_id](#get-products-id)
3. Index:
    * [GET /](#get-index)

# <a name="get-collections"></a>
### GET /collections

Retrieves category collections from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections
```

#### Example Response

```js
{
  "category_info": [
    {
      "active": true, 
      "category_name": "Mens-Apparel", 
      "description": "This category is for mens apparel", 
      "id": 1, 
      "picture": "static/images/categories/mens_apparel"
    }, 
    {
      "active": true, 
      "category_name": "Womens-Apparel", 
      "description": "This category is for womens apparel", 
      "id": 2, 
      "picture": "static/images/categories/womens_apparel"
    }, 
    {
      "active": true, 
      "category_name": "Holiday", 
      "description": "This category is for holiday items", 
      "id": 3, 
      "picture": "static/images/categories/holiday"
    }, 
    {
      "active": true, 
      "category_name": "Misc", 
      "description": "This category is for miscellaneous items", 
      "id": 4, 
      "picture": "static/images/categories/misc"
    }
  ], 
  "success": true
}
```

# <a name="get-collections-id"></a>
### GET /collections/category_id

Retrieves specific category collection from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/1
```

#### Example Response

```js
{
  "category_info": {
    "active": true, 
    "category_name": "Mens-Apparel", 
    "description": "This category is for mens apparel", 
    "id": 1, 
    "picture": "static/images/categories/mens_apparel"
  }, 
  "success": true
}
```

# <a name="get-collections-mens-apparel"></a>
### GET /collections/mens-apparel

Retrieves mens-apparel collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/mens-apparel
```

#### Example Response

```js
{{
  "mens_apparel_data": [
    {
      "category_id": [
        1
      ], 
      "id": 1, 
      "msrp": 25.0, 
      "picture": "static/images/products/1", 
      "product_description": "This is a tapered mens summer blue t-shirt.", 
      "product_name": "Mens Summer Blue Tee"
    }, 
    {
      "category_id": [
        1, 
        3
      ], 
      "id": 3, 
      "msrp": 40.0, 
      "picture": "static/images/products/3", 
      "product_description": "This is a husky red mens holiday sweater.", 
      "product_name": "Mens Holiday Sweater"
    }, 
    {
      "category_id": [
        1, 
        2, 
        3, 
        4
      ], 
      "id": 4, 
      "msrp": 12.0, 
      "picture": "static/images/products/4", 
      "product_description": "This is a pair of black holiday unisex socks.", 
      "product_name": "Holiday Unisex Socks"
    }
  ], 
  "success": true
}
```

# <a name="get-collections-mens-apparel-id"></a>
### GET /collections/mens-apparel/product_id

Retrieves specific mens-apparel collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/mens-apparel/1
```

#### Example Response

```js
{
  "mens_apparel_data": {
    "category_id": [
      1
    ], 
    "id": 1, 
    "msrp": 25.0, 
    "picture": "static/images/products/1", 
    "product_description": "This is a tapered mens summer blue t-shirt.", 
    "product_name": "Mens Summer Blue Tee"
  }, 
  "success": true
}
```

# <a name="get-collections-womens-apparel"></a>
### GET /collections/womens-apparel

Retrieves womens-apparel collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/womens-apparel
```

#### Example Response

```js
{
  "success": true, 
  "womens_apparel_data": [
    {
      "category_id": [
        2
      ], 
      "id": 2, 
      "msrp": 40.0, 
      "picture": "static/images/products/2", 
      "product_description": "This is a white wool womens sweater", 
      "product_name": "Womens Sweater"
    }, 
    {
      "category_id": [
        1, 
        2, 
        3, 
        4
      ], 
      "id": 4, 
      "msrp": 12.0, 
      "picture": "static/images/products/4", 
      "product_description": "This is a pair of black holiday unisex socks.", 
      "product_name": "Holiday Unisex Socks"
    }, 
    {
      "category_id": [
        2, 
        4
      ], 
      "id": 5, 
      "msrp": 120.0, 
      "picture": "static/images/products/5", 
      "product_description": "This is a womens watch in gold.", 
      "product_name": "Womens Watch"
    }
  ]
}
```

# <a name="get-collections-womens-apparel-id"></a>
### GET /collections/womens-apparel/product_id

Retrieves specific womens-apparel collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/womens-apparel/2
```

#### Example Response

```js
{
  "success": true, 
  "womens_apparel_data": {
    "category_id": [
      2
    ], 
    "id": 2, 
    "msrp": 40.0, 
    "picture": "static/images/products/2", 
    "product_description": "This is a white wool womens sweater", 
    "product_name": "Womens Sweater"
  }
}
```

# <a name="get-collections-holiday"></a>
### GET /collections/holiday

Retrieves holiday collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/holiday
```

#### Example Response

```js
{
  "holiday_products_data": [
    {
      "category_id": [
        1, 
        3
      ], 
      "id": 3, 
      "msrp": 40.0, 
      "picture": "static/images/products/3", 
      "product_description": "This is a husky red mens holiday sweater.", 
      "product_name": "Mens Holiday Sweater"
    }, 
    {
      "category_id": [
        1, 
        2, 
        3, 
        4
      ], 
      "id": 4, 
      "msrp": 12.0, 
      "picture": "static/images/products/4", 
      "product_description": "This is a pair of black holiday unisex socks.", 
      "product_name": "Holiday Unisex Socks"
    }
  ], 
  "success": true
}
```

# <a name="get-collections-holiday-id"></a>
### GET /collections/holiday/product_id

Retrieves specific holiday collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/holiday/3
```

#### Example Response

```js
{
  "holiday_products_data": {
    "category_id": [
      1, 
      3
    ], 
    "id": 3, 
    "msrp": 40.0, 
    "picture": "static/images/products/3", 
    "product_description": "This is a husky red mens holiday sweater.", 
    "product_name": "Mens Holiday Sweater"
  }, 
  "success": true
}
```

# <a name="get-collections-misc"></a>
### GET /collections/misc

Retrieves miscellaneous collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/misc
```

#### Example Response

```js
{
  "misc_products_data": [
    {
      "category_id": [
        1, 
        2, 
        3, 
        4
      ], 
      "id": 4, 
      "msrp": 12.0, 
      "picture": "static/images/products/4", 
      "product_description": "This is a pair of black holiday unisex socks.", 
      "product_name": "Holiday Unisex Socks"
    }, 
    {
      "category_id": [
        2, 
        4
      ], 
      "id": 5, 
      "msrp": 120.0, 
      "picture": "static/images/products/5", 
      "product_description": "This is a womens watch in gold.", 
      "product_name": "Womens Watch"
    }
  ], 
  "success": true
}

```

# <a name="get-collections-misc-id"></a>
### GET /collections/misc/product_id

Retrieves specific miscellaneous collection of products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/collections/misc/4
```

#### Example Response

```js
{
  "misc_products_data": {
    "category_id": [
      1, 
      2, 
      3, 
      4
    ], 
    "id": 4, 
    "msrp": 12.0, 
    "picture": "static/images/products/4", 
    "product_description": "This is a pair of black holiday unisex socks.", 
    "product_name": "Holiday Unisex Socks"
  }, 
  "success": true
}
```

# <a name="get-products"></a>
### GET /products

Retrieves all products from database:
```bash
$ curl -X GET http://127.0.0.1:5000/products
```

#### Example Response

```js
{
  "products": [
    {
      "category_id": [
        1
      ], 
      "id": 1, 
      "msrp": 25.0, 
      "picture": "static/images/products/1", 
      "product_description": "This is a tapered mens summer blue t-shirt.", 
      "product_name": "Mens Summer Blue Tee"
    }, 
    {
      "category_id": [
        2
      ], 
      "id": 2, 
      "msrp": 40.0, 
      "picture": "static/images/products/2", 
      "product_description": "This is a white wool womens sweater", 
      "product_name": "Womens Sweater"
    }, 
    {
      "category_id": [
        1, 
        3
      ], 
      "id": 3, 
      "msrp": 40.0, 
      "picture": "static/images/products/3", 
      "product_description": "This is a husky red mens holiday sweater.", 
      "product_name": "Mens Holiday Sweater"
    }, 
    {
      "category_id": [
        1, 
        2, 
        3, 
        4
      ], 
      "id": 4, 
      "msrp": 12.0, 
      "picture": "static/images/products/4", 
      "product_description": "This is a pair of black holiday unisex socks.", 
      "product_name": "Holiday Unisex Socks"
    }, 
    {
      "category_id": [
        2, 
        4
      ], 
      "id": 5, 
      "msrp": 120.0, 
      "picture": "static/images/products/5", 
      "product_description": "This is a womens watch in gold.", 
      "product_name": "Womens Watch"
    }
  ], 
  "success": true
}
```

# <a name="get-products-id"></a>
### GET /products/product_id

Retrieves specific product from database:
```bash
$ curl -X GET http://127.0.0.1:5000/products/2
```

#### Example Response

```js
{
  "products": {
    "category_id": [
      2
    ], 
    "id": 2, 
    "msrp": 40.0, 
    "picture": "static/images/products/2", 
    "product_description": "This is a white wool womens sweater", 
    "product_name": "Womens Sweater"
  }, 
  "success": true
}
```

# <a name="get-index"></a>
### GET /

Redirects you to the `index.html` file for the frontend:
```bash
$ curl -X GET http://127.0.0.1:5000/
```

#### Example Response

```
This will return the `index.html` file.
```

## Roadmap

* Frontend will be developed further using React.js
* The **/search** endpoint will be implemented to work with the frontend
* Since the UI and Authentication for the frontend was created using [Auth0's
  Sample Project](https://auth0.com/blog/complete-guide-to-react-user-authentication/), a new UI/UX will be designed in the future upon further
  learning the React.js Framework.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.

## Contact

Jonathan Gutierrez - jonguti23@outlook.com

Project Link: [https://github.com/jonnyg23/flask-rest-ecommerce](https://github.com/jonnyg23/flask-rest-ecommerce)

## Acknowledgements
* [E-Commerce Database Design](https://www.princeton.edu/~rcurtis/ultradev/ecommdatabase.html)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Auth0 Guide to
  Authentication](https://auth0.com/blog/complete-guide-to-react-user-authentication/) & [Youtube link](https://www.youtube.com/watch?v=PYWS-4CXETw&t=1231s)
* [Auth0 Guide to Auth Github Project](https://github.com/jamesqquick/auth0-react-workshop)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jonnyg23/flask-rest-ecommerce.svg?style=for-the-badge
[contributors-url]: https://github.com/jonnyg23/flask-rest-ecommerce/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jonnyg23/flask-rest-ecommerce.svg?style=for-the-badge
[forks-url]: https://github.com/jonnyg23/flask-rest-ecommerce/network/members
[stars-shield]: https://img.shields.io/github/stars/jonnyg23/flask-rest-ecommerce.svg?style=for-the-badge
[stars-url]: https://github.com/jonnyg23/flask-rest-ecommerce/stargazers
[issues-shield]: https://img.shields.io/github/issues/jonnyg23/flask-rest-ecommerce.svg?style=for-the-badge
[issues-url]: https://github.com/jonnyg23/flask-rest-ecommerce/issues
[license-shield]: https://img.shields.io/github/license/jonnyg23/flask-rest-ecommerce.svg?style=for-the-badge
[license-url]: https://github.com/jonnyg23/flask-rest-ecommerce/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jonathan-gutierrez-b9412357
