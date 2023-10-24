function montarCorpoEmail(nomeCliente) {
    return `Olá, ${nomeCliente} 
      A CarStone está à venda com os veículos 0km mais recentes do mercado. Confira as oportunidades: 
  
      Citroen C3 Live 1.0
      Preço: R$ 72.990
      Mortor: 1.0 Firefly 6V
      Câmbio: manual de 5 marchas
      Portência e torque: 75cv e 10,7kgfm
  
      Hyundai HB20
      Preço: R$ 82.890
      Mortor: 1.0 Kappa 12V
      Câmbio: manual de 6 marchas
      Potência e torque: 80cv e 10,2kgfm
  
      Chevrolet Onix 1.0
      Preço: R$ 85.290
      Motor: 1.0 CSS Prime 12V
      Potência e torque: 82cv e 10,6kgfm
  
      Condições de pagamento à vista ou em até 72vezes
  
      Desconto para pessoas com deficiência(PCD)
  
      Clientes PCD possuem desconto de 30%. O benefício inclui pessoas com surdez, dificuldade de locomoção e 
      autistas mediante a apresentação de laudo médico. 
    `;
  }

  module.exports = montarCorpoEmail;