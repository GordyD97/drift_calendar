const  express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
// const BracketsManager = require('./bracket/manager');

app.use(cors());

app.options('*', (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-requested-With');
    res.sendStatus(200);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-requested-With');
    // next();
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
