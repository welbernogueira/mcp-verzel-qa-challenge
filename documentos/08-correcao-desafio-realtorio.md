# Análise e correção do feedback do avaliador

## Conclusão

O feedback técnico procede. Na versão entregue, havia evidências que mostravam respostas diferentes do resultado registrado, e os casos de fronteira de frete não correspondiam a combinações montáveis do catálogo. O ponto mais importante ficou explícito na captura do CT-25: duas Mochilas P005 totalizavam R$ 200,00, mas a resposta cobrava R$ 19,90; mesmo assim, o caso estava descrito como R$ 200,01 e aprovado.

A limitação não foi a ausência de uma captura do defeito. Foi a leitura e a classificação dessa evidência: o resultado observado deveria ter sido registrado como falha, relacionado ao CA06 e aberto como bug.

## Conferência da entrega original

As capturas citadas nesta seção foram preservadas com nomes históricos em [evidencias/historico](../evidencias/historico/).

| Ponto avaliado | Evidência da versão original | Conclusão |
|---|---|---|
| CT-06 sem comprovação do limite exato | [Captura original image-23](../evidencias/historico/LEGADO-CT-06-image-23-subtotal-139-90.png) mostra R$ 139,90, frete R$ 19,90 e R$ 60,10 faltantes. [image-29](../evidencias/historico/LEGADO-CT-06-image-29-subtotal-279-80.png) mostra R$ 279,80 e frete grátis. | Correto: nenhuma das capturas comprovava subtotal de R$ 200,00. |
| CT-24 registrava um subtotal diferente da evidência | [Captura original image-66](../evidencias/historico/LEGADO-CT-24-image-66-subtotal-189-90.png) envia P003 por R$ 189,90 e mostra frete de R$ 19,90 e faltante de R$ 10,10. | Correto: a imagem não demonstrava R$ 199,99 nem faltante de R$ 0,01. |
| CT-25 não identificava o defeito no limite | A captura original image-67 foi movida para [a evidência da resposta da API](BUG-CA06-API-001-01-subtotal-200-frete-cobrado-api.png): duas P005, subtotal R$ 200,00, frete R$ 19,90, freteGratis=false e total R$ 219,90. O console dessa captura ainda identifica a exploração como CT-25. A resposta atual, capturada e identificada como CT-06, está em [BUG-CA06-API-001-request-response.json](../evidencias/BUG-CA06-API-001-request-response.json). | Crítico e correto: a evidência mostrava a regra violada, mas a versão original registrava outro subtotal e aprovação. |
| CT-26 tinha valores incompatíveis com a captura | A [captura original image-68](CT-26-frete-apos-desconto-api-01.png) contém P003, P008 e P001: subtotal R$ 299,80, desconto R$ 29,98 e total R$ 269,82. | Correto: os valores registrados no documento não correspondiam ao payload e à resposta. |
| CT-30 não comprovava igualdade entre interface e API | A [captura original image-72](../evidencias/historico/LEGADO-CT-30-image-72-api-sem-interface.png) mostra apenas a resposta da API (subtotal R$ 109,80, desconto R$ 10,98, frete R$ 19,90 e total R$ 118,72); não mostra o resumo visual para comparação. | Correto: igualdade não podia ser concluída a partir daquela captura isolada. |
| Nomes genéricos e Markdown inconsistente | A entrega tinha 76 arquivos image*.png, 60 nomes citados na execução manual e 16 sem vínculo nesse documento, além de marcações de imagem quebradas. [Uma captura sem vínculo](../evidencias/historico/LEGADO-sem-vinculo-image-55-captura-cortada.png) estava cortada/ovalada. | Correto: era difícil ligar várias capturas a um cenário e havia evidências sem relação clara com a matriz. |

## Verificação dos valores possíveis

O catálogo e o limite de cinco unidades permitem cobrir a regra com carrinhos reais:

| Fronteira | Produtos | Subtotal | Resultado esperado pela regra |
|---|---|---:|---|
| Maior valor montável abaixo de R$ 200,00 | P005 + P008 + P004 | R$ 199,90 | Frete R$ 19,90; faltam R$ 0,10 |
| Limite exato | 2 × P005 | R$ 200,00 | Frete grátis |
| Menor valor montável acima do limite | P001 + 5 × P006 | R$ 209,40 | Frete grátis |

R$ 199,99 e R$ 200,01 não podem ser formados com os preços disponíveis e a quantidade máxima documentada. A análise e os CTs foram atualizados com os valores possíveis.

## Correções feitas para o portfólio

1. **CT-06:** agora descreve duas Mochilas P005, resultado esperado e observado, captura atual da interface, resposta da API e captura JSON identificada como CT-06. Está marcado como reprovado e associado ao novo [BUG-CA06-API-001](../bugs/BUG-CA06-API-001-frete-no-limite.md).
2. **CT-24 e CT-25:** substituídos pelos limites realmente montáveis de R$ 199,90 e R$ 209,40, com resultados e capturas correspondentes. A fronteira de R$ 200,00 é testada separadamente no CT-06.
3. **CT-26:** resultado esperado e obtido foram alinhados à cesta P003 + P008 + P001: subtotal R$ 299,80, desconto R$ 29,98, frete grátis e total R$ 269,82.
4. **CT-30:** foi feita uma nova comparação para P005 + P008 + P004 com BEMVINDO10. A captura da interface e o arquivo JSON da resposta da API registram subtotal R$ 199,90, desconto R$ 19,99, frete R$ 19,90, faltante R$ 0,10 e total R$ 199,81.
5. **Evidências:** as capturas vinculadas aos CTs receberam nomes com identificador do cenário e sequência; as figuras do documento manual foram centralizadas, padronizadas e receberam legenda e texto alternativo. As capturas antigas não utilizadas foram preservadas em evidencias/historico/, sem substituir silenciosamente a evidência original.
6. **Bugs:** os três defeitos agora têm registros canônicos com severidade, prioridade, pré-condições, passos reproduzíveis, resultados esperado e observado, impacto e evidências: [frete no limite](../bugs/BUG-CA06-API-001-frete-no-limite.md), [quantidade acima do limite](../bugs/BUG-CA10-API-001-limite-quantidade.md) e [código incorreto para item inválido](../bugs/BUG-API-002-item-invalido-retorna-produto-nao-encontrado.md).
7. **Rastreabilidade:** matriz, documento de API, cenários Gherkin, lista de bugs e README foram atualizados para refletir os resultados e apontar para as evidências atuais.

## Suítes automatizadas

O teste existente de limite de quantidade em backend-test/carrinho/11-quantidade-maxima.spec.ts já usava test.fail para representar o defeito conhecido. A mesma classificação foi incluída em e2e/cupons/10.1.1-api-limite-5-unidades.spec.ts e nos testes dos defeitos de item inválido e frete no limite. O teste de frete da interface recebeu um caso de subtotal exato de R$ 200,00, identificado como falha esperada enquanto BUG-CA06-API-001 persistir.

**A suíte Playwright não foi executada durante esta revisão.** Portanto, as referências a testes automatizados descrevem a cobertura implementada, não uma execução ou resultado atual.

## Sobre o volume de candidaturas e uso de IA

A mensagem sobre aproximadamente 600 candidaturas não permite confirmar se a revisão técnica foi feita por uma pessoa, por IA ou por uma combinação de métodos. Não há evidência suficiente para concluir isso. A análise aqui se apoia nos arquivos, valores, capturas e critérios citados no feedback, que sustentam os pontos técnicos principais.

## Parecer final

A avaliação foi justa quanto às inconsistências de evidência, à fronteira de frete e à classificação do defeito. As correções deixam o material mais rastreável e tecnicamente coerente para o portfólio. O CA06 continua sendo um defeito do produto de teste, não uma correção de implementação: o registro agora mostra a falha observada com clareza.
