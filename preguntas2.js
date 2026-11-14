const extraTestQ = [
    { q: "21. Según el apartado 5 (El enlace metálico), ¿qué ocurre cuando golpeamos un metal?", opts: ["Se rompe porque se repelen los iones del mismo signo", "No se rompe porque los electrones libres evitan repulsiones entre restos catiónicos", "Se disuelve en agua", "Se convierte en gas"], ans: 1, exp: "La nube de electrones libres amortigua el desplazamiento de los restos catiónicos, haciéndolos dúctiles y maleables." },
    { q: "22. Según la tabla resumen 6.1, ¿qué ocurre con la fragilidad de las 'Moléculas' covalentes?", opts: ["Son muy frágiles", "Son dúctiles y maleables", "Depende del compuesto", "Son indestructibles"], ans: 2, exp: "En la tabla 6.1, en la fila Fragilidad y columna Moléculas aparece exactamente: 'Depende del compuesto'." },
    { q: "23. Según el ejercicio resuelto 3 de la última página, ¿cómo podemos distinguir el azúcar de la sal (NaCl) sin probarlos?", opts: ["Observando su color", "Disolviéndolos en agua y comprobando cuál conduce la electricidad", "Intentando rayarlos con un diamante", "Calentándolos a 3000 K"], ans: 1, exp: "La sal (iónica) conduce la electricidad en disolución acuosa, mientras que el azúcar (molecular) no conduce." }
];

const extraFillQ = [
    { q: "24. Según la tabla resumen 6.1, las sustancias covalentes reticulares tienen una solubilidad en agua clasificada como ____________.", ans: ["insolubles", "insoluble"], exp: "No se disuelven en agua porque no están formadas por partículas cargadas." },
    { q: "25. En la tabla resumen 6.1, el ejemplo que aparece para los compuestos metálicos es el ____________.", ans: ["hierro", "fe"], exp: "En la fila Ejemplos de la tabla 6.1 figura: 'Hierro, Fe'." },
    { q: "26. Según el apartado 5.2, los átomos de los metales en estado sólido forman estructuras muy compactas llamadas ____________ cristalinas metálicas.", ans: ["redes", "red"], exp: "Esta estructura compacta les confiere altos valores de densidad." }
];

function ampliarTest() {
    let h1 = "";
    extraTestQ.forEach((x, i) => {
        const idx = testQ.length + i;
        h1 += `<div class="card"><div class="q-text">${x.q}</div>`;
        x.opts.forEach((o, j) => h1 += `<label><input type="radio" name="t${idx}" value="${j}"> ${o}</label>`);
        h1 += `<div class="fb" id="ft${idx}"></div></div>`;
    });
    document.getElementById("mc-box").innerHTML += h1;

    let h2 = "";
    extraFillQ.forEach((x, i) => {
        const idx = fillQ.length + i;
        h2 += `<div class="card"><div class="q-text">${x.q}</div><input type="text" id="in${idx}" placeholder="Tu respuesta..."><div class="fb" id="ff${idx}"></div></div>`;
    });
    document.getElementById("fill-box").innerHTML += h2;

    testQ.push(...extraTestQ);
    fillQ.push(...extraFillQ);
}

const corregirOriginal = corregir;
corregir = function() {
    corregirOriginal();
    const total = testQ.length + fillQ.length;
    const pts = document.querySelectorAll(".fb.ok").length;
    const nota = ((pts / total) * 10).toFixed(1);
    document.getElementById("score-txt").innerText = `Aciertos: ${pts} / ${total} (Nota: ${nota})`;
};

ampliarTest();
