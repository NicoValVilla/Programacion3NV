const subjetTitle = document.getElementById('subjetTitle');


subjetTitle.addEventListener('click',()=>{
    var nuevoTitulo = prompt("Por favor, ingresa el nuevo título:");
    if (nuevoTitulo !== null && nuevoTitulo !== "") {
        subjetTitle.textContent = nuevoTitulo;
    } else {
        alert("No ingresaste un nuevo título. El título original permanecerá sin cambios.");
    }
})

function sumar() {
    var numero = parseInt(document.getElementById('numberInput').value);
    var resultado = 0;
    
    for (var i = 0; i <= numero; i++) {
        resultado += i;
    }

    document.getElementById('resultado').innerText = 'La suma de 0 hasta ' + numero + ' es: ' + resultado;
}