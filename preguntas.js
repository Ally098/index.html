const testQ = [
    { q: "1. Según el esquema del apartado 1.1, ¿qué entidades unen respectivamente los enlaces iónico, covalente y metálico?", opts: ["Átomos, iones y moléculas", "Iones, átomos y restos catiónicos", "Protones, neutrones y electrones", "Metales, gases nobles y líquidos"], ans: 1, exp: "El enlace iónico une iones, el covalente une átomos y el metálico une restos catiónicos." },
    { q: "2. Según el apartado 1.2, ¿por qué los átomos tienden a unirse mediante enlaces químicos?", opts: ["Porque aumenta la energía y se vuelven inestables", "Porque disminuye la energía del sistema y aumenta su estabilidad", "Porque así pierden todos sus electrones", "Porque aumenta su masa atómica"], ans: 1, exp: "La combinación de atracción y repulsión alcanza un mínimo de energía que estabiliza los átomos." },
    { q: "3. Según la regla del octeto (1.3), todos los gases nobles tienen 8 electrones de valencia excepto uno que alcanza estabilidad con 2 electrones. ¿Cuál es?", opts: ["Neón (Ne)", "Argón (Ar)", "Helio (He)", "Kriptón (Kr)"], ans: 2, exp: "El helio solo tiene una capa y es estable con 2 electrones de valencia." },
    { q: "4. En un diagrama de Lewis (1.4), además de dos puntos, ¿cómo se puede representar cada par de electrones?", opts: ["Con una flecha curva", "Mediante un guion", "Con un círculo", "Con un signo más"], ans: 1, exp: "Cada par de electrones (enlazante o solitario) puede representarse mediante un guion." },
    { q: "5. ¿Cómo se llama el fenómeno por el cual las moléculas de agua rodean a los iones de una red iónica y los separan al disolverse?", opts: ["Sublimación", "Solvatación", "Electronegatividad", "Ionización"], ans: 1, exp: "Las moléculas polares del agua debilitan el enlace iónico rodeando cada ion (solvatación)." },
    { q: "6. ¿Por qué los compuestos iónicos son frágiles y se rompen al golpearlos?", opts: ["Porque sus enlaces son muy débiles", "Porque al desplazarse las capas se enfrentan iones del mismo signo y se repelen", "Porque son líquidos por dentro", "Porque no forman redes cristalinas"], ans: 1, exp: "El golpe enfrenta cargas del mismo signo, provocando una fuerte repulsión electrostática que rompe el cristal." },
    { q: "7. Según el apartado 2.3, ¿qué indica la fórmula empírica de un compuesto iónico (como LiF o CaCl₂)?", opts: ["El número total de átomos que hay en un cristal", "La proporción más simple posible en la que están presentes los distintos átomos", "El peso exacto de la molécula", "El número de electrones libres"], ans: 1, exp: "Como una red cristalina tiene millones de iones, se indica la proporción más sencilla entre ellos." },
    { q: "8. Según el apartado 3.2 (Orden de enlace), ¿qué tipo de enlace covalente une a los dos átomos en la molécula de nitrógeno (N₂)?", opts: ["Enlace sencillo (1 par compartido)", "Enlace doble (2 pares compartidos)", "Enlace triple (3 pares compartidos)", "Enlace iónico"], ans: 2, exp: "En el N₂ ambos átomos comparten tres pares de electrones para completar su octeto." },
    { q: "9. Observando la tabla periódica de electronegatividad de Pauling del libro (3.3), ¿cuál es el elemento más electronegativo (valor 4,0)?", opts: ["Oxígeno (O)", "Cloro (Cl)", "Flúor (F)", "Nitrógeno (N)"], ans: 2, exp: "El flúor (F) tiene el valor máximo de electronegatividad en la escala de Pauling: 4,0." },
    { q: "10. Cuando dos átomos unidos por enlace covalente tienen distinta electronegatividad (como en el HCl), ¿qué ocurre?", opts: ["Se forma un enlace covalente apolar", "Se genera una carga parcial negativa en el más electronegativo y positiva en el otro (enlace polar)", "Se forma un enlace metálico", "Los electrones se reparten exactamente igual"], ans: 1, exp: "La desigual atracción de electrones crea un dipolo eléctrico (enlace covalente polar)." },
    { q: "11. Tanto el cuarzo como el vidrio están formados por sílice (SiO₂). Según el libro (3.4), ¿en qué se diferencian?", opts: ["El cuarzo es un metal y el vidrio es iónico", "El cuarzo tiene estructura cristalina ordenada y el vidrio tiene los átomos desordenados", "El vidrio es más duro que el diamante", "El cuarzo conduce la electricidad"], ans: 1, exp: "El cuarzo es un cristal ordenado y el vidrio es un sólido amorfo con átomos desordenados." },
    { q: "12. Si comparamos la fórmula molecular del butano (C₄H₁₀) y su fórmula empírica (C₂H₅), ¿qué nos indica la fórmula molecular?", opts: ["Solo la proporción más simple", "El número exacto de átomos de cada elemento que forman la molécula", "Su temperatura de fusión", "Si es soluble en agua"], ans: 1, exp: "La fórmula molecular informa del número exacto de átomos de C y de H en cada molécula." },
    { q: "13. Según las gráficas de fuerzas de Van der Waals del apartado 4.2, ¿qué ocurre con la temperatura de ebullición al aumentar la polaridad o el tamaño molecular?", opts: ["Disminuye drásticamente", "Aumenta, porque las fuerzas de Van der Waals son más intensas", "Se mantiene siempre constante en 0 °C", "Desaparecen las fuerzas intermoleculares"], ans: 1, exp: "A mayor polaridad o mayor tamaño molecular, más intensas son las fuerzas de Van der Waals y más cuesta hervir la sustancia." },
    { q: "14. En la tabla del apartado 4.3, el agua (H₂O) hierve a 100 °C mientras que el H₂S hierve a -60 °C. ¿A qué se debe esta gran diferencia?", opts: ["A que el agua pesa mucho más", "A que entre las moléculas de agua existen enlaces de hidrógeno, mucho más intensos", "A que el H₂S es un compuesto iónico", "A que el agua es un sólido reticular"], ans: 1, exp: "Los enlaces de hidrógeno entre moléculas de agua son mucho más fuertes que las fuerzas de Van der Waals del H₂S." }
];

const fillQ = [
    { q: "15. La regla del ____________ establece que los átomos se unen mediante enlaces para adquirir la configuración del gas noble más cercano.", ans: ["octeto"], exp: "Apartado 1.3: Regla del octeto." },
    { q: "16. El enlace iónico se da entre un metal con baja energía de ionización y un no metal con alta ____________ electrónica.", ans: ["afinidad"], exp: "Apartado 2.1: Alta afinidad electrónica para aceptar electrones." },
    { q: "17. La ____________ es la tendencia que tiene un átomo para atraer los electrones de un enlace hacia sí.", ans: ["electronegatividad"], exp: "Apartado 3.3: Definición de electronegatividad." },
    { q: "18. El diamante, el grafito, el carburo de silicio (SiC) y el cuarzo son ejemplos de sustancias covalentes ____________.", ans: ["reticulares"], exp: "Apartado 3.4: Sustancias covalentes reticulares." },
    { q: "19. Aunque las sustancias moleculares no suelen disolverse en agua, los dipolos pueden disolverse en disolventes polares como el etanol o la ____________.", ans: ["acetona"], exp: "Apartado 3.4: Propiedades de sustancias moleculares." },
    { q: "20. Los enlaces de ____________ se producen entre un átomo pequeño y electronegativo (N, O o F) de una molécula y un átomo de hidrógeno de otra.", ans: ["hidrogeno", "hidrógeno"], exp: "Apartado 4.3: Enlaces de hidrógeno." }
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
