const express =require('express');
const port = 3000;
const router = require('./my_modules/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);


app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
})