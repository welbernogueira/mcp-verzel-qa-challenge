# 02 — Cenários de Teste

Esta matriz reúne os 31 cenários definidos para validar a Verzel Store. Os passos, resultados observados e evidências de cada cenário estão no documento de execução manual.

| # | Cenário | Prioridade | Tipo | Veredito |
|---:|---|---|---|---|
| 1 | Aplicar cupom válido BEMVINDO10 | CRÍTICA | FUNCIONAL | APROVADO |
| 2 | Aceitar cupom com maiúsculas/minúsculas e espaços nas extremidades | ALTA | FUNCIONAL | APROVADO |
| 3 | Rejeitar cupom inexistente | ALTA | FUNCIONAL | APROVADO |
| 4 | Rejeitar cupom expirado | ALTA | FUNCIONAL | APROVADO |
| 5 | Impedir aplicação simultânea de mais de um cupom | MÉDIA | FUNCIONAL | APROVADO |
| 6 | Frete grátis no limite de R$ 200,00 | CRÍTICA | FUNCIONAL | REPROVADO — BUG-CA06-API-001 |
| 7 | Frete de R$ 19,90 abaixo de R$ 200,00 | CRÍTICA | FUNCIONAL | APROVADO |
| 8 | Frete considera subtotal antes do desconto | CRÍTICA | FUNCIONAL | APROVADO |
| 9 | Desconto não incide sobre o frete | ALTA | FUNCIONAL | APROVADO |
| 10 | Rejeitar quantidade inválida | ALTA | FUNCIONAL | APROVADO |
| 11 | Rejeitar quantidade superior a 5 | ALTA | FUNCIONAL | REPROVADO — BUG-CA10-API-001 |
| 12 | Arredondar valores monetários para 2 casas | MÉDIA | FUNCIONAL | APROVADO |
| 13 | Validar fórmula do total | CRÍTICA | FUNCIONAL | APROVADO |
| 14 | Rejeitar itens ausentes ou vazios | ALTA | FUNCIONAL | APROVADO |
| 15 | Rejeitar item inválido | ALTA | FUNCIONAL | APROVADO |
| 16 | Rejeitar produto inexistente | ALTA | FUNCIONAL | APROVADO |
| 17 | Rejeitar produto duplicado | ALTA | FUNCIONAL | APROVADO |
| 18 | Criar pedido com cupom válido | CRÍTICA | FUNCIONAL | APROVADO |
| 19 | Rejeitar pedido com cupom inválido ou expirado | ALTA | FUNCIONAL | APROVADO |
| 20 | Validar dados do cliente | ALTA | FUNCIONAL | APROVADO |
| 21 | Validar JSON inválido, rota inexistente e método não permitido | MÉDIA | FUNCIONAL | APROVADO |
| 22 | Consultar produto existente e inexistente | MÉDIA | FUNCIONAL | APROVADO |
| 23 | Validar isolamento do carrinho por aba/janela | BAIXA | FUNCIONAL | APROVADO |
| 24 | Validar frete imediatamente abaixo do limite de R$200,00 | MÉDIA | FUNCIONAL | APROVADO |
| 25 | Validar frete imediatamente acima do limite de R$200,00 | MÉDIA | FUNCIONAL | APROVADO |
| 26 | Validar frete grátis após aplicação de desconto quando subtotal original é elegível | ALTA | FUNCIONAL | APROVADO |
| 27 | Validar limite máximo de 5 unidades por produto na interface | ALTA | FUNCIONAL | APROVADO |
| 28 | Consultar lista de produtos pela API | MÉDIA | FUNCIONAL | APROVADO |
| 29 | Validar cálculo oficial de cupom pela API | ALTA | FUNCIONAL | APROVADO |
| 30 | Comparar resultado apresentado na interface com o cálculo da API | ALTA | INTEGRAÇÃO | APROVADO |
| 31 | Validar CEP com e sem hífen na criação do pedido | MÉDIA | FUNCIONAL | APROVADO |

## Observações

- O detalhamento dos passos, resultados observados e evidências está em [`04-execucao-testes-manuais-verzel-store.md`](04-execucao-testes-manuais-verzel-store.md).
- Os status indicam o resultado da execução manual registrada, não o resultado da suíte automatizada.
- O CT-15.1 é um cenário complementar para documentar `BUG-API-002`; ele não altera a numeração dos 31 cenários desta matriz.
- Sempre que um cenário falhar, registrar o comportamento observado e manter as evidências correspondentes.

## Evidências exploratórias MCP — 11/10/2026

Esta tabela registra somente correspondências observadas nas três sessões exploratórias com Playwright MCP. Os recortes não substituem a execução integral dos cenários nem a suíte automatizada.

| CT | Correspondência observada | Status do recorte MCP | Evidência |
|---|---|---|---|
| CT-01 | `BEMVINDO10` aplicado a subtotal de R$ 59,90; desconto R$ 5,99 e mensagem de confirmação. | Conforme no recorte; histórico preservado. | [`page-2026-10-11T15-44-41-930Z.yml`](../.playwright-mcp/page-2026-10-11T15-44-41-930Z.yml) |
| CT-03 | Código inexistente gerou “Cupom inválido.”, desconto zero e total sem desconto. | Conforme no recorte; usou-se `CUPOMINVALIDOQA`. | [`page-2026-10-11T15-44-48-870Z.yml`](../.playwright-mcp/page-2026-10-11T15-44-48-870Z.yml) |
| CT-04 | `VERAO2026` gerou “Cupom expirado.”, desconto zero e total sem desconto. | Conforme no recorte; histórico preservado. | [`page-2026-10-11T15-44-52-402Z.yml`](../.playwright-mcp/page-2026-10-11T15-44-52-402Z.yml) |
| CT-07 | Uma Camiseta Essencial (subtotal R$ 59,90) mostrou frete R$ 19,90 e faltante R$ 140,10. | Conforme no recorte abaixo de R$ 200; não cobre fronteiras. | [`page-2026-10-11T15-40-59-928Z.yml`](../.playwright-mcp/page-2026-10-11T15-40-59-928Z.yml) |
| CT-13 | Para subtotal R$ 59,90, desconto zero e frete R$ 19,90, total observado foi R$ 79,80. | Fórmula compatível nesta cesta; não substitui outros exemplos. | [`page-2026-10-11T15-40-59-928Z.yml`](../.playwright-mcp/page-2026-10-11T15-40-59-928Z.yml) |
| CT-27 | Quantidade 5 exibida; aumentar desabilitado e mensagem do limite presente. | Conforme no recorte; ver teste E2E correspondente. | [`page-2026-10-11T15-41-10-044Z.yml`](../.playwright-mcp/page-2026-10-11T15-41-10-044Z.yml) |
| CT-28 | `GET /api/produtos` respondeu 200 com P001 a P008; dados visíveis coincidiram com a tabela de teste. | Conforme no recorte; não é nova execução automatizada. | [`page-2026-10-11T15-33-09-021Z.yml`](../.playwright-mcp/page-2026-10-11T15-33-09-021Z.yml) |
| CT-30 | Valores da interface e da resposta API coincidiram para uma camiseta com `BEMVINDO10`. | Correspondência em uma cesta; escopo amplo permanece pendente. | [`page-2026-10-11T15-44-41-930Z.yml`](../.playwright-mcp/page-2026-10-11T15-44-41-930Z.yml) |

Catálogo pela interface, detalhes de produto, quantidade mínima pela interface, remoção do último produto e estado vazio não recebem veredito nesta matriz: não foi localizado critério de aceitação suficiente para aprová-los. Consulte o [registro exploratório](04-execucao-testes-manuais-verzel-store.md).
