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

   
## Usage
<!--
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

-->
TODO add usage

## Testing

TODO add testing

## API Documentation

### Getting Started API

TODO add getting started API
### Error Handling

TODO add error handling

### Table of Endpoints

Below is a table of the methods allowed for each of the 3 endpoints.

| Endpoints                     |     | Methods |       |        |
| ----------------------------- | --- | ------- | ----- | ------ |
|                               | GET | POST    | PATCH | DELETE |
| /                             | X   |         |       |        |
| /collections                  | X   |         |       |        |
| /collections/mens-apparel     | X   |         |       |        |
| /collections/womens-apparel   | X   |         |       |        |
| /collections/holiday          | X   |         |       |        |
| /collections/misc             | X   |         |       |        |
| /products                     | X   | X       | X     | X      |
| /login                        |     |         |       |        |
| /customerID/checkouts/orderID |     |         |       |        |

### Endpoint Table of Contents

TODO add endpoint table of contents

## Roadmap
<!--
See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

-->
TODO add roadmap

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
