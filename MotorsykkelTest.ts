import { Motorsykkel } from "./Motorsykkel.js";

function hovedprogram(): void {
    let motorsykkel1: Motorsykkel = new Motorsykkel("Yamaha", "AB12345", 1000);
    let motorsykkel2: Motorsykkel = new Motorsykkel("Suzuki", "CD67890", 2000);
    motorsykkel1.skrivUt();
    motorsykkel2.skrivUt();
    motorsykkel2.kjor(100);
    var kmStand = motorsykkel2.hentKilometerstand();
    console.log(kmStand);
}

hovedprogram();