class Prijave {

  constructor(Podaci) {
    this.podaci = Podaci  // servis
    this.filteri = {}
    this.trebaBrisati = {}
    this.kontakti = []
    this.csv = ''
  }

  azurirajJavljeno(prijavaId, javljeno) {
    this.podaci.azurirajJavljeno(prijavaId, javljeno)
  }

  obrisi(prijava_id) {
    if (this.trebaBrisati[prijava_id])
      this.podaci.obrisiPrijavu(prijava_id)
    this.trebaBrisati[prijava_id] = true
  }

  dodajKontakte(kljuc, imeFajla) {
    let novi = this.izabrano.map(p =>
      kljuc == 'korisnik_telefon' ? p[kljuc].replace(/[^0-9+]/g, '') : p[kljuc]
    )
    this.kontakti = new Set([...this.kontakti, ...novi])  // Set je uniq
    this.csv = Array.from(this.kontakti).join(', ')
    this.pripremiCuvanje(imeFajla)
  }

  dodajMejlove() {
    this.dodajKontakte('korisnik_email', 'mejlovi')
  }

  dodajTelefone() {
    this.dodajKontakte('korisnik_telefon', 'telefoni')
  }

  pripremiCuvanje(imeFajla) {
    const a = document.getElementById('sacuvaj')
    a.href = URL.createObjectURL(new Blob([this.csv], {type: 'text/plain'}))
    a.download = imeFajla + '.csv'
  }
}
