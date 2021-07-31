const express = require('express');
const app = express();
const { models: { Actor, Movie, Role } } = require('./db')

module.exports = app;

app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            The Home Page
        <body>
    <html>
    `)
})

app.get('/api/movies', async(req, res, next) => {
    try {
        res.send(await Movie.findAll())
    }
    catch (error) {
        next(error)
    }
})

app.get('/api/actors', async(req, res, next) => {
    try {
        res.send(await Actor.findAll())
    }
    catch(error) {
        next(error)
    }
})