const testQ = [
    { q: "1. ¿Qué electrones participan en los enlaces químicos y se dibujan en los diagramas de Lewis?", opts: ["Todos los electrones", "Los de la última capa (valencia)", "Solo los de la primera capa", "Los protones del núcleo"], ans: 1, exp: "Solo intervienen los electrones de la última capa o capa de valencia." },
    { q: "2. Según la profesora, los compuestos con enlace covalente se dividen en dos grupos:", opts: ["Metales y no metales", "Cristales (sustancias covalentes reticulares) y moléculas", "Iones positivos y negativos", "Ácidos y bases"], ans: 1, exp: "Pueden formar moléculas individuales o redes cristalinas (reticulares)." },
    { q: "3. Según la tabla de la pág. 88, ¿cómo es la conductividad eléctrica de los compuestos iónicos?", opts: ["Conducen siempre en sólido", "Nunca conducen", "Conducen solo fundidos o en disolución", "Son buenos conductores térmicos"], ans: 2, exp: "Al fundirse o disolverse los iones tienen movilidad para conducir corriente." },
    { q: "4. ¿Qué propiedad caracteriza a las sustancias covalentes reticulares (como el diamante)?", opts: ["Blandos y solubles", "Puntos de fusión bajos", "Muy duros, insolubles y puntos de fusión muy altos", "Dúctiles y maleables"], ans: 2, exp: "Sus redes tridimensionales de enlaces fuertes les dan enorme dureza y altísima fusión." },
    { q: "5. Según la tabla, ¿qué tipo de compuestos pueden ser sólidos, líquidos o gases?", opts: ["Iónicos", "Covalentes reticulares", "Moléculas", "Metálicos"], ans: 2, exp: "Las moléculas tienen fuerzas débiles entre sí y aparecen en los tres estados." },
    { q: "6. En la tabla de la pág. 88, ¿qué propiedad de fragilidad tienen los compuestos metálicos?", opts: ["Son muy frágiles", "Son dúctiles y maleables", "Depende del compuesto", "Se rompen al golpearlos"], ans: 1, exp: "Los metales se deforman sin romperse: forman hilos (dúctiles) y láminas (maleables)." },
    { q: "7. Una sustancia es sólida, dura, frágil, soluble en agua y conduce disuelta. Su enlace es:", opts: ["Metálico", "Covalente molecular", "Iónico", "Covalente reticular"], ans: 2, exp: "Son las propiedades exactas de un compuesto iónico como el NaCl." },
    { q: "8. Según la regla del octeto, los átomos forman enlaces para:", opts: ["Perder sus protones", "Tener 8 electrones en su última capa", "Convertirse en metales", "Aumentar su masa"], ans: 1, exp: "Buscan alcanzar la configuración estable de gas noble (8 electrones de valencia)." },
    { q: "9. Un elemento del Grupo 17 (como el Cloro) lleva en su diagrama de Lewis:", opts: ["1 punto", "5 puntos", "7 puntos", "8 puntos"], ans: 2, exp: "Los halógenos (grupo 17) tienen 7 electrones en su última capa." },
    { q: "10. En el diagrama de Lewis del oxígeno molecular (O₂, Grupo 16), el enlace entre ambos átomos es:", opts: ["Covalente simple", "Covalente doble", "Covalente triple", "Iónico"], ans: 1, exp: "Cada oxígeno tiene 6 electrones; comparten 2 pares (enlace doble) para llegar a 8." },
    { q: "11. Un enlace covalente entre dos átomos es APOLAR cuando:", opts: ["Se une metal y no metal", "Ambos átomos tienen la misma electronegatividad (ej. H₂)", "Un átomo roba electrones", "Es soluble en agua"], ans: 1, exp: "Al atraer los electrones con igual fuerza no se forman polos." },
    { q: "12. En el HCl, el cloro atrae más los electrones que el hidrógeno. El enlace es:", opts: ["Covalente apolar", "Covalente polar", "Metálico", "Reticular"], ans: 1, exp: "La diferencia de electronegatividad crea un dipolo eléctrico." },
    { q: "13. Según la tabla de la pág. 88, ¿qué moléculas covalentes son solubles en agua?", opts: ["Todas", "Ninguna", "Solo las más polares", "Solo las gaseosas"], ans: 2, exp: "El agua es polar y disuelve únicamente a las moléculas más polares." },
    { q: "14. ¿Cuántos pares de electrones solitarios le quedan al nitrógeno (Grupo 15) en el NH₃?", opts: ["Ninguno", "1 par solitario", "2 pares solitarios", "3 pares solitarios"], ans: 1, exp: "Usa 3 de sus 5 electrones para enlazarse con los H y le sobra 1 pareja." }
];

const fillQ = [
    { q: "15. En la tabla de la pág. 88, el ejemplo de sustancia covalente reticular es el ____________.", ans: ["diamante"], exp: "El diamante (C) es el cristal covalente de la tabla." },
    { q: "16. El enlace ____________ se forma generalmente entre un metal y un no metal.", ans: ["ionico", "iónico"], exp: "El metal cede electrones y el no metal los gana." },
    { q: "17. Los compuestos ____________ son buenos conductores eléctricos y térmicos en estado sólido.", ans: ["metalicos", "metálicos"], exp: "Sus electrones libres conducen calor y electricidad siempre." },
    { q: "18. En un diagrama de Lewis, cada raya entre dos átomos representa un par de ____________ compartidos.", ans: ["electrones"], exp: "Cada enlace simple son 2 electrones compartidos." },
    { q: "19. La fuerza con la que un átomo atrae los electrones de un enlace se llama ____________.", ans: ["electronegatividad"], exp: "Determina si el enlace covalente será polar o apolar." },
    { q: "20. Según la tabla de la pág. 88, la dureza de las moléculas se clasifica como ____________.", ans: ["blandos", "blandas", "blando", "blanda"], exp: "En la tabla aparecen como 'Blandos'." }
];

function iniciar() {
    let h1 = "";
    testQ.forEach((x, i) => {
        h1 += `<div class="card"><div class="q-text">${x.q}</div>`;
        x.opts.forEach((o, j) => h1 += `<label><input type="radio" name="t${i}" value="${j}"> ${o}</label>`);
        h1 += `<div class="fb" id="ft${i}"></div></div>`;
    });
    document.getElementById("mc-box").innerHTML = h1;

    let h2 = "";
    fillQ.forEach((x, i) => {
        h2 += `<div class="card"><div class="q-text">${x.q}</div><input type="text" id="in${i}" placeholder="Tu respuesta..."><div class="fb" id="ff${i}"></div></div>`;
    });
    document.getElementById("fill-box").innerHTML = h2;
}

const norm = s => s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function corregir() {
    let pts = 0;
    testQ.forEach((x, i) => {
        const sel = document.querySelector(`input[name="t${i}"]:checked`);
        const fb = document.getElementById(`ft${i}`);
        fb.style.display = "block";
        if (sel && +sel.value === x.ans) {
            pts++; fb.className = "fb ok"; fb.innerHTML = `✅ ¡Bien! ${x.exp}`;
        } else {
            fb.className = "fb no"; fb.innerHTML = `❌ Correcta: <b>${x.opts[x.ans]}</b>. ${x.exp}`;
        }
    });
    fillQ.forEach((x, i) => {
        const val = norm(document.getElementById(`in${i}`).value);
        const fb = document.getElementById(`ff${i}`);
        fb.style.display = "block";
        if (x.ans.map(norm).includes(val)) {
            pts++; fb.className = "fb ok"; fb.innerHTML = `✅ ¡Bien! ${x.exp}`;
        } else {
            fb.className = "fb no"; fb.innerHTML = `❌ Esperada: <b>${x.ans[0]}</b>. ${x.exp}`;
        }
    });
    const nota = ((pts / 20) * 10).toFixed(1);
    const box = document.getElementById("score-box");
    box.style.display = "block";
    document.getElementById("score-txt").innerText = `Aciertos: ${pts} / 20 (Nota: ${nota})`;
    document.getElementById("score-msg").innerText = pts >= 15 ? "¡Genial! Listos para el lunes." : "Repasen los fallos en rojo e inténtenlo de nuevo.";
    box.scrollIntoView({ behavior: "smooth" });
}
iniciar();
