// Esperamos a que el DOM esté completamente cargado para evitar problemas con elementos no disponibles
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón de agregar elemento y la lista (ul)
    const agregarBoton = document.getElementById('agregarElemento');
    const lista = document.getElementById('listaElementos');

    // Evento que se ejecuta cuando el usuario hace clic en el botón
    agregarBoton.addEventListener('click', function() {
        // Mostramos el prompt para que el usuario ingrese el texto del nuevo elemento
        const nuevoElemento = prompt('Ingrese un nuevo elemento para la lista:');
        
        // Verificamos si el usuario no canceló el prompt y si el texto no está vacío
        if (nuevoElemento && nuevoElemento.trim() !== '') {
            // Creamos un nuevo elemento de lista (li)
            const li = document.createElement('li');
            li.textContent = nuevoElemento;  // Establecemos el texto que el usuario ha ingresado
            
            // Agregamos el nuevo li a la lista (ul)
            lista.appendChild(li);
        } else {
            // Si el valor es vacío o el usuario cancela, mostramos una alerta
            alert('Por favor ingrese un valor válido.');
        }
    });
});
