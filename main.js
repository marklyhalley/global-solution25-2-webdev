// Vetor global para armazenar as habilidades selecionadas
let vetorHabilidades = [];

// Função feita para adcionar uma habilidade e a exibir na tela como pedido
function adicionarHabilidade() {
  const select = document.getElementById("habilidadesSelect");
  const lista = document.getElementById("listaHabilidadesAdicionadas");
  const habilidade = select.value;

  // Verifica se o usuario escolheu uma habilidade antes de clicar no botão
  if (habilidade === "") {
    alert("Selecione uma habilidade antes de adicionar.");
    return;
  }

  // Impede que uma variavel ja adcionada seja reaciadcionada
  if (vetorHabilidades.includes(habilidade)) {
    alert("Essa habilidade já foi adicionada.");
    return;
  }

  // Adiciona ao vetor e exibe
  vetorHabilidades.push(habilidade);
  const li = document.createElement("li");
  li.textContent = habilidade;
  lista.appendChild(li);

  // Limpa o select
  select.value = "";
}

// Função principal que valida todos os campos do formulário
function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let email = document.getElementById("email").value;
  let tipoInteresse = document.querySelector('input[name="tipoInteresse"]:checked');

  let erros = [];

  // Verifica o campo nome (utiliza trim para remover espaços) (em caso de erros,utliza push para enviar a mensagem de erro ao vetor erro)
  if (nome.trim() === "") {
    erros.push("O campo Nome é obrigatório.");
  }

  // Verifica o campo CPF (utiliza trim para remover espaços) (em caso de erros,utliza push para enviar a mensagem de erro ao vetor erro)
  if (cpf.trim() === "") {
    erros.push("O campo CPF é obrigatório.");
  } else if (!checarCPF(cpf)) {
    //chama a função de validação e mostra mensagem de erro
    erros.push("O CPF informado é inválido.");
  }

  // Verifica o campo E-mail (utiliza trim para remover espaços) (em caso de erros,utliza push para enviar a mensagem de erro ao vetor erro)
  if (email.trim() === "") {
    erros.push("O campo E-mail é obrigatório.");
  } else if (!checarEmail(email)) {
    //chama a função de validação e mostra mensagem de erro
    erros.push("O e-mail informado é inválido. Deve conter apenas um '@' e terminar com algum dos TLDs disponiveis (.net, . com ou .com.br).");
  }

  // Verifica se há pelo menos 3 habilidades (em caso de erros,utliza push para enviar a mensagem de erro ao vetor erro)
  if (vetorHabilidades.length <= 2) {
    erros.push("Adicione ao menos 3 habilidades.");
  }

  // Verifica se o tipo de interesse foi marcado (em caso de erros,utliza push para enviar a mensagem de erro ao vetor erro)
  if (!tipoInteresse) {
    erros.push("Selecione um Tipo de Interesse.");
  }

  // Exibe o resultado chamando a função de exibir feedback
  exibirFeedback(erros);
}

// Função que mostra os erros ou o resumo de sucesso
function exibirFeedback(vetorErros) {
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = "";

    if (vetorErros.length > 0) {
    // Se houver erros, mostra em vermelho (sendo verificados pelo tamanho do vetor erros)
    feedback.style.color = "red";

    //utilizando for e concatenação para criar uma com os erros em uma string so (se houver)
    let listaErros = "<ul>";
    for (let i = 0; i < vetorErros.length; i++) {
        listaErros += "<li>" + vetorErros[i] + "</li>";
    }
    listaErros += "</ul>";

    //adcionando a string criada ao HTML com innerHTML (caso tenha erros)
    feedback.innerHTML = listaErros;
    

  } else {
    // Se não houver erros, mostra o resumo da inscrição (na cor verde)
    feedback.style.color = "green";

    //Adiciona o tipo de interesse selecionado no radio utilizando querySelector
    const tipoInteresseSelecionado = document.querySelector('input[name="tipoInteresse"]:checked');
    //operador ternario adicionado para definir a variavel interesse com base no tipo de interesse selecionado (ou nenhum)
    const interesse = tipoInteresseSelecionado ? tipoInteresseSelecionado.value : "Não informado";

    // texto do feedback utilizando innerHTML para dispor em tela (em formato de div como solicitado)
    feedback.innerHTML = `
    <div>
      <p>✅ Inscrição enviada com sucesso!</p>
      <p><strong>Resumo dos dados:</strong></p>
      <ul>
        <li><strong>Nome:</strong> ${document.getElementById("nome").value}</li>
        <li><strong>CPF:</strong> ${document.getElementById("cpf").value}</li>
        <li><strong>E-mail:</strong> ${document.getElementById("email").value}</li>
        <li><strong>Habilidades:</strong> ${vetorHabilidades.join(", ")}</li>
        <li><strong>Tipo de Interesse:</strong> ${interesse}</li>
      </ul>
    <div>
    `;
  }
}










function checarEmail(valor) {
  // Converte todas as letras maiusculas em minusculas utilizando manipulação de strings 
  let emailminusc = "";
  let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let minusculas = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < valor.length; i++) {
    let c = valor[i];
    let convertido = c;
    for (let j = 0; j < maiusculas.length; j++) {
      if (c === maiusculas[j]) {
        convertido = minusculas[j];
        break;
      }
    }
    emailminusc += convertido;
  }

    
  // Remove espaços que o usuario pode ter colocado no texto do email
  let email = "";
  for (let i = 0; i < emailminusc.length; i++) {
    if (emailminusc[i] !== ' ') {
      email += emailminusc[i];
    }
  }

// Verifica se o valor processado tem ao menos 7 caracteres (equivalentes a um para o usuario, um para o @,
// um para o dominio e outros 4 para o ".com"
  if (email.length < 7) return false;

  // Deve conter exatamente um '@'
  let posArroba = -1;
  let arrobaContagem = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      arrobaContagem++;
      posArroba = i;
    }
  }
  if (arrobaContagem !== 1) return false;

  // Verifica se o @ não esta no inicio ou no fim do texto
  if (posArroba === 0 || posArroba === email.length - 1) return false;

  // Verifica se termina em ".com", ".com.br" ou ".net"
  let terminaComCom = false;
  let terminaComComBr = false;
  let terminaComNet = false;

  if (email.length >= 4 &&
      email[email.length - 4] === '.' &&
      email[email.length - 3] === 'c' &&
      email[email.length - 2] === 'o' &&
      email[email.length - 1] === 'm') {
    terminaComCom = true;
  }

  if (email.length >= 7 &&
      email[email.length - 7] === '.' &&
      email[email.length - 6] === 'c' &&
      email[email.length - 5] === 'o' &&
      email[email.length - 4] === 'm' &&
      email[email.length - 3] === '.' &&
      email[email.length - 2] === 'b' &&
      email[email.length - 1] === 'r') {
    terminaComComBr = true;
  }

  if (email.length >= 4 &&
      email[email.length - 4] === '.' &&
      email[email.length - 3] === 'n' &&
      email[email.length - 2] === 'e' &&
      email[email.length - 1] === 't') {
    terminaComNet = true;
  }

  if (!terminaComCom && !terminaComComBr && !terminaComNet) return false;

  // Verifica se há pelo menos um caractere entre o '@' e o '.com', ou seja, o dominio
  let temDominio = false;
  for (let i = posArroba + 1; i < email.length - 4; i++) {
    if (email[i] !== '.' && email[i] !== '@') {
      temDominio = true;
      break;
    }
  }
  if (!temDominio) return false;

  return true;
}



function checarCPF(valor) {
  // Utilizando "for" para remover qualquer caractere que não seja um numero entre 0 e 9
  let cpf = "";
  for (let i = 0; i < valor.length; i++) {
    if (valor[i] >= '0' && valor[i] <= '9') {
      cpf += valor[i];
    }
  }

  // Verifica se possui 11 dígitos (condição 1 para cpf)
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  let todosIguais = true;
  for (let i = 1; i < 11; i++) {
    if (cpf[i] !== cpf[0]) {
      todosIguais = false;
      break;
    }
  }
  if (todosIguais) return false;

  //  Verifica o primeiro dígito verificador com base em calculo
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += (cpf[i] * 1) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto != cpf[9]) return false;

  // Verifica o segundo dígito verificador com base em calculo
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += (cpf[i] * 1) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto != cpf[10]) return false;

  return true;
}

