import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

//integrating webpack with express
app.use(
  require('webpack-dev-middleware')(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath,
  })
);

//setting up express server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
