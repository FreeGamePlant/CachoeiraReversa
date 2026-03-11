let paginaAtual = 1;
const totalPaginas = 5;

const paginas = {
    1: document.getElementById('pg1'),
    2: document.getElementById('pg2'),
    3: document.getElementById('pg3'),
    4: document.getElementById('pg4'),
    5: document.getElementById('pg5')
};

const dots = document.querySelectorAll('.dot');

function atualizarDisplay() {
    
    for (let i = 1; i <= totalPaginas; i++) {
        if (paginas[i]) {
            paginas[i].style.display = i === paginaAtual ? 'block' : 'none';
        }
    }
    
    
    dots.forEach((dot, index) => {
        if (index + 1 === paginaAtual) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function mudarPagina(direcao) {
    if (direcao === 'proxima') {
        paginaAtual = paginaAtual === totalPaginas ? 1 : paginaAtual + 1;
    } else if (direcao === 'anterior') {
        paginaAtual = paginaAtual === 1 ? totalPaginas : paginaAtual - 1;
    }
    atualizarDisplay();
}

function irParaPagina(numero) {
    if (numero >= 1 && numero <= totalPaginas) {
        paginaAtual = numero;
        atualizarDisplay();
    }
}


(function() {
    const referencesSection = document.getElementById('referencesSection');
    const toggleBtn = document.getElementById('toggleReferencesBtn');
    const btnText = toggleBtn?.querySelector('span');

    
    atualizarDisplay();
    
    function toggleReferences() {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;

        if (newState) {
            referencesSection.classList.add('show');
            toggleBtn.setAttribute('aria-expanded', 'true');
            if (btnText) btnText.textContent = 'Fechar Referências';
        } else {
            referencesSection.classList.remove('show');
            toggleBtn.setAttribute('aria-expanded', 'false');
            if (btnText) btnText.textContent = 'Abrir Referências';
        }
    }

    if (toggleBtn && referencesSection) {
        toggleBtn.addEventListener('click', toggleReferences);
    }

    referencesSection?.classList.remove('show');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    if (btnText) btnText.textContent = 'Abrir Referências';
})();