// install dependencies
const { execSync } = require('child_process');
const request = require("supertest")
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    //send a request to '/musicians' endpoint 
    test("Testing musicians endpoint", async () => {
        let response = await request(app).get("/musicians")

        //when sending data from a database the response sends a JSON string. To convert this back to
        //a JSON object where we can access values, we can use JSON.parse() on the text in the response
        //write expect tests after
        let responseData = JSON.parse(response.text)

        //a HTTP status code of 200 indicates a successful GET request was made. 
        //we can access a status code using the response.statusCode method
        expect(response.statusCode).toBe(200)
    })
    
   
    
    




    
})
