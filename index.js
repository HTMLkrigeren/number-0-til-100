function tall1Til100() {
    let riktigTall = Math.round(Math.random()*100);
    let lykke = document.getElementById("lykke");
    let sjekk = document.getElementById("sjekk");
    
    
    sjekk.onclick = function () {
        let input = document.getElementById("numberInput").value;
        let nærme = document.getElementById("kaltEllerVarm")
        console.log(riktigTall);
        console.log(input);
        
        
        if (input < riktigTall) {
            nærme.textContent = "desvere ikke rikgtig " + input + " er mindre en tallet"
        } else if (input > riktigTall) {
            nærme.textContent = "for høyt " + input + " er større en tallet"
        } else if (input == riktigTall) {
            nærme.textContent = "Riktiggg!!"
            alert("gratulerer, " + input + " er riktig tall")

            let spørsmål = confirm("har du lyst å prøve en gang til?");

            if (spørsmål) {
                location.reload();
            } else {
                alert("ok, hadde bra")
                window.close();
            }
        }
    }
    lykke.onclick = function () {
        console.log(riktigTall);
        let nærme = document.getElementById("kaltEllerVarm")
        let random = Math.round(Math.random()*100)

        if (random == riktigTall) {
            nærme.textContent = "Riktiggg!!"
            alert("gratulerer, " + random + " er riktig tall")

            let spørsmål = confirm("har du lyst å prøve en gang til?");

            if (spørsmål) {
                location.reload();
            } else {
                alert("ok, hadde bra")
                window.close();
            }
        } else if (random !== riktigTall) {
            nærme.textContent = random + " var desvere ikke riktig, lykke var ikke på din side, bedre lykke neste gang."
        }
    }
}
tall1Til100();
console.log("bla");









// function fåEnFarge() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.round(Math.random() * 16)];
//     }  return color;
//   }
  
// buttonRandom.onclick = function () {
//     document.querySelector(".div3").style.backgroundColor = fåEnFarge();
// }