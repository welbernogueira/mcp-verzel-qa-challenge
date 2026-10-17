# Cenários de teste da API — Verzel Store

Este documento organiza os contratos de API cobertos pelos cenários manuais, automação e registros de defeito. O resultado observado de cada cenário manual está detalhado em [`04-execucao-testes-manuais-verzel-store.md`](04-execucao-testes-manuais-verzel-store.md); os estados de defeito estão registrados em [`05-bugs-encontrados.md`](05-bugs-encontrados.md).

## Produtos

| ID | Método e endpoint | Validação principal | Cenário relacionado |
|---|---|---|---|
| API-001 | `GET /api/produtos` | HTTP 200; resposta JSON com os produtos do catálogo | CT-28 |
| API-002 | `GET /api/produtos` | IDs, nomes e preços de P001 a P008 conforme os dados de teste | CT-28 |
| API-003 | `GET /api/produtos/P001` | HTTP 200 e dados do produto solicitado | CT-22 |
| API-004 | `GET /api/produtos/INVALIDO` | HTTP 404 e `PRODUTO_NAO_ENCONTRADO` | CT-22 |

## Cálculo do carrinho

| ID | Entrada | Resultado esperado | Cenário relacionado |
|---|---|---|---|
| API-005 | Item válido sem cupom | HTTP 200; subtotal, desconto, frete, faltante e total coerentes | CT-07 / CT-13 |
| API-006 | Itens válidos com `BEMVINDO10` | HTTP 200; desconto de 10% sobre produtos e frete calculado pelo subtotal original | CT-08 / CT-29 |
| API-007 | Propriedade `itens` ausente ou lista vazia | HTTP 422 e `ITENS_OBRIGATORIOS` | CT-14 |
| API-008 | Item sem `produtoId` e sem quantidade | HTTP 422 e `ITEM_INVALIDO` | CT-15.1; defeito `BUG-API-002` |
| API-009 | Produto não cadastrado | HTTP 422 e `PRODUTO_NAO_ENCONTRADO` | CT-16 |
| API-010 | Mesmo produto em mais de uma entrada | HTTP 422 e `ITEM_DUPLICADO` | CT-17 |
| API-011 | Quantidade zero, negativa ou decimal | HTTP 422 e `QUANTIDADE_INVALIDA` | CT-10 |
| API-012 | Quantidade maior que cinco | HTTP 422 e `QUANTIDADE_MAXIMA_EXCEDIDA` | CT-11; defeito `BUG-CA10-API-001` |
| API-013 | Duas unidades de P005, subtotal exato de R$ 200,00 | HTTP 200; frete zero, `freteGratis=true` e total R$ 200,00 | CT-06; defeito `BUG-CA06-API-001` |
| API-014 | P002 × 1 e P004 × 2 com `BEMVINDO10` | HTTP 200; subtotal R$ 239,70, desconto R$ 23,97, frete zero e total R$ 215,73 | CT-29 |

### Exemplo de cálculo sem cupom

```http
POST /api/carrinho/calcular
Content-Type: application/json
```

```json
{
  "itens": [
    { "produtoId": "P005", "quantidade": 1 }
  ]
}
```

Para P005, o subtotal é R$ 100,00, o frete é R$ 19,90 e o total esperado é R$ 119,90.

## Pedidos e validação HTTP

| ID | Método e endpoint | Validação principal | Cenário relacionado |
|---|---|---|---|
| API-015 | `POST /api/pedidos` | Pedido válido retorna HTTP 201, identificador no formato `VZ-000000` e resumo do cálculo | CT-18 |
| API-016 | `POST /api/pedidos` com cupom inválido/expirado | HTTP 422 com `CUPOM_INVALIDO` ou `CUPOM_EXPIRADO` | CT-19 |
| API-017 | `POST /api/pedidos` com dados de cliente inválidos | HTTP 422 e `DADOS_INVALIDOS` com os campos correspondentes | CT-20 |
| API-018 | JSON malformado, rota inexistente e método incompatível | HTTP 400 `JSON_INVALIDO`, HTTP 404 `ROTA_NAO_ENCONTRADA` e HTTP 405 `METODO_NAO_PERMITIDO` | CT-21 |

## Contrato monetário

- O desconto `BEMVINDO10` é calculado sobre o subtotal dos produtos.
- O frete é grátis quando o subtotal original é maior ou igual a R$ 200,00; abaixo desse valor, custa R$ 19,90.
- O valor faltante para frete grátis não deve ser negativo.
- O total segue `subtotal - desconto + frete`.
- Valores monetários devem ser apresentados com duas casas decimais.

Os valores de fronteira possíveis com o catálogo estão documentados em [`00-analise-do-desafio.md`](00-analise-do-desafio.md). O defeito no limite exato e os demais defeitos de API têm registros com passos de reprodução em [`05-bugs-encontrados.md`](05-bugs-encontrados.md).
