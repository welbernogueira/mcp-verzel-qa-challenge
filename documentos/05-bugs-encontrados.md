# 05 — Bugs encontrados

Este documento consolida os defeitos observados durante a validação manual. Cada registro canônico em `bugs/` contém pré-condições, passos para reprodução, resultados esperado e observado, impacto e evidências.

## Resumo

| ID | Cenário | Prioridade | Severidade | Status | Registro |
|---|---|---:|---:|---|---|
| BUG-CA06-API-001 | CA06 / CT-06 — Frete no subtotal exato de R$ 200,00 | Alta | Alta | Aberto | [`BUG-CA06-API-001-frete-no-limite.md`](../bugs/BUG-CA06-API-001-frete-no-limite.md) |
| BUG-CA10-API-001 | CA10 / CT-11 — Quantidade acima de cinco unidades na API | Alta | Alta | Aberto | [`BUG-CA10-API-001-limite-quantidade.md`](../bugs/BUG-CA10-API-001-limite-quantidade.md) |
| BUG-API-002 | CT-15.1 — Código incorreto para item inválido | Média | Média | Aberto | [`BUG-API-002-item-invalido-retorna-produto-nao-encontrado.md`](../bugs/BUG-API-002-item-invalido-retorna-produto-nao-encontrado.md) |

## BUG-CA06-API-001 — Frete cobrado no limite exato

Com duas unidades de P005, envie `POST /api/carrinho/calcular` com `{"itens":[{"produtoId":"P005","quantidade":2}]}`. O subtotal é R$ 200,00. A regra exige frete zero e total de R$ 200,00; a resposta observada cobra R$ 19,90 e retorna total de R$ 219,90. Veja os [passos completos e evidências](../bugs/BUG-CA06-API-001-frete-no-limite.md).

## BUG-CA10-API-001 — Limite de quantidade não validado pela API

Envie `POST /api/carrinho/calcular` com `{"itens":[{"produtoId":"P001","quantidade":6}]}`. A API responde HTTP 200 e calcula o carrinho, quando deveria retornar HTTP 422 com `QUANTIDADE_MAXIMA_EXCEDIDA`. Veja os [passos completos e evidências](../bugs/BUG-CA10-API-001-limite-quantidade.md).

## BUG-API-002 — Código de erro incorreto para item inválido

Envie `POST /api/carrinho/calcular` com `{"itens":[{}]}`. A API responde HTTP 422 com `PRODUTO_NAO_ENCONTRADO`, quando o contrato prevê `ITEM_INVALIDO`. Veja os [passos completos e evidências](../bugs/BUG-API-002-item-invalido-retorna-produto-nao-encontrado.md).

## Critério de registro

Os resultados foram classificados como defeitos quando divergem de um critério de aceite, regra de negócio ou contrato documentado. As capturas históricas que não comprovam os cenários corrigidos foram preservadas, identificadas e separadas das evidências atuais em [`evidencias/historico/`](../evidencias/historico/).
