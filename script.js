function enviarWhats(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5517991704228';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

// 1. EFEITO DE APARECER AO ROLAR (SCROLL REVEAL)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.15 
});

const elementosParaAnimar = document.querySelectorAll('.secao-padrao, .contatos-secao-neon, .projetos-card, .stack-icons, .stack-bars');

elementosParaAnimar.forEach((el) => {
    el.classList.add('escondido');
    observer.observe(el);
});


// 2. EFEITO DE PARTÍCULAS FLUTUANTES
function criarParticulas() {
    const container = document.querySelector('#bolinhas-container');
    
    // Cria 40 bolinhas
    for (let i = 0; i < 40; i++) {
        let particula = document.createElement('div');
        particula.classList.add('ponto-flutuante');
        
        particula.style.left = Math.random() * 100 + 'vw';
        particula.style.top = Math.random() * 100 + 'vh';
        
        particula.style.animationDuration = (Math.random() * 10 + 10) + 's'; 
        particula.style.animationDelay = (Math.random() * 5) + 's';
        
        container.appendChild(particula);
    }
}

criarParticulas();