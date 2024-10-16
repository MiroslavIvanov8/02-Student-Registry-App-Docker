const cors = require('cors');

// Enable CORS for all routes
app.use(cors({
    origin: '*', // You can restrict this to specific origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(require('body-parser')
  .urlencoded({extended:true}));

const studentsController = 
  require("./controllers/students-controller");

let students = require("./models/students-model");

studentsController.setup(app, students);

let port = process.argv[2];
if (!port) port = process.env['PORT'];
if (!port) port = 3030;

app.listen(port, () => {
  console.log(`App started. Listening at http://localhost:${port}`);
})
.on('error', function(err) {
  if (err.errno === 'EADDRINUSE')
    console.error(`Port ${port} busy.`);
  else 
    throw err;
});
//comment
