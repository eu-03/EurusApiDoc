const express = require('express')
const path = require("path");
const app = express()

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./public/swagger.yaml');

app.use('/public', express.static(path.join(__dirname, 'public')))

const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Eurus API Reference",
    //customfavIcon: "/assets/favicon.ico"
    customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css'
  };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.listen(3000)