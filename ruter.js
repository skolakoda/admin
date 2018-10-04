function rutiraj($routeProvider) {
  $routeProvider.
    when('/prijave', {
      templateUrl: 'view/prijave.html',
      controller: 'Prijave',
      controllerAs: 'ctrl'
    }).
    when('/korisnici', {
      templateUrl: 'view/korisnici.html',
      controller: 'Korisnici',
      controllerAs: 'ctrl'
    }).
    otherwise({
      redirectTo: '/prijave'
    });
}
