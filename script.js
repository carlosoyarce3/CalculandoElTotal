let precio = 400000
let cantidad = 0
let valor = 0
let let cantidadSpan = document.querySelector(".cantidad");

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function total(cantidad){
    let valorSpan = document.querySelector(".valor-total")
    valor = cantidad * precio
    valorSpan.innerHTML = valor
}
function mas() {
    cantidad = cantidad + 1
    total(cantidad)
    cantidadSpan.innerHTML = cantidad
}
function menos() {
    if (cantidad <= 0){
        alert("Cantidad debe ser mayor a 0")
        cantidad = 0
        total(cantidad)
        cantidadSpan.innerHTML = cantidad        
    }
    else{
        cantidad = cantidad - 1
        total(cantidad)
        cantidadSpan.innerHTML = cantidad
    }
}
