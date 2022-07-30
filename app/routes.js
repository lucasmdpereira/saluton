import express from 'express';
import * as data from '../data/indexData.js' 

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

routes.get("/countryquery/:query", data.queryInCountries);
routes.get("/greetingquery/:query", data.queryGreetings);

export { routes }