
var nomeUser;
var nomeHotel; 

function inicio() {
    nomeUser = prompt("Informe seu nome: ");
    if (nomeUser === null) {
        return; 
    }

    nomeHotel = prompt("Qual o nome do seu hotel? ");
    if (nomeHotel === null) {
        return; 
    }

    var escolha = prompt("Escolha uma ação:\n1 - Verificar senha\n2 - Exibir mensagem de boas-vindas\n3 - Sair");

    switch (escolha) {
        case "1":
            verificarSenha();
            break;
        case "2":
            exibirMensagemBoasVindas();
            break;
        case "3":
            confirmarSaida();
            break;
        default:
            alert("Opção inválida.");
    }
}

function verificarSenha() {
    var senha = parseInt(prompt("Informe sua senha (2678): "));
    if (senha === 2678) { 
        document.getElementById("resultado").innerHTML = "Senha válida, pode entrar " + nomeUser;
    } else {
        document.getElementById("resultado").innerHTML = "Senha inválida. Tente novamente";
    }
}

function exibirMensagemBoasVindas() {
    document.getElementById("resultado").innerHTML = "Bem-vindo ao Hotel " + nomeHotel + ", " + nomeUser + "! É um imenso prazer ter você por aqui!";
}

function confirmarSaida() {
    var confirmacao = confirm("Muito obrigado e até logo, " + nomeUser);
    if (confirmacao) {
        window.close(); 
    }
}

//Desenvolva um programa que: 
//1) Receba o valor de uma diária no hotel e a quantidade de dias de hospedagem. Valide as informações, ou seja, impeça que o usuário informe dados inválidos, de maneira que o valor da diária não seja negativo e que a quantidade de dias não seja negativa, nem maior que 30. 
//Em caso de informação inválida escreva na tela “Valor Inválido” e volte ao menu inicial. 


function validarNumero(numero, min, max) {
    return numero >= min && numero <= max;
  }
  

  function lernumerointeiro(mensagem) {
    let numero;
    do {
      numero = parseInt(prompt(mensagem));
    } while (isNaN(numero));
    return numero;
  }
  
  function fazerReserva() {
    let valorDiaria = lernumerointeiro("Informe o valor da diária:");
    let quantidadeDias = lernumerointeiro("Informe a quantidade de dias de hospedagem:");
  
    if (!validarNumero(valorDiaria, 0, Infinity) || !validarNumero(quantidadeDias, 1, 30)) {
      alert("Valor inválido");
      return;
    }
  
    let nomeHospede = prompt("Informe o nome do hóspede:");
  
    let confirmacao = confirm(`Reserva para ${nomeHospede}:
    - Valor da diária: R$ ${valorDiaria}
    - Quantidade de dias: ${quantidadeDias}
    Confirmar a reserva?`);
  
    if (!confirmacao) {
      return;
    }
  
    alert(`Reserva confirmada para ${nomeHospede}:
    - Valor total: R$ ${valorDiaria * quantidadeDias}
    - Dias de hospedagem: ${quantidadeDias}`);
  }
  

  // 2) Como soletra?

  function pagamentoEspecial() {
    // Solicita os dados ao usuário
    var nomeHospede = prompt("Qual o nome do Hóspede?");
    var idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));
    var valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));

    var valorTotal = valorDiaria;

    if (idadeHospede <= 6) {
        valorTotal = 0; 
    } else if (idadeHospede >= 82) {
        valorTotal = valorDiaria / 2; 
    }

    alert(nomeHospede + ", o valor total das hospedagens é: R$" + valorTotal.toFixed(2));
}







const listaDeHospedes = [];

// Função para cadastrar hóspedes
function cadastrarHospede() {
    if (listaDeHospedes.length >= 15) {
        alert("Máximo de cadastros atingido.");
        return;
    }

    const nomeHospede = prompt("Informe o nome do hóspede: ");
    if (nomeHospede) {
        listaDeHospedes.push(nomeHospede);
        alert("Hóspede cadastrado com sucesso.");
    } else {
        alert("Nome inválido. Tente novamente.");
    }
}


function pesquisarHospede() {
    const nomePesquisado = prompt("Digite o nome que deseja pesquisar: ");
    const encontrado = listaDeHospedes.includes(nomePesquisado);
    if (encontrado) {
        alert("Hóspede " + nomePesquisado + " foi encontrado.");
    } else {
        alert("Hóspede não encontrado.");
    }
}
function listarHospedes() {
    if (listaDeHospedes.length === 0) {
        alert("Não há hóspedes cadastrados.");
        return;
    }

    alert("Lista de hóspedes:\n" + listaDeHospedes.join("\n"));
 }


 function CadastroComOpções() {
    while (true) {
        const opcao = prompt("Escolha uma opção:\n1. Cadastrar hóspede\n2. Pesquisar hóspede\n3. Listar hóspedes\n4. Sair");

        if (opcao === "1") {
            cadastrarHospede();
        } else if (opcao === "2") {
            pesquisarHospede();
        } else if (opcao === "3") {
            listarHospedes();
        } else if (opcao === "4") {
            alert("Saindo do programa.");
            break;
        } else {
            alert("Opção inválida. Tente novamente.");
        }
    }
 }


 document.getElementById("cadastroFamiliaOpções").addEventListener("click", CadastroComOpções);

 //4) Festa ou trabalho?

 /*Neste cenário, o hotel receberá não hóspedes, mas eventos. 
Quando uma empresa contrata o hotel para eventos, são oferecidos garçons para servir os convidados. Considerando que cada garçom custa R$ 10,50 por hora, escreva um programa que receba o número de garçons necessários e o total de horas do evento. 

Depois calcule o custo total que o hotel terá com a contratação desses profissionais e exiba o resultado em tela. 

Por último, pergunte se o usuário aceita os valores. Se "S", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."
 */

/*5) Hora de comer
Neste cenário vamos tratar do Buffet do hotel.
O hotel oferece café, água e salgados para cada um dos convidados de um evento alocado em seus salões. 
A quantidade de café, em litros, é calculada como 0,2 litro para cada
 convidado; a quantidade de água é calculada como 0,5 litro para cada convidado; 
 são oferecidos 7 salgados por pessoa.  */

 
 
function calcularCustoComida(convidados) {
    const custoCafePorLitro = 0.80;
    const custoAguaPorLitro = 0.40;
    const custoSalgadosPorCento = 34.00;

    const litrosCafe = convidados * 0.2;
    const litrosAgua = convidados * 0.5;
    const centosSalgados = convidados * 7;

    const custoCafe = litrosCafe * custoCafePorLitro;
    const custoAgua = litrosAgua * custoAguaPorLitro;
    const custoSalgados = (centosSalgados / 100) * custoSalgadosPorCento;

    return custoCafe + custoAgua + custoSalgados;
}
function calcularComida() {
    const numConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

    if (numConvidados > 350) {
        alert('Quantidade de convidados superior à capacidade máxima.');
    } else {
        const litrosCafe = numConvidados * 0.2;
        const litrosAgua = numConvidados * 0.5;
        const salgados = numConvidados * 7;

        alert(`O evento precisará de ${litrosCafe} litros de café, ${litrosAgua} litros de água, ${salgados} salgados. O custo total do evento será de R$ ${calcularCustoComida(numConvidados).toFixed(2)}`);

        const resposta = prompt('Gostaria de efetuar a reserva? (S/N)').toUpperCase();
        if (resposta === 'S') {
            const nome = prompt('Digite o nome para a reserva:');
            alert(`${nome}, reserva efetuada com sucesso.`);
        } else {
            alert('Reserva não efetuada.');
        }
    }
}


function verificarDisponibilidadeRestaurante() {
    const diaSemana = prompt('Qual o dia do seu evento? seg a sex dias disponiveis').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const hora = parseInt(prompt('Qual a hora do seu evento? 7hs às 23hs disponiveis '));

    if (
        (diaSemana === 'segunda' || diaSemana === 'terca' || diaSemana === 'quarta' || diaSemana === 'quinta' || diaSemana === 'sexta') &&
        (hora >= 7 && hora <= 23)
    ) {
        const nomeEmpresa = prompt('Qual o nome da empresa?');
        document.getElementById("resultado").textContent = `Restaurante reservado para ${nomeEmpresa}: ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} às ${hora}hs.`;
    } else if (
        (diaSemana === 'sabado' || diaSemana === 'domingo') &&
        (hora >= 7 && hora <= 15)
    ) {
        const nomeEmpresa = prompt('Qual o nome da empresa?');
        document.getElementById("resultado").textContent = `Restaurante reservado para ${nomeEmpresa}: ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} às ${hora}hs.`;
    } else {
        document.getElementById("resultado").textContent = 'Restaurante indisponível';
    }
}

/*O hotel tem um carro para levar seus hóspedes a passeios. O carro é sempre abastecido pelo hotel que tem convênios com 
dois postos de Gasolina: o Wayne Oil e o Stark Petrol. Os carros podem ser abastecidos tanto com álcool quanto gasolina, 
mas os preços têm flutuado bastante, então é necessário que que um funcionário cheque qual o posto mais em conta para abastecimento. 
Para isso, é necessário desenvolver um programa em que o usuário informe os valores de álcool e gasolina dos dois postos e depois 
calcule qual o combustível mais atraente e o posto mais barato. Considere que o tanque do carro comporta 42 litros de combústivel e 
esse sempre será o volume a ser abastecido. 
Considere que quando o álcool estiver 30% mais barato que a gasolina, é mais barato abastecer com álcool.
Dica: Regra de três. */

function calcularCombustivel() {
    let precoAlcoolW = parseFloat(prompt("Qual valor do álcool no posto Wayne Oil? "));
    let precoGasolinaW = parseFloat(prompt("Qual valor da Gasolina no posto Wayne Oil? "));
    
    let precoAlcoolStarkPetrol = parseFloat(prompt("Qual valor do álcool no posto Stark Petrol?"));
    let precoGasolinaStarkPetrol = parseFloat(prompt("Qual valor da Gasolina no posto Stark Petrol?"));

    let precoAlcool30PorcentoMaisBarato = precoGasolinaW * 0.7;

    let escolha = "#";
    let postoMaisBarato = "#";

    if (precoAlcool30PorcentoMaisBarato <= precoAlcoolW) {
        escolha = "álcool";
        postoMaisBarato = "Wayne Oil";
    } else {
        escolha = "gasolina";
        postoMaisBarato = "Wayne Oil";
    }

    if (precoGasolinaStarkPetrol < precoGasolinaW) {
        postoMaisBarato = "Stark Petrol";
    }

    alert(`É mais barato abastecer com ${escolha} no posto ${postoMaisBarato}.`);
}

document.getElementById("calcularCombustivel").addEventListener("click", calcularCombustivel);


/*9) Ar puro, finalmente.
A manutenção dos ar-condicionados no hotel é realizada por empresas terceirizadas que, em alguns casos, 
oferecem desconto quando o serviço é realizado em uma quantidade determinada de aparelhos. 
*/

function manutencaoNoAr () {
    let nomeEmpresaAr = prompt("Qual o nome da empresa?");
    let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
    let NumeroDeAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
    let descontoDoAr = parseFloat(prompt("Qual a porcentagem de desconto?"));
    let numeroMinimosParaDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
 
    let custoSemDesconto = valorPorAparelho * NumeroDeAparelho;
    let custoComDesconto = custoSemDesconto;
 
    if (NumeroDeAparelho >= numeroMinimosParaDesconto) {
        custoComDesconto = custoSemDesconto - (custoSemDesconto * (descontoDoAr / 100));
    }
 
    alert(`O serviço de ${nomeEmpresaAr} custará R$ ${custoComDesconto.toFixed(2)}`);
 
    let NaoAcabou = prompt(`Deseja continuar ${nomeEmpresaAr}? (S/N)`);
    if (NaoAcabou.toUpperCase() !== "S") {
        return; 
    }
 }
 