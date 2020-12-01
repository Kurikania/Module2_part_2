let tries = 3;
let numOfPrizes = 3; 
let numTable
let gamefield = document.getElementById('gamefield');
let triesLeft = document.getElementById('triesLeft');
let numInput = document.getElementById('numInput');
triesLeft.innerText = tries
numInput.addEventListener('submit', (e)=> {
    e.preventDefault();
    numTable = numInput.elements[0].value;
    numTable = parseInt(numTable)
    let arr = placePrzes(numTable)
    buildTable(arr)
});

gamefield.addEventListener('click', checkCell, false)

function checkCell(e) {
    if (e.target.classList.contains("prize") ){ 
    e.target.innerHTML = '<i class="fas fa-bug"></i>'
    e.target.style.backgroundColor = "darkcyan"
    } else {
        e.target.style.backgroundColor = "white"
    }
    tries--
    triesLeft.innerText = tries
    if (tries <= 0){
        alert('Game over'); 
        gamefield.removeEventListener('click', checkCell, false)
    }
}


function buildTable(arr) {
    gamefield.innerHTML = "";
    let table = `<table class="table">
                            <tbody> `
    const tableEnd =  ` </tbody>
                         </table>`
    for ( let i = 0 ; i < arr.length ; i++) {
        table += `<tr>`;
        for ( let j = 0 ; j < arr.length ; j++) {
            if (arr[i][j] === 1 ) {
                table += `<td class = prize >&nbsp; &nbsp;</td>`
            } else { 
                table += `<td>&nbsp; &nbsp;</td>`
            }
        }
        table += `</tr>`
    }
table += tableEnd
gamefield.insertAdjacentHTML('afterbegin', table)
}


function placePrzes (numInput) { 
    let a = new Array(numInput);
    for (var i = 0; i < a.length; i++) {
        a[i] = new Array();
        for (var j = 0; j < a.length; j++) {
            a[i][j] = 0
        }
    }
    let prizesPlaced = 0;
    let rm ,rn = 0
    
        for (let i = 0 ; i <= numInput ; i++) { 
            for (let j = 0 ; j <= numInput ; j++) { 
                rm = Math.floor( Math.random() * numInput) ;
                rn = Math.floor(Math.random() * numInput) ;
        if (a[rn][rm] != 1) { 
            if (prizesPlaced >= numOfPrizes) break
            a[rn][rm] = 1;
            prizesPlaced++ 
                    }
                }
            }
        console.log(a)
        return a
    } 

