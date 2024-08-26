export class Motorsykkel {
    merke: string;
    rgNr: string;
    kmStand: number;

    constructor(merke: string, rgNr: string, kmStand: number) {
        this.merke = merke;
        this.rgNr = rgNr;
        this.kmStand = kmStand;
    }

    kjor(km: number): void {
        this.kmStand += km;
    }

    hentKilometerstand(): number {
        return this.kmStand;
    }

    skrivUt(): void {
        console.log(`Motorsykkel: ${this.merke}, registreringsnummer: ${this.rgNr}, kilometerstand: ${this.kmStand}`);
    }
}