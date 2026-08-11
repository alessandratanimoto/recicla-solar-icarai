const dadosLixeiras = {
  papel: {
    titulo: "Lixeira Azul — Papel e Papelão",
    pode: "Caixas de papelão, folhas de caderno, jornais, revistas, embalagens Longa Vida (caixas de leite/suco limpas).",
    nao: "Fita adesiva, papel higiênico, papéis engordurados ou engomados.",
    dica: "Dobre ou desmonte as caixas de papelão para otimizar o espaço do contêiner do condomínio."
  },
  plastico: {
    titulo: "Lixeira Vermelha — Plásticos",
    pode: "Garrafas PET, embalagens de produtos de limpeza, sacolas, potes de margarina/iogurte.",
    nao: "Cabos de panela, fraldas descartáveis, plásticos metalizados (ex: embalagens de salgadinho).",
    dica: "Passe uma água rápida para retirar o excesso de resíduos de comida antes do descarte."
  },
  vidro: {
    titulo: "Lixeira Verde — Vidros",
    pode: "Garrafas de bebidas, potes de conserva, frascos de remédio vazios, cacos de vidro.",
    nao: "Lâmpadas, espelhos, cerâmicas, louças e vidros temperados.",
    dica: "Embale cacos de vidro em caixas de papelão ou garrafas PET cortadas para proteger os coletores."
  },
  metal: {
    titulo: "Lixeira Amarela — Metais",
    pode: "Latas de alumínio (refrigerante/cerveja), latas de conserva, tampas de garrafa, papel alumínio limpo.",
    nao: "Pilhas e baterias, latas de tinta, palha de aço.",
    dica: "Pressione a tampa da lata para dentro para evitar acidentes durante o manuseio."
  },
  organico: {
    titulo: "Lixeira Marrom — Orgânicos",
    pode: "Restos de alimentos, cascas de frutas e legumes, pó de café, sacos de chá.",
    nao: "Embalagens plásticas, vidros, metais, óleos vegetais (devem ser descartados separadamente).",
    dica: "Mantenha os resíduos em sacos bem fechados para evitar contaminação e odores."
  }
};

const itensBusca = [
  { nome: "Caixa de leite (Longa Vida)", destino: "Lixeira Azul (Papel) - Limpa e seca" },
  { nome: "Garrafa PET", destino: "Lixeira Vermelha (Plástico)" },
  { nome: "Lata de Refrigerante", destino: "Lixeira Amarela (Metal)" },
  { nome: "Lâmpada", destino: "Ponto de Coleta Especial (NÃO jogar na lixeira comum)" },
  { nome: "Pote de Vidro", destino: "Lixeira Verde (Vidro)" },
  { nome: "Casca de Fruta / Restos de Comida", destino: "Lixeira Marrom (Orgânico)" },
  { nome: "Óleo de Cozinha Usado", destino: "Armazenar em garrafa PET e entregar no ponto de coleta do condomínio" }
];

function mostrarInstrucao(tipo) {
  const painel = document.getElementById("painel-instrucao");
  const dados = dadosLixeiras[tipo];

  document.getElementById("titulo-lixeira").innerText = dados.titulo;
  document.getElementById("pode-descartar").innerText = dados.pode;
  document.getElementById("nao-descartar").innerText = dados.nao;
  document.getElementById("dica-higienizacao").innerText = dados.dica;

  painel.classList.remove("hidden");
}

function buscarItem() {
  const termo = document.getElementById("campo-busca").value.toLowerCase();
  const lista = document.getElementById("resultado-busca");
  lista.innerHTML = "";

  if (termo.trim() === "") return;

  const filtrados = itensBusca.filter(item => item.nome.toLowerCase().includes(termo));

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nenhum item encontrado. Consulte a síndica ou verifique a categoria geral.</li>";
  } else {
    filtrados.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.nome}:</strong> ${item.destino}`;
      lista.appendChild(li);
    });
  }
}