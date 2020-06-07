const express =require('express');
const personnages = require('../data/personnages.json');
const router = express.Router();

router.use(express.static('assets'));
router.use((request, response, next) => {
  response.locals.personnages = personnages;
  next();
});

router.get('/', (request, response) =>{
response.render('index', {personnages});
});

router.get('/personnages/:name', (request, response) =>{

let nameUrl = request.params.name;
let currentName = personnages.find((perso) => perso.name.toLowerCase() === nameUrl);
console.log(nameUrl);
if(!currentName){
  response.status(404).render("cette page n'existe pas");
}
response.render("personnages", {currentName})

});



module.exports = router;