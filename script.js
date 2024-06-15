document.addEventListener('DOMContentLoaded', function() {
    var odometers = document.querySelectorAll('.odometer');

    odometers.forEach(function(odometer) {
        new Waypoint({
            element: odometer,
            handler: function() {
                odometer.innerHTML = odometer.getAttribute('data-value');
                this.destroy();
            },
            offset: '80%'
        });
    });
});