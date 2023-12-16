document.addEventListener("DOMContentLoaded", function () {
    let Entrada = document.getElementById('Entrada');
    let Botones = document.querySelectorAll('button');

    let Cadena = "";

    Botones.forEach(button => {
        button.addEventListener('click', (e) => {
            let ultimoCaracter = Cadena.charAt(Cadena.length - 1);

            if (e.target.innerHTML === '=') {
                Cadena = String(eval(Cadena)); 
                Entrada.value = Cadena;
            } else if (e.target.innerHTML === 'AC') {
                Cadena = "";
                Entrada.value = "";
            } else if (e.target.innerHTML === 'DEL') {
                Cadena = Cadena.slice(0, -1);
                Entrada.value = Cadena;
            } else if (e.target.innerHTML === '%') {
                Cadena = String(eval(Cadena) / 100); 
                Entrada.value = Cadena;
            } else if (e.target.innerHTML === 'X') { 
                // Validación para evitar múltiples operadores consecutivos
                if (/[+\-*/]$/.test(Cadena)) {
                    return;
                }
                Cadena += '*';
                Entrada.value = Cadena;
            } else if (/[+\-*/]$/.test(ultimoCaracter) && /[+\-*/]$/.test(e.target.innerHTML)) {
                return;
            } else {
                Cadena += e.target.innerHTML;
                Entrada.value = Cadena;
            }
        });
    });
});
