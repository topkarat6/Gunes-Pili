function svgturkiyeharitasi() {
    const element = document.querySelector('#svg-turkiye-haritasi');


    element.addEventListener(
        'click',
        function(event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');

                if (
                    id === 'guney-kibris'
                ) {
                    return;
                }

                window.location.href = (
                    '#' +
                    id +
                    '-' +
                    parent.getAttribute('data-plakakodu')
                );
            }
        }
    );
}