/*
Código desenvolvido pelo Grupo 3 para o Projeto Final do Módulo 1 da turma Vem Tech iFood 

Integrantes:
Edmilson Matias Dos Santos Junior
Jobson Andreson Valdevino De Almeida
Rodrigo Willians
Mateus Lannes Cunha

*/

const enviarEmail = require("./envia-email");
const listaEmails = require("./listaEmails");
const montarCorpoEmail = require("./corpoEmail");

const DIA_PARA_ENVIO_DOS_EMAILS = "Segunda-Feira";

function verificaDiaAtual() {
  const diaDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  return diaDaSemana[new Date().getDay()];
}

function enviarEmailClientes(listaEmails) {
  if (DIA_PARA_ENVIO_DOS_EMAILS !== verificaDiaAtual()) {
    console.log(`Atenção! Hoje não é ${DIA_PARA_ENVIO_DOS_EMAILS}. Portanto, nenhum email foi enviado!`);
    return;
  }

  const dataAtual = new Date();

  listaEmails.forEach((cliente) => {
    try {
      const ultimaVisita = new Date(cliente.ultimaVisita);
      const intervaloDeVisita = (dataAtual - ultimaVisita) / (1000 * 60 * 60 * 24);

      if (cliente.receberNotificacoes && intervaloDeVisita <= 30) {
        const assunto = "Novos Carros à Venda - CarStore";
        const corpoEmail = montarCorpoEmail(cliente.nomeCliente);

        const situacaoDeEnvio = enviarEmail(cliente.email, assunto, corpoEmail);
        console.log(`Cliente: ${cliente.nomeCliente}\nSituação: ${situacaoDeEnvio.message}\n`);
      }
    } catch (error) {
      console.error(`Erro ao processar cliente: ${error.message}`);
    }
  });
}

enviarEmailClientes(listaEmails);
