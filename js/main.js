const lastOrderText = document.getElementById('lastOrderText');

// Función para obtener el último registro de la base de datos de MockAPI
document.addEventListener('DOMContentLoaded,', function (){

    function obtenerUltimaOrden() {
        fetch('https://661384ea53b0d5d80f678f83.mockapi.io/comandos')
            .then(response => response.json())
            .then(data => {
                console.log('Datos obtenidos:', data); // Verificar los datos obtenidos de la API
                const ultimaOrden = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
                console.log('Última orden:', ultimaOrden); // Verificar la última orden obtenida
                const lastOrderText = document.getElementById('lastOrderText');
                lastOrderText.textContent = ultimaOrden ? ultimaOrden.orderText : 'No hay órdenes disponibles';
            })
            
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }
    
    // Llamar a la función obtenerUltimaOrden cada 2 segundos
    setInterval(obtenerUltimaOrden, 2000);
});

