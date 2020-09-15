import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

//setting up express server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  //Hard coding for simplicity, pretend this hits a database
  res.json([
    {
      'id': 1,
      'firstName': 'Kelvin',
      'lastName': 'Omozokpia',
      'email': 'kelvinjune2@gmail.com',
    },
    {
      'id': 2,
      'firstName': 'John',
      'lastName': 'Bani',
      'email': 'quiad@gmail.com',
    },
    {
      'id': 3,
      'firstName': 'Bari',
      'lastName': 'Don',
      'email': 'donbarri@gmail.com',
    },
  ])
})

app.listen(port, (err) => {
  // if (err) {
  //   console.log(err);
  // } else {
  //   open('http://localhost:' + port);
  // }

  err ? console.log(err) : open(`http://localhost:${ port }`);

});
