const  express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
// const BracketsManager = require('./bracket/manager');

app .listen(PORT, () => console.log(`listening on ${PORT}`));
