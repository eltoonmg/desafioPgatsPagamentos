import { realizarPagamento , consultarUltimoPagamento } from "../src/servicoDePagamentos.js";
import assert from 'node:assert';

describe('Testes do Módulo de Pagamentos', function() {
    it('Validar Ultimo Pagamento', function(){

            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3477';
            const empresa = 'Shopee';
            const valor = 20.00

            //Act (Quando, ações)
            const pagamento = realizarPagamento(codigoBarras, empresa, valor);
            const consultarPagamento = consultarUltimoPagamento();

            //Assert (Então, Pós-condições)
            assert.equal(consultarPagamento.codigoBarras, '0987-7656-3477');
            assert.equal(consultarPagamento.empresa, 'Shopee');
            assert.equal(consultarPagamento.valor, 20.00);
            assert.equal(consultarPagamento.categoria, 'padrão');
        });

        it('Validar Segundo Pagamento incluído Com Valor Padrão', function(){
            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Mercado Livre';
            const valor = 55.50

            //Act (Quando, ações)
            const pagamento = realizarPagamento(codigoBarras, empresa, valor);
            const consultarPagamento = consultarUltimoPagamento();

            //Assert (Então, Pós-condições)
            assert.equal(consultarPagamento.codigoBarras, '0987-7656-3475');
            assert.equal(consultarPagamento.empresa, 'Mercado Livre');
            assert.equal(consultarPagamento.valor, 55.50);
            assert.equal(consultarPagamento.categoria, 'padrão');
        });

        it('Validar terceiro Pagamento incluído Com Valor Cara', function(){
            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3476';
            const empresa = 'Amazon';
            const valor = 2000.00

            //Act (Quando, ações)
            const pagamento = realizarPagamento(codigoBarras, empresa, valor);
            const consultarPagamento = consultarUltimoPagamento();

            //Assert (Então, Pós-condições)
            assert.equal(consultarPagamento.codigoBarras, '0987-7656-3476');
            assert.equal(consultarPagamento.empresa, 'Amazon');
            assert.equal(consultarPagamento.valor, 2000.00);
            assert.equal(consultarPagamento.categoria, 'cara');
        });

        it('Validar Pagamento Com Valor Igual a 100.00', function(){
            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3478';
            const empresa = 'Americanas';
            const valor = 100.00

            //Act (Quando, ações)
            const pagamento = realizarPagamento(codigoBarras, empresa, valor);
            const consultarPagamento = consultarUltimoPagamento();

            //Assert (Então, Pós-condições)
            assert.equal(consultarPagamento.codigoBarras, '0987-7656-3478');
            assert.equal(consultarPagamento.empresa, 'Americanas');
            assert.equal(consultarPagamento.valor, 100.00);
            assert.equal(consultarPagamento.categoria, 'padrão');
        });

        it('Validar Pagamento Com Valor Igual a 101.00', function(){
            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3479';
            const empresa = 'Americanas';
            const valor = 101.00

            //Act (Quando, ações)
            const pagamento = realizarPagamento(codigoBarras, empresa, valor);
            const consultarPagamento = consultarUltimoPagamento();

            //Assert (Então, Pós-condições)
            assert.equal(consultarPagamento.codigoBarras, '0987-7656-3479');
            assert.equal(consultarPagamento.empresa, 'Americanas');
            assert.equal(consultarPagamento.valor, 101.00);
            assert.equal(consultarPagamento.categoria, 'cara');
        });

        it('Validar Pagamento Com Codigo De Barras Inexistente', function(){
            //arrange (Dado que, pré-condições)
            const codigoBarras = '0987-7656-3485';
            const empresa = 'Americanas';
            const valor = 101.00
            
            //Assert (Então, Pós-condições)
            assert.throws(
                () => realizarPagamento(codigoBarras, empresa, valor),
                {
                    message: 'Código de barras não encontrado'
                }
            );
});
});