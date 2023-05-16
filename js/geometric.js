    const myModule = (()=> {
    'use strict'

    const btnPerSquare = document.querySelector('#btnPerSquare'),
          btnAreaSquare = document.querySelector('#btnAreaSquare'),
          btnPerTriangle = document.querySelector('#btnPerTriangle'),
          btnAreaTriangle = document.querySelector('#btnAreaTriangle'),
          btnDiamCircle = document.querySelector('#btnDiamCircle'),
          btnPerCircle = document.querySelector('#btnPerCircle'),
          btnAreaCircle = document.querySelector('#btnAreaCircle');

    // ÁREA Y PERIMETRO DE CUADRADO 

    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;

    btnPerSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);


        let result = `El perimetro del cuadrado es: ${perimSquare(value)} cm.`;
        document.getElementById('result').innerText = result;
    });


    btnAreaSquare.addEventListener('click',()=> {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);


        let result = `El área del cuadrado es: ${areaSquare(value)} cm².`;
        document.getElementById('result').innerText = result;
    });

    // ÁREA Y PERIMETRO DE TRAINGULO

    const perimT = (side1, side2, side3) => side1 + side2 + side3;
    const areaT = (base,altura) => base*altura;

    btnPerTriangle.addEventListener('click',()=> {

        let inputSide1 = document.getElementById('inputSide1');
        let valueSide1 = Number(inputSide1.value);

        let inputSide2 = document.getElementById('inputSide2');
        let valueSide2 = Number(inputSide2.value);

        let inputSide3 = document.getElementById('inputSide3');
        let valueSide3 = Number(inputSide3.value);

        
        let result = `El perimetro del Triangulo es: ${perimT(valueSide1, valueSide2, valueSide3)} cm.`;
        document.getElementById('result').innerText = result;
        
    });

    btnAreaTriangle.addEventListener('click',()=> {
        let inputBaseT = document.getElementById('inputBaseT');
        let valueBase = Number(inputBaseT.value);

        let inputAltT = document.getElementById('inputAltT');
        let valueAlt = Number(inputAltT.value);

        let result = `El área del Triangulo es: ${areaT(valueBase, valueAlt)} cm².`;
        document.getElementById('result').innerText = result;
    });

    // ÁREA Y PERIMETRO DE CÍRCULO

        const perimCirc = (radio) => 2 * 3.14 * radio;
        const diamCirc = (radio) => 2 * radio;
        const areaCirc = (radio) => 3.14 * radio * radio;

        btnPerCircle.addEventListener('click',()=> {
            let inputRadio = document.getElementById('inputRadio');
            let valueRadio = Number(inputRadio.value);

            let result = `El perímetro del círculo es: ${perimCirc(valueRadio)} cm.`;
        document.getElementById('result').innerText = result;

    });

        btnDiamCircle.addEventListener('click',() => {
            let inputRadio = document.getElementById('inputRadio');
            let valueRadio = Number(inputRadio.value);

            let result = `El diámetro del círculo es: ${diamCirc(valueRadio)} cm.`;
        document.getElementById('result').innerText = result;
    });
        btnAreaCircle.addEventListener('click', ()=> {
            let inputRadio = document.getElementById('inputRadio');
            let valueRadio = Number(inputRadio.value);

            let result = `El área del círculo es: ${areaCirc(valueRadio)} cm².`;
        document.getElementById('result').innerText = result;
        });

        // return {
        //     cps : calculatePerimSquare,
        //     cas: calculateAreaSquare,
        //     cpt: calculatePerimT,
        //     cat: calculateAreaT,
        //     cpc: calculatePerimCirc,
        //     cdc: calculateDiamCirc,
        //     cac: calculateAreaCirc
        // }
})();

