// Lógica de Soporte Vital Neonatal
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Monitoreo de Alertas en Tiempo Real
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validarLimites(input);
            calcular指标();
        });
    });

    function validarLimites(campo) {
        const valor = parseFloat(campo.value);
        if (isNaN(valor)) return;

        // Lógica de semaforización para enfermería
        let esAlarma = false;

        // Ejemplo: Alerta de Glucosa
        if (campo.id === 'glucosa' && (valor < 40 || valor > 125)) esAlarma = true;
        
        // Ejemplo: Alerta de Lactato
        if (campo.id === 'lactato' && valor > 2.5) esAlarma = true;

        if (esAlarma) {
            campo.style.backgroundColor = '#fee2e2'; // Rojo suave
            campo.style.borderColor = '#ef4444';     // Rojo intenso
        } else {
            campo.style.backgroundColor = '';
            campo.style.borderColor = '';
        }
    }

    function calcular指标() {
        // Cálculo de Pérdida de Peso
        const pNacer = parseFloat(document.getElementById('pesoNacer')?.value);
        const pActual = parseFloat(document.getElementById('pesoActual')?.value);
        
        if (pNacer && pActual) {
            const perdida = ((pNacer - pActual) / pNacer) * 100;
            const msgPeso = document.getElementById('msg-peso');
            if (perdida > 10) {
                console.warn("ALERTA: Pérdida de peso superior al 10%");
                // Aquí podrías mostrar un aviso visual en la interfaz
            }
        }

        // Cálculo de Índice I/T (Sepsis)
        const inmaduros = parseFloat(document.getElementById('neutrosInmaduros')?.value);
        const totales = parseFloat(document.getElementById('neutrosTotales')?.value);
        
        if (inmaduros && totales) {
            const indiceIT = inmaduros / totales;
            const itCampo = document.getElementById('resultadoIT');
            if (itCampo) {
                itCampo.innerText = indiceIT.toFixed(2);
                itCampo.className = indiceIT > 0.22 ? 'alert-text' : '';
            }
        }
    }
});
