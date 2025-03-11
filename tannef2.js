
function tannenbaum(Reihen){



    for (let i = 0; i < Reihen; i++) {
        
      let leerzeichen = '';
       for (let j = 0; j < Reihen - i - 1; j++) {
           leerzeichen += ' ';
       }
    
       let sterne = '';
       for (let k = 0; k < 2 * i + 1; k++) {
           sterne += '*';
        }
    
       console.log(leerzeichen + sterne);
    }

}


const Reihen = 4
tannenbaum(Reihen)










