document.addEventListener('DOMContentLoaded', () => {
    // Cálculo automático para todos los archivos
    const modulo = document.getElementById('modulo-calculo');
    if (modulo) {
        modulo.addEventListener('change', () => {
            let total = 0;
            const inputs = document.querySelectorAll('input:checked');
            inputs.forEach(i => total += parseInt(i.value || 0));
            
            const res = document.getElementById('resultado');
            if (res) res.innerText = total;
        });
    }

    // Buscador para Recursos
    const search = document.getElementById('search-extra');
    if (search) {
        search.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            document.querySelectorAll('.bloque-recurso').forEach(b => {
                b.style.display = b.innerText.toLowerCase().includes(val) ? 'block' : 'none';
            });
        });
    }
});
