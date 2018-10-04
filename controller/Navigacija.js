class Navigacija {
  constructor($location) {
    this.$location = $location
    this.lozinka = localStorage.lozinka
  }

  isActive(path) {
    return path === this.$location.path()
  }

  azurirajLozinku() {
    localStorage.lozinka = this.lozinka
  }
}
