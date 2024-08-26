import { Motorsykkel } from "./Motorsykkel.js";
function hovedprogram() {
    let motorsykkel1 = new Motorsykkel("Yamaha", "AB12345", 1000);
    let motorsykkel2 = new Motorsykkel("Suzuki", "CD67890", 2000);
    motorsykkel1.skrivUt();
    motorsykkel2.skrivUt();
    motorsykkel2.kjor(100);
    var kmStand = motorsykkel2.hentKilometerstand();
    console.log(kmStand);
}
hovedprogram();
//# sourceMappingURL=MotorsykkelTest.js.map