        const enrutador = () => {
            // Selecciona todas las secciones y las oculta quitando la clase 'active' 
            const secciones = document.querySelectorAll('.content-section');
            secciones.forEach(seccion => seccion.classList.remove('active'));

            // Obtiene el hash actual de la barra de direcciones
            let hashActual = window.location.hash;
            
            // Si no hay hash (URL raíz), asigna '#intro' por defecto
            if (!hashActual) hashActual = '#intro';

            // Busca el elemento en el DOM que coincide con el hash
            const seccionObjetivo = document.querySelector(hashActual);
            
            // Si el ID existe, lo muestra; si no, fuerza el intro (prevención de errores)
            if (seccionObjetivo) {
                seccionObjetivo.classList.add('active');
            } else {
                document.querySelector('#intro').classList.add('active');
            }
        };

        // Escucha cambios en el hash (cuando el usuario hace clic en el Nav)
        window.addEventListener('hashchange', enrutador);

        // Se ejecuta una vez al cargar la página para mostrar la sección correcta inicial
        window.addEventListener('DOMContentLoaded', enrutador);