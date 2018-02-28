class Clients {
  constructor() {
    this.clientlist = {};
    this.saveclient = this.saveClient.bind(this)
  }
  saveClient(id, client) {
    this.clientlist[id] = client
  }
}

module.exports = Clients
