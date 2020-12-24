[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<p align="center">

  <h2 align="center">Flask E-commerce REST API</h2>

  <p align="center">
    A structured E-commerce REST API built to be the foundational backbone of a production-grade web app.
    <br />
    <p>The project is hosted through Heroku at this link: 
    <a href="https://flask-ecommerce-rest-api.herokuapp.com/">https://flask-ecommerce-rest-api.herokuapp.com/</a>
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
* [Heroku](https://www.heroku.com/)
* [Postman](https://www.postman.com/)
* [React.js](https://reactjs.org/)

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
pip install -r requirements.txt
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

| post:products   | Adds new products | 
|-----------------|-------------------|
| patch:products  | Edits products    |
| delete:products | Deletes products  |

6. Finally, add the `Role` of **Admin** to the API that has all of the above
   permissions. Add `Users` with the **Admin** role in order for them to be
   authenticated to use the above HTTP requests.

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

* Base URL: This app can only be run locally and viewed at the URL:
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

| Endpoints                     |     | Methods |       |        |
| ----------------------------- | --- | ------- | ----- | ------ |
|                               | GET | POST    | PATCH | DELETE |
| /                             | X   |         |       |        |
| /collections                  | X   |         |       |        |
| /collections/category_id      | X   |         |       |        |
| /collections/mens-apparel     | X   |         |       |        |
| /collections/mens-apparel/product_id     | X   |         |       |        |
| /collections/womens-apparel   | X   |         |       |        |
| /collections/womens-apparel/product_id     | X   |         |       |        |
| /collections/holiday          | X   |         |       |        |
| /collections/holiday/product_id       | X   |         |       |        |
| /collections/misc             | X   |         |       |        |
| /collections/misc/product_id  | X   |         |       |        |
| /products                     | X   | X       | X     | X      |
| /products/product_id          | X   |         |       |        |

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
