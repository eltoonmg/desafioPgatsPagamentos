const produtos = [
  {
    codigoBarras: '0987-7656-3475',
    empresa: 'Mercado Livre',
    valor: 55.50
  },
  {
    codigoBarras: '0987-7656-3476',
    empresa: 'Amazon',
    valor: 2000.00
  },
  {
    codigoBarras: '0987-7656-3477',
    empresa: 'Shopee',
    valor: 20.00
  },
  {
    codigoBarras: '0987-7656-3478',
    empresa: 'Americanas',
    valor: 100.00
  },
  {
    codigoBarras: '0987-7656-3479',
    empresa: 'Americanas',
    valor: 101.00
  }
];

const pagamentos = []

export function realizarPagamento(codigoBarras , empresa, valor) {

    for (let produto of produtos) {    
    if (produto.codigoBarras == codigoBarras) {
      produto.categoria = produto.valor <= 100 ? 'padrão' : 'cara';

      pagamentos.push(produto)
      return pagamentos
    }
  }

  throw new Error('Código de barras não encontrado');
}

export function consultarUltimoPagamento (){
    if (pagamentos.length == 0) {
        return "Nenhum pagamento realizado";
    }

  return pagamentos[pagamentos.length - 1];
}