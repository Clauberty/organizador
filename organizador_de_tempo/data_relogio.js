
function atualizarRelogio() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
    });
    const hora = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });
  let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
    } 
    else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } 
    else {
        saudacao = "Boa noite";
    }
    document.getElementById("saudacao").textContent = saudacao;
    document.getElementById("data").textContent = data;
    document.getElementById("relogio").textContent = hora;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function fraseDoDia() {

    const frases = [
        ", Foco no que realmente importa.",
        ", Pequenos passos geram grandes resultados.",
        ", Consistência supera motivação.",
        ", Hoje é um bom dia para evoluir.",
        ", Faça o simples bem feito.",
        ", Disciplina constrói resultados.",
        ", Comece antes de estar pronto.",
        ", Seu futuro depende do que faz hoje.",
        ", Menos distração, mais ação.",
        ", Cada dia é uma nova chance.",
        ", Progresso acima da perfeição.",
        ", Persistência vence o talento.",
        ", Organize hoje, conquiste amanhã.",
        ", Um passo de cada vez.",
        ", Clareza gera produtividade."
    ];

    const hoje = new Date();

    // Usa o dia do ano como índice
    const diaDoAno =
        Math.floor(
            (hoje - new Date(hoje.getFullYear(), 0, 0))
            / 1000 / 60 / 60 / 24
        );

    const indice = diaDoAno % frases.length;

    document.getElementById("frase").textContent =
        frases[indice];
       
}

fraseDoDia();