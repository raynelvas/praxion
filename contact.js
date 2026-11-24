(function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const status = document.getElementById('formStatus');
    const PHONE = '593968719898'; // sin el signo +

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores y limpiar espacios
        const nombre   = form.name.value.trim();
        const proyecto = form.project.value.trim();
        const ubicacion= form.location.value.trim();
        const fecha    = form.deadline.value.trim();
        const detalles = form.message.value.trim();

        // Validación básica
        if (!nombre || !proyecto || !ubicacion || !fecha || !detalles) {
            status.textContent = '⚠️ Por favor completa todos los campos.';
            status.style.color = '#c0392b';
            return;
        }

        // Formatear fecha legible (YYYY-MM-DD -> DD/MM/YYYY)
        let fechaLegible = fecha;
        if (/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            const [y, m, d] = fecha.split('-');
            fechaLegible = `${d}/${m}/${y}`;
        }

        // Construir el mensaje
        const mensaje =
            `Hola Praxion 👋, quiero cotizar un proyecto.%0A%0A` +
            `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
            `*Proyecto:* ${encodeURIComponent(proyecto)}%0A` +
            `*Ubicación:* ${encodeURIComponent(ubicacion)}%0A` +
            `*Fecha límite:* ${encodeURIComponent(fechaLegible)}%0A` +
            `*Detalles:* ${encodeURIComponent(detalles)}`;

        // Abrir WhatsApp (funciona en móvil y escritorio)
        const url = `https://wa.me/${PHONE}?text=${mensaje}`;
        window.open(url, '_blank');

        status.textContent = '✅ Abriendo WhatsApp con tu mensaje...';
        status.style.color = '#2e7d32';

        // Opcional: reiniciar formulario tras enviar
        form.reset();
    });
})();