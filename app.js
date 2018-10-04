angular
  .module('adminApp', ['ngRoute'])
  .controller('Prijave', Prijave)
  .controller('Korisnici', Korisnici)
  .controller('Navigacija', Navigacija)
  .service('Podaci', Podaci)
  .config(['$routeProvider', rutiraj])
