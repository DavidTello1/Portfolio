
$(document).ready(function() {
    // Función para cambiar entre secciones
    function changeSection(sectionId) {
        $('#projects, #about').hide();
        $('#' + sectionId).show();
    }
    // Manejar clic en el enlace de la barra de navegación
    $('.page-scroll').on('click', function(event) {
        // Evitar el comportamiento predeterminado del enlace
        event.preventDefault();
        // Obtener la sección asociada al enlace
        var sectionId = $(this).data('section');
        // Cambiar a la nueva sección
        changeSection(sectionId);
    });
    // Mostrar la sección inicial (projects)
    changeSection('projects');
});
