const domen = 'https://skolakoda-api.herokuapp.com'

class Podaci {
  constructor ($q, $http) {
    $q.all([
      $http.get(`${domen}/korisnici?lozinka=${localStorage.lozinka}`),
      $http.get(`${domen}/kursevi?lozinka=${localStorage.lozinka}`),
      $http.get(`${domen}/prijave?lozinka=${localStorage.lozinka}`)
    ])
    .then(responses => {
      this.korisnici = responses[0].data
      this.kursevi = responses[1].data
      this.prijave = responses[2].data
      this.poveziPodatke()
    })
  }

  poveziPodatke() {
    if(!this.prijave.length) return
    this.prijave.map(prijava => {
      const kurs = this.kursevi.find(kurs => kurs.id === prijava.kurs_id)
      const korisnik = this.korisnici.find(korisnik => korisnik.id === prijava.korisnik_id)
      prijava.korisnik_ime = korisnik.ime
      prijava.korisnik_email = korisnik.email
      prijava.korisnik_telefon = korisnik.telefon
      prijava.kurs_naziv = kurs.naziv
    })
  }

  obrisiPrijavu(prijava_id) {
    const http = new XMLHttpRequest()
    http.open('POST', `${domen}/brisanje`)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.onload = () => window.location.reload()
    http.send(`prijava_id=${prijava_id}&lozinka=${localStorage.lozinka}`)
  }

  azurirajJavljeno(prijava_id, javljeno) {
    const http = new XMLHttpRequest()
    http.open('POST', `${domen}/azurira-javljeno`)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.onload = e => alert(e.target.response)
    http.send(`prijava_id=${prijava_id}&javljeno=${javljeno}&lozinka=${localStorage.lozinka}`)
  }
}
