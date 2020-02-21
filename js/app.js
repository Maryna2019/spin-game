const rootNode = document.getElementById('root');
 
function initData() {
    let result = [];
    for(let i = 0; i < 5; i++) {
        result[i] = [];
        for(let j = 0; j < 53; j++) {
            result[i][j] = Math.floor(Math.random() * 13);
        }
    }
    return result;

}


function drawSlotMachine() {
    let data = initData();
   let result = `<button onclick = 'drawSlotMachine();' id='button-spin'> Spin </button>`;
        result += '<ul id="drum">';

    
    for (let i = 0; i < data.length; i++) {
        result += `<li>
                        <ul>`
          
        for(let j = 0; j < data[i].length; j++) {
            let src;
            switch (data[i][j]) {
                case 0:
                    src = './src/M00_000.jpg';
                break;
                case 1:   
                    src = './src/M01_000.jpg';                 
                break;
                case 2:
                    src = './src/M02_000.jpg';
                break;
                case 3:
                    src = './src/M03_000.jpg';
                break;
                case 4:
                    src = './src/M04_000.jpg';
                break;
                case 5:
                    src = './src/M05_000.jpg';
                break;
                case 6:
                    src = './src/M06_000.jpg';
                break;
                case 7:
                    src = './src/M07_000.jpg';
                break;
                case 8:
                    src = './src/M08_000.jpg';
                break;
                case 9:
                    src = './src/M09_000.jpg';
                break;
                case 10:
                    src = './src/M10_000.jpg';
                break;
                case 11:
                    src = './src/M11_000.jpg';
                break;
                case 12:
                    src = './src/M12_000.jpg';
                break;
              }

            result += `<li><img src = ${src} /></li>`
        }              

        result += ` </ul>
                    </li>`;  
                    
    }
    
    result += '</ul>';
 
    rootNode.innerHTML = result;
}


drawSlotMachine();