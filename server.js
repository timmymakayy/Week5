const express = require('express')
const app = express()
const port = 3000
const path = require ('path');
const bodyParser =required ('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/name', (req, res) => {
    console.log(req.params.fname)
    res.send('hello ' + req.query.fname+ " "+ req.query.lname);
})

app.post('/name', (req, res) => {
    res.send('hello' + req.query.fname+ " "+ req.query.lname);
})



app.get('/', (req, res) => {
    res.send(`Welcome to Data Representaion & Querying ${port}`)
})

app.get('Whatever', (req,res)=>{
res.send("Goodbye");
} )

app.get('/hello/:name', (req,res)=>{
    console.log(req.params.name);
    res.send('hello ' + req.params.name);
    } )


    app.get('/api/books', (req,res)=>{
        const data = [
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ];

       res.status(200).json({
        mybooks:data
       })
})

app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

    app.listen(port, ()=>{
        console.log(`Example of listening on port ${port}`)
        } )