const personnages = require('./tableau-personnages');

const perso = {
  getPerso: (nameFromUrl) => {
    let rightPerso = personnages.filter((personnage) => personnage.name.toLowerCase() === nameFromUrl.toLowerCase()).pop();

    if(!rightPerso){
      return;
    }
    
    return rightPerso;
  }
  


};
module.exports = perso;