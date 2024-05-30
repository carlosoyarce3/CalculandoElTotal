precio = 400000
cantidad = 0
valor = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function total(cantidad){
    valorSpan = document.querySelector(".valor-total")
    valor = cantidad * precio
    valorSpan.innerHTML = valor
}


function mas() {
    cantidadSpan = document.querySelector(".cantidad");
    cantidad = cantidad + 1
    total(cantidad)
    cantidadSpan.innerHTML = cantidad
}

function menos() {
    cantidadSpan = document.querySelector(".cantidad");
    if (cantidad < 1){
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
