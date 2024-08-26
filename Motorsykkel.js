export class Motorsykkel {
    merke;
    rgNr;
    kmStand;
    constructor(merke, rgNr, kmStand) {
        this.merke = merke;
        this.rgNr = rgNr;
        this.kmStand = kmStand;
    }
    kjor(km) {
        this.kmStand += km;
    }
    hentKilometerstand() {
        return this.kmStand;
    }
    skrivUt() {
        console.log(`Motorsykkel: ${this.merke}, registreringsnummer: ${this.rgNr}, kilometerstand: ${this.kmStand}`);
    }
}
//# sourceMappingURL=Motorsykkel.js.map