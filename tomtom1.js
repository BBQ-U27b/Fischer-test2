


function tannenbaumZeichnen(hoehe) {
    // Zeichne die Baumkronen
    for (let i = 0; i < hoehe; i++) {
        // Leerzeichen für die Ausrichtung
        let leerzeichen = ' '.repeat(hoehe - i - 1);
        // Sterne für den Baum
        let sterne = '*'.repeat(2 * i + 1);
        console.log(leerzeichen + sterne);
    }
    
    let stammLeerzeichen = ' '.repeat(hoehe - 1);
    console.log(stammLeerzeichen + '*'); // Stamm ist ein Stern
}


const hoehe = 4; // Höhe für den Baum (4 Ebenen)
tannenbaumZeichnen(hoehe);