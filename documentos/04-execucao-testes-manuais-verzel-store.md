# Execução dos Testes Manuais — Verzel Store

> Documento de execução dos cenários manuais definidos na matriz de testes.
>
> **Orientação:** executar os cenários na ordem apresentada, registrar o resultado obtido, definir o veredito e inserir as evidências diretamente em cada cenário.

## Identificação

- **Projeto:** Verzel Store
- **Card:** VZS-142
- **Versão:** 2.3.0
- **Ambiente:** QA
- **Status inicial:** PENDENTE

## Convenção de execução

- **PASSOU:** resultado obtido atende integralmente ao resultado esperado.
- **NÃO PASSOU:** resultado obtido diverge do resultado esperado ou apresenta comportamento incorreto.
- **BLOQUEADO:** cenário não pôde ser executado por indisponibilidade do ambiente, dependência ou impedimento externo.
- Registrar no campo **Resultado obtido** o comportamento real observado.
- Inserir abaixo de cada cenário todos os prints necessários para comprovar a execução.
- Caso seja identificado um defeito, registrar o cenário como **FALHOU** e detalhar o bug no documento de bugs.

---

## CT-01 — Aplicar cupom válido BEMVINDO10

**Pré-requisito:** Carrinho com produto(s) válido(s) e cupom BEMVINDO10 disponível.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar produto(s). 2. Aplicar BEMVINDO10. 3. Confirmar o cálculo.

**Resultado esperado:**

Cupom aplicado com 10% de desconto sobre o subtotal.

**Resultado obtido:**

Cupom aplicado com 10% de desconto sobre o subtotal.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA01.

**Evidências:**


> **Evidências:**
>
> _[![alt text](image-1.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)


]_
---

## CT-02 — Aceitar cupom com maiúsculas/minúsculas e espaços nas extremidades

**Pré-requisito:** Carrinho válido e BEMVINDO10 disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Aplicar variações de caixa e espaços, como ` bemvindo10 `. 2. Calcular.

**Resultado esperado:**

Código aceito independentemente de caixa; espaços no início/fim ignorados.

**Resultado obtido:**

Código aceito independentemente de caixa; espaços no início/fim ignorados.


**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA02.

**Evidências:**


> **Evidências:**
>
> _[![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-18.png)

![alt text](image-16.png)




]_

---

## CT-03 — Rejeitar cupom inexistente

**Pré-requisito:** Carrinho com itens válidos.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Informar cupom inexistente. 2. Calcular carrinho.

**Resultado esperado:**

Resposta 200, sem desconto, com mensagem `Cupom inválido.`.

**Resultado obtido:**

Resposta 200, sem desconto, com mensagem `Cupom inválido.`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA03.

**Evidências:**

> _[![alt text](image-19.png)]_

---

## CT-04 — Rejeitar cupom expirado

**Pré-requisito:** Carrinho válido e VERAO2026 disponível como expirado.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Informar VERAO2026. 2. Calcular carrinho.

**Resultado esperado:**

Resposta 200, sem desconto, com mensagem `Cupom expirado.`.

**Resultado obtido:**

Resposta 200, sem desconto, com mensagem `Cupom expirado.`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA04.

**Evidências:**


> _[![alt text](image-20.png)]_

---

## CT-05 — Impedir aplicação simultânea de mais de um cupom

**Pré-requisito:** Carrinho válido e dois códigos disponíveis.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Aplicar um cupom. 2. Tentar aplicar outro sem remover o primeiro.

**Resultado esperado:**

Somente um cupom permanece aplicado; para trocar, remover o atual antes de aplicar outro.

**Resultado obtido:**

Somente um cupom permanece aplicado; para trocar, remover o atual antes de aplicar outro.


**Veredito:**  APROVADO/PASSOU

**Descrição:**

Validar CA05.

**Evidências:**

>
> _[
    ![alt text](image-21.png)
    
![alt text](image-22.png)

]_



---

## CT-06 — Frete grátis no limite de R$ 200,00

**Pré-requisito:** Carrinho com subtotal exatamente R$ 200,00.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. Montar subtotal de R$ 200,00. 2. Calcular.

**Resultado esperado:**

Frete R$ 0,00 e valor faltante R$ 0,00.

**Resultado obtido:**

Frete R$ 0,00 e valor faltante R$ 0,00.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA06.

**Evidências:**

>
> _[
    ![alt text](image-23.png)

!![alt text](image-29.png)


]_


---

## CT-07 — Frete de R$ 19,90 abaixo de R$ 200,00

**Pré-requisito:** Carrinho com subtotal inferior a R$ 200,00.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. Montar subtotal abaixo de R$ 200,00. 2. Calcular.

**Resultado esperado:**

Frete R$ 19,90 e valor faltante = R$ 200,00 - subtotal, nunca negativo.

**Resultado obtido:**

Frete R$ 19,90 e valor faltante = R$ 200,00 - subtotal, nunca negativo.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA07.

**Evidências:**

>
> _[

![alt text](image-23.png)
]_

---

## CT-08 — Frete considera subtotal antes do desconto

**Pré-requisito:** Subtotal superior ou igual a R$ 200,00 e cupom válido.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. Montar carrinho. 2. Aplicar BEMVINDO10. 3. Calcular.

**Resultado esperado:**

Elegibilidade do frete considera o subtotal antes do desconto; subtotal >= R$ 200,00 gera frete R$ 0,00.

**Resultado obtido:**

Elegibilidade do frete considera o subtotal antes do desconto; subtotal >= R$ 200,00 gera frete R$ 0,00.


**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA08.

**Evidências:**

>
> _[![alt text](image-31.png)

![alt text](image-32.png)]_


---

## CT-09 — Desconto não incide sobre o frete

**Pré-requisito:** Subtotal inferior a R$ 200,00 e cupom válido.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Montar carrinho. 2. Aplicar BEMVINDO10. 3. Calcular.

**Resultado esperado:**

Desconto de 10% somente sobre produtos; frete de R$ 19,90 não sofre desconto.

**Resultado obtido:**

Desconto de 10% somente sobre produtos; frete de R$ 19,90 não sofre desconto.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA09.

**Evidências:**

>
> _[![alt text](image-33.png)]_


---

## CT-10 — Rejeitar quantidade inválida

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar quantidade 0. 2. Repetir negativa. 3. Repetir decimal.

**Resultado esperado:**

API rejeita valores que não sejam inteiros >= 1 com `QUANTIDADE_INVALIDA`.

**Resultado obtido:**

API rejeita valores que não sejam inteiros >= 1 com `QUANTIDADE_INVALIDA`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar regra de quantidade.

**Evidências:**

>
> _[![alt text](image-37.png)]_


---

## CT-11 — Rejeitar quantidade superior a 5 - Bug na API - Validação Manual

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar quantidade 6 ou maior. 2. Analisar response.

**Resultado esperado:**

Status 422 com `QUANTIDADE_MAXIMA_EXCEDIDA`.

**Resultado obtido:**

Status 200.

**Veredito:** REPROVADO/NÃO PASSOU

**Descrição:**

Validar CA10.

**Evidências:**


>
> _[![alt text](image-34.png)

![alt text](image-35.png)

![alt text](image-36.png)]_

-> Encontramos um bug, deveria retornar outra exception, mas retornou 200 OK. Esse erro já foi reportado e será indicado com mais detalhes onde ser consultado no readme.

---

## CT-12 — Arredondar valores monetários para 2 casas

**Pré-requisito:** Carrinho que gere valores decimais.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Calcular carrinho. 2. Conferir valores retornados.

**Resultado esperado:**

Valores monetários arredondados para 2 casas.

**Resultado obtido:**

Valores monetários arredondados para 2 casas.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA11.

**Evidências:**


>
> _[![alt text](image-38.png)

![alt text](image-39.png)

![alt text](image-40.png)

]_

---

## CT-13 — Validar fórmula do total

**Pré-requisito:** Carrinho válido com subtotal, desconto e frete conhecidos.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. Calcular. 2. Aplicar `total = subtotal - desconto + frete`. 3. Comparar.

**Resultado esperado:**

Total corresponde à fórmula documentada.

**Resultado obtido:**

Total corresponde à fórmula documentada.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar consistência do cálculo.

**Evidências:**


>
> _[C![alt text](image-41.png)

![alt text](image-42.png)

]_


---

## CT-14 — Rejeitar itens ausentes ou vazios

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. POST /api/carrinho/calcular sem `itens`. 2. Repetir com lista vazia.

**Resultado esperado:**

Status 422 com `ITENS_OBRIGATORIOS`.

**Resultado obtido:**

Status 422 com `ITENS_OBRIGATORIOS`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar contrato da API.

**Evidências:**

>
> _[![alt text](image-45.png)

![alt text](image-46.png)]_



---

## CT-15 — Rejeitar item inválido - Cenário Feliz

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar item sem produtoId e/ou quantidade válida. 2. Analisar.

**Resultado esperado:**

Status 422 com `ITEM_INVALIDO`.

**Resultado obtido:**

Status 422 com `ITEM_INVALIDO`.


**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar estrutura mínima do item.

**Evidências:**

>
> _[![alt text](image-48.png)]_

---

## CT-15.1 — item inválido - Bug na API - Validação Manual

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar item sem produtoId e/ou quantidade válida. 2. Analisar.

**Resultado esperado:**

Esperado: HTTP 422, código ITEM_INVALIDO.

**Resultado obtido:**

Defeito identificado: HTTP 422, mas o código retornado é PRODUTO_NAO_ENCONTRADO.


**Veredito:** REPROVADO/NÃO PASSOU

**Descrição:**

Validar estrutura mínima do item.

**Evidências:**

>
> _[![alt text](image-75.png)]_


---

## CT-16 — Rejeitar produto inexistente

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar item com produtoId inexistente. 2. Analisar.

**Resultado esperado:**

Status 422 com `PRODUTO_NAO_ENCONTRADO`.

**Resultado obtido:**

Status 422 com `PRODUTO_NAO_ENCONTRADO`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar referência aos produtos.

**Evidências:**


>
> _[![alt text](image-47.png)]_

---

## CT-17 — Rejeitar produto duplicado

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar o mesmo produto mais de uma vez em `itens`. 2. Analisar.

**Resultado esperado:**

Status 422 com `ITEM_DUPLICADO`.

**Resultado obtido:**

Status 422 com `ITEM_DUPLICADO`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar regra de duplicidade.

**Evidências:**


>
> _[![alt text](image-49.png)]_



---

## CT-18 — Criar pedido com cupom válido

**Pré-requisito:** Carrinho válido e BEMVINDO10.

**Prioridade:** CRÍTICA

**Tipo:** FUNCIONAL

**Passos:**

1. POST /api/pedidos com cliente, itens e cupom. 2. Analisar.

**Resultado esperado:**

Status 201, número no formato VZ-000000 e resumo com valores do cálculo.

**Resultado obtido:**

Status 201, número no formato VZ-000000 e resumo com valores do cálculo.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar fluxo de confirmação.

**Evidências:**


>
> _[![alt text](image-50.png)]_


---

## CT-19 — Rejeitar pedido com cupom inválido ou expirado

**Pré-requisito:** Carrinho válido.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. POST com cupom inexistente. 2. Repetir com expirado.

**Resultado esperado:**

Cupom inexistente: 422 `CUPOM_INVALIDO`; expirado: 422 `CUPOM_EXPIRADO`.

**Resultado obtido:**

Cupom inexistente: 422 `CUPOM_INVALIDO`; expirado: 422 `CUPOM_EXPIRADO`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar erros do endpoint de pedidos.

**Evidências:**

>
> _[![alt text](image-51.png)

![alt text](image-52.png)

]_


---

## CT-20 — Validar dados do cliente

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar nome sem sobrenome. 2. E-mail inválido. 3. CEP inválido.

**Resultado esperado:**

Dados inválidos são rejeitados com 422 `DADOS_INVALIDOS` e detalhes em `campos`.

**Resultado obtido:**

Dados inválidos são rejeitados com 422 `DADOS_INVALIDOS` e detalhes em `campos`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar regras preexistentes.

**Evidências:**

>
> _[

![alt text](image-54.png)

]_


---

## CT-21 — Validar JSON inválido, rota inexistente e método não permitido

**Pré-requisito:** API disponível.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Enviar JSON inválido. 2. Usar rota inexistente. 3. Usar método não permitido.

**Resultado esperado:**

400 `JSON_INVALIDO`; 404 `ROTA_NAO_ENCONTRADA`; 405 `METODO_NAO_PERMITIDO`.

**Resultado obtido:**

400 `JSON_INVALIDO`; 404 `ROTA_NAO_ENCONTRADA`; 405 `METODO_NAO_PERMITIDO`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar padrão de erros.

**Evidências:**

>
> _[![alt text](image-58.png)

![alt text](image-56.png)

![alt text](image-57.png)

]_


---

## CT-22 — Consultar produto existente e inexistente

**Pré-requisito:** API disponível.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. GET /api/produtos/P001. 2. GET produto inexistente.

**Resultado esperado:**

Produto existente retorna 200; inexistente retorna 404 `PRODUTO_NAO_ENCONTRADO`.

**Resultado obtido:**

Produto existente retorna 200; inexistente retorna 404 `PRODUTO_NAO_ENCONTRADO`.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar endpoint de produto.

**Evidências:**


>
> _[![alt text](image-59.png)

![alt text](image-60.png)]_



---

## CT-23 — Validar isolamento do carrinho por aba/janela

**Pré-requisito:** Acesso à loja em navegador.

**Prioridade:** BAIXA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar itens. 2. Abrir outra aba, outro navegador ou janela anônima. 3. Conferir carrinho.

**Resultado esperado:**

Carrinho é compartilhado somente na aba do navegador; os demais contextos iniciam vazios. Ou seja, os itens adicionados em uma aba não se reprlicam em outra. 

**Resultado obtido:**

Carrinho é compartilhado somente na aba do navegador; os demais contextos iniciam vazios. Ou seja, os itens adicionados em uma aba não se reprlicam em outra. 

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar comportamento explicitamente documentado.

**Evidências:**

>
> _[ ![alt text](image-62.png)

   ![alt text](image-63.png) 

![alt text](image-64.png)

![alt text](image-65.png)

    
]_


---

## CT-24 — Validar frete imediatamente abaixo do limite de R$200,00

**Pré-requisito:** Carrinho com subtotal de R$199,99.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar produtos até atingir subtotal de R$199,99.
2. Acessar o cálculo do carrinho.
3. Verificar frete e valor faltante para frete grátis.

**Resultado esperado:**

Frete de R$19,90; freteGratis=false; valorFaltanteFreteGratis=R$0,01.

**Resultado obtido:**

Frete de R$19,90; freteGratis=false; valorFaltanteFreteGratis=R$0,01.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar limite inferior da regra CA06/CA07.

**Evidências:**

>
> _[

![alt text](image-66.png)

]_


---

## CT-25 — Validar frete imediatamente acima do limite de R$200,00

**Pré-requisito:** Carrinho com subtotal de R$200,01.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar produtos até atingir subtotal de R$200,01.
2. Acessar o cálculo do carrinho.
3. Verificar frete e valor faltante para frete grátis.

**Resultado esperado:**

Frete R$0,00; freteGratis=true; valorFaltanteFreteGratis=R$0,00.

**Resultado obtido:**

Frete R$0,00; freteGratis=true; valorFaltanteFreteGratis=R$0,00.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar limite superior da regra CA06.

**Evidências:**

> _[
    
![alt text](image-67.png)

]_


---

## CT-26 — Validar frete grátis após aplicação de desconto quando subtotal original é elegível

**Pré-requisito:** Carrinho com subtotal de R$210,00 e cupom BEMVINDO10 válido.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar produtos totalizando R$210,00.
2. Aplicar o cupom BEMVINDO10.
3. Calcular o carrinho.
4. Conferir subtotal, desconto, frete e total.

**Resultado esperado:**

Subtotal R$210,00; desconto R$21,00; frete R$0,00; freteGratis=true; total R$189,00. A elegibilidade do frete considera o subtotal antes do desconto.

**Resultado obtido:**

200 OK. Subtotal R$210,00; desconto R$21,00; frete R$0,00; freteGratis=true; total R$189,00. A elegibilidade do frete considera o subtotal antes do desconto.


**Veredito:** APROVADO/PASSOU

**Descrição:**

Cenário crítico para CA08.

**Evidências:**

>
> _[![alt text](image-68.png)]_


---

## CT-27 — Validar limite máximo de 5 unidades por produto na interface

**Pré-requisito:** Produto disponível no catálogo e carrinho vazio.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Adicionar 5 unidades do mesmo produto.
2. Tentar adicionar uma 6ª unidade pela interface.
3. Verificar o comportamento do carrinho.

**Resultado esperado:**

A interface não deve permitir que o pedido/carrinho contenha mais de 5 unidades do mesmo produto; registrar eventual mensagem de validação exibida.

**Resultado obtido:**

A interface não deve permitir que o pedido/carrinho contenha mais de 5 unidades do mesmo produto; registrar eventual mensagem de validação exibida.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Complementa a validação da CA10 no nível da interface.

**Evidências:**

>
> _[![alt text](image-69.png)

    ]_


---

## CT-28 — Consultar lista de produtos pela API

**Pré-requisito:** API disponível.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Executar GET /api/produtos.
2. Verificar status HTTP.
3. Validar estrutura da resposta e produtos retornados.

**Resultado esperado:**

HTTP 200; resposta em JSON contendo os produtos P001 a P008 conforme documentação.

**Resultado obtido:**

HTTP 200; resposta em JSON contendo os produtos P001 a P008 conforme documentação.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Complementa o cenário de consulta de produto individual.

**Evidências:**

>
> _[![alt text](image-70.png)]_


---

## CT-29 — Validar cálculo oficial de cupom pela API

**Pré-requisito:** API disponível.

**Prioridade:** ALTA

**Tipo:** FUNCIONAL

**Passos:**

1. Executar POST /api/carrinho/calcular com P002 quantidade 1, P004 quantidade 2 e cupom BEMVINDO10.
2. Validar a resposta.

**Resultado esperado:**

HTTP 200; subtotal R$239,70; desconto R$23,97; frete R$0,00; freteGratis=true; valorFaltanteFreteGratis=R$0,00; total R$215,73; cupom.aplicado=true; mensagem de cupom aplicado com 10% de desconto.

**Resultado obtido:**

HTTP 200; subtotal R$239,70; desconto R$23,97; frete R$0,00; freteGratis=true; valorFaltanteFreteGratis=R$0,00; total R$215,73; cupom.aplicado=true; mensagem de cupom aplicado com 10% de desconto.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Reproduzir o exemplo oficial da documentação.

**Evidências:**

>
> _[![alt text](image-71.png)]_


---

## CT-30 — Comparar resultado apresentado na interface com o cálculo da API

**Pré-requisito:** API e interface disponíveis; mesmo carrinho utilizado nos dois contextos.

**Prioridade:** ALTA

**Tipo:** INTEGRAÇÃO

**Passos:**

1. Montar um carrinho na interface.
2. Registrar subtotal, desconto, frete, frete grátis, valor faltante e total.
3. Reproduzir os mesmos itens e cupom na API.
4. Comparar os resultados.

**Resultado esperado:**

Os valores apresentados na interface devem ser iguais aos valores retornados pela API para o mesmo conjunto de itens e cupom.

**Resultado obtido:**

Os valores apresentados na interface foram ser iguais aos valores retornados pela API para o mesmo conjunto de itens e cupom.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Valida a integração entre interface e API, considerando que os cálculos são realizados pela API.

**Evidências:**

>
> _[![alt text](image-72.png)]_


---

## CT-31 — Validar CEP com e sem hífen na criação do pedido

**Pré-requisito:** Dados do cliente válidos e carrinho com item válido.

**Prioridade:** MÉDIA

**Tipo:** FUNCIONAL

**Passos:**

1. Criar pedido informando CEP com hífen, no formato 01310-100.
2. Repetir a criação informando CEP sem hífen, no formato 01310100.
3. Comparar os resultados.

**Resultado esperado:**

As duas formas de CEP, com e sem hífen, devem ser aceitas conforme regra documentada de CEP com 8 dígitos.

**Resultado obtido:**

As duas formas de CEP, com e sem hífen, devem ser aceitas conforme regra documentada de CEP com 8 dígitos.

**Veredito:** APROVADO/PASSOU

**Descrição:**

Validar CA referente ao formato do CEP.

**Evidências:**


>
> _[![alt text](image-73.png)i

![alt text](image-74.png)

]_

---

## Registro complementar — Exploração assistida com Playwright MCP (11/10/2026)

> Este registro complementa as execuções manuais já documentadas. Os resultados anteriores, seus vereditos e suas evidências foram preservados. As observações abaixo não substituem a execução integral dos CTs nem transformam comportamentos sem critério de aceitação em aprovação funcional.

**Ambiente:** QA — `https://verzel-store.qa-test-verzel-store.workers.dev/`

**Ferramentas:** Playwright MCP (`browser_navigate`, `browser_snapshot`, `browser_click`, `browser_fill_form`, `browser_evaluate`, ferramentas de console e rede, e `browser_take_screenshot`).
**Limites da sessão:** não foi aberto o checkout, não foram enviados pedidos e não foram executados testes automatizados.

### Sessão 1 — Catálogo e navegação

**Passos executados:**

1. Abrir a URL do ambiente de QA.
2. Inspecionar título, links e navegação principal.
3. Examinar os cartões do catálogo e a resposta de `GET /api/produtos`.
4. Verificar se os cartões expõem links ou controles de detalhes.

**Resultado observado:** a página carregou com título `Produtos | Verzel Store`. A navegação apresentou Produtos, Documentação e Carrinho. Foram exibidos oito cartões:

| ID | Produto | Preço exibido |
|---|---|---:|
| P001 | Camiseta Essencial | R$ 59,90 |
| P002 | Calça Jeans Slim | R$ 139,90 |
| P003 | Tênis Casual Urbano | R$ 189,90 |
| P004 | Boné Aba Curva | R$ 49,90 |
| P005 | Mochila Urbana 20L | R$ 100,00 |
| P006 | Kit 3 Pares de Meias | R$ 29,90 |
| P007 | Jaqueta Corta-Vento | R$ 229,90 |
| P008 | Garrafa Térmica 750ml | R$ 50,00 |

A chamada `GET /api/produtos` retornou HTTP 200 com P001 a P008. Os cartões não apresentaram links de detalhes; não foi identificada uma rota de detalhes pela interface observada.

**Resultado esperado documentado:** `00-analise-do-desafio.md` contém esses produtos e preços como dados de teste; CT-28 e `backend-test/produtos/01-listar-produtos.spec.ts` cobrem a listagem pela API. Não foi localizado critério de aceitação para título, navegação, apresentação do catálogo ou página de detalhes.

**Status:** os dados observados correspondem à tabela de teste. A conformidade funcional da apresentação e a expectativa de detalhes permanecem **pendentes de requisito**; a ausência de link não foi registrada como bug.

**Evidências:** [snapshot do catálogo](../.playwright-mcp/page-2026-10-11T15-33-09-021Z.yml) e [captura de tela](../.playwright-mcp/page-2026-10-11T15-33-11-376Z.png).

**Relação com testes:** CT-28 e `backend-test/produtos/01-listar-produtos.spec.ts` cobrem a API. Não foi localizado teste E2E da apresentação do catálogo ou detalhes pela interface.

### Sessão 2 — Carrinho e quantidades

**Passos executados:**

1. Adicionar uma Camiseta Essencial e abrir o carrinho.
2. Conferir preço unitário, quantidade e resumo.
3. Usar o botão de aumentar até cinco unidades.
4. Usar o botão de diminuir até uma unidade.
5. Remover o último produto pelo controle da interface.

**Resultado observado:** com uma unidade, a interface mostrou preço unitário e subtotal de R$ 59,90, desconto de R$ 0,00, frete de R$ 19,90, total de R$ 79,80 e indicação de R$ 140,10 faltantes para frete grátis. Em quantidade 1, o botão de diminuir ficou desabilitado. Em quantidade 5, o cartão exibiu “Limite de 5 unidades por produto.”, o botão de aumentar ficou desabilitado, subtotal e total foram R$ 299,50 e o frete apareceu como grátis. Ao remover o produto, o carrinho exibiu “Seu carrinho está vazio”, contador 0 e link “Ver produtos”.

**Resultado esperado documentado:** quantidade válida é inteiro ≥ 1; CA10/CT-27 define o limite de cinco unidades na interface; abaixo de R$ 200,00 o frete é R$ 19,90 e, a partir de R$ 200,00, grátis; o total segue `subtotal - desconto + frete`. Não foi localizado critério específico para desabilitar o botão de diminuir em 1, remover o último produto ou o texto do estado vazio.

**Status:** o limite de cinco unidades e o botão de aumentar desabilitado estão **conformes** com CA10/CT-27. Os valores da cesta de uma unidade são compatíveis com as regras documentadas. O controle mínimo e a remoção foram observados, mas a conformidade funcional do estado vazio permanece **pendente de requisito**. A quantidade 5 não testa a fronteira exata de frete grátis em R$ 200,00.

**Evidências:** [carrinho com uma unidade](../.playwright-mcp/page-2026-10-11T15-40-59-928Z.yml), [carrinho com cinco unidades](../.playwright-mcp/page-2026-10-11T15-41-10-044Z.yml), [captura com cinco unidades](../.playwright-mcp/page-2026-10-11T15-41-12-534Z.png), [quantidade mínima observada](../.playwright-mcp/page-2026-10-11T15-41-20-110Z.yml) e [estado vazio após remoção](../.playwright-mcp/page-2026-10-11T15-41-22-581Z.yml).

**Relação com testes:** CT-27 e `e2e/cupons/10-limite-5-unidades.spec.ts` verificam o limite da interface. CT-07 e CT-13 se relacionam aos valores observados; a cesta explorada não substitui os casos de fronteira e arredondamento.

### Sessão 3 — Cupons pela interface

**Passos executados:**

1. Adicionar uma Camiseta Essencial e aplicar `BEMVINDO10`.
2. Conferir mensagem e valores; remover o cupom pelo controle apresentado.
3. Aplicar `CUPOMINVALIDOQA` e depois `VERAO2026` no mesmo carrinho.
4. Conferir console e chamadas a `POST /api/carrinho/calcular`.
5. Remover o produto e confirmar o carrinho vazio.

**Resultado observado:** `BEMVINDO10` exibiu “Cupom BEMVINDO10 aplicado.”, com subtotal de R$ 59,90, desconto de R$ 5,99, frete de R$ 19,90 e total de R$ 73,81. “Remover cupom” restaurou desconto R$ 0,00, total R$ 79,80 e o campo de cupom. `CUPOMINVALIDOQA` mostrou “Cupom inválido.”; `VERAO2026` mostrou “Cupom expirado.”. Ambos mantiveram desconto zero e total R$ 79,80. As chamadas de cálculo responderam HTTP 200. Não houve erros ou avisos no console. O carrinho foi esvaziado ao final.

**Resultado esperado documentado:** CA01 define desconto de 10% sobre subtotal; CA03 prevê “Cupom inválido.” sem desconto; CA04 prevê “Cupom expirado.” sem desconto; CA05 orienta remover o cupom atual antes de aplicar outro. A análise registra `VERAO2026` como expirado em 31/03/2026.

**Status:** resultados funcionais observados **conformes** com esses critérios. A sessão observou remoção do cupom, mas não tentou aplicar outro enquanto um permanecia ativo; portanto, não constitui nova execução integral de CT-05.

**Evidências:** [BEMVINDO10 aplicado](../.playwright-mcp/page-2026-10-11T15-44-41-930Z.yml), [remoção do cupom](../.playwright-mcp/page-2026-10-11T15-44-45-861Z.yml), [código inexistente](../.playwright-mcp/page-2026-10-11T15-44-48-870Z.yml), [cupom expirado](../.playwright-mcp/page-2026-10-11T15-44-52-402Z.yml), [captura do resultado expirado](../.playwright-mcp/page-2026-10-11T15-44-56-562Z.png) e [carrinho vazio ao encerrar](../.playwright-mcp/page-2026-10-11T15-45-10-499Z.yml).

**Relação com testes:** `e2e/cupons/01-cupom-valido.spec.ts`, `03-cupom-inexistente.spec.ts`, `04-cupom-expirado.spec.ts` e `05-apenas-um-cupom.spec.ts` cobrem os comportamentos funcionais. Console e rede foram observados diretamente no MCP; não há arquivo de log da Verzel Store em `.playwright-mcp`.

### Limitações e rastreabilidade complementar

- As sessões exploratórias não alteram retroativamente vereditos ou evidências históricas dos CTs.
- O snapshot expôs os alertas e o campo inválido, mas não foi localizado requisito formal de acessibilidade nem teste automatizado específico dessas propriedades.
- Apresentação do catálogo, detalhes, controle mínimo e estado vazio não recebem aprovação funcional sem critério suficiente.
- Consulte a [matriz de rastreabilidade](07-matriz-rastreabilidade.md).

## Cenários complementares em Gherkin

> Esta seção complementa a rastreabilidade sem reproduzir os cenários já escritos em `06-cenarios-gherkin-verzel-store.md`. Os vereditos históricos permanecem nos CTs acima. Cenários exploratórios e propostas não são requisitos formais nem recebem aprovação por terem sido expressos em Gherkin.

### Cenários Gherkin acrescentados

#### Cenário Gherkin complementar — cálculo oficial de cupom pela API (CT-29)

**Resultado esperado:** HTTP 200; subtotal de R$ 239,70; desconto de R$ 23,97; frete de R$ 0,00; `freteGratis=true`; `valorFaltanteFreteGratis=R$ 0,00`; total de R$ 215,73; cupom aplicado.

**Origem:** CT-29 deste documento, com resultado histórico registrado como APROVADO/PASSOU. Não foi localizada evidência exploratória MCP para este exemplo oficial.

**Automação relacionada:** `backend-test/carrinho/04-calcular-carrinho.spec.ts` cobre um cálculo válido com outra cesta; `e2e/cupons/11-arredondamento-2-casas.spec.ts` cobre cálculo de cupom para P001. Não foi localizado teste automatizado que reproduza exatamente a cesta e os valores oficiais de CT-29.

```gherkin
Funcionalidade: Cálculo oficial de cupom pela API

  Cenário: Calcular o exemplo oficial com BEMVINDO10
    Dado que a API de cálculo está disponível
    Quando envio P002 com quantidade 1, P004 com quantidade 2 e o cupom "BEMVINDO10"
    Então a API retorna HTTP 200
    E o subtotal é R$ 239,70
    E o desconto é R$ 23,97
    E o frete é R$ 0,00 e o frete grátis está ativo
    E o valor faltante para frete grátis é R$ 0,00
    E o total é R$ 215,73
    E o cupom consta como aplicado
```

#### Cenário Gherkin complementar — paridade entre interface e API (CT-30)

**Resultado esperado:** os valores da interface e da API são iguais para o mesmo conjunto de produtos, quantidades e cupom.

**Origem:** CT-30 deste documento, com resultado histórico registrado como APROVADO/PASSOU. A sessão MCP de cupons observou valores coincidentes para uma camiseta com `BEMVINDO10`; a resposta de rede foi consultada, mas não foi salva como arquivo de evidência. Essa amostra não substitui a execução integral de CT-30.

**Automação relacionada:** não foi localizado teste automatizado dedicado à comparação entre os valores apresentados pela interface e os retornados pela API.

```gherkin
Funcionalidade: Consistência entre a interface e a API de cálculo

  Cenário: Comparar os valores para a mesma cesta e o mesmo cupom
    Dado que a interface e a API de cálculo estão disponíveis
    E que registrei os produtos, quantidades e cupom de uma mesma cesta na interface
    Quando solicito o cálculo da API com esses mesmos dados
    Então a API retorna subtotal, desconto, frete, indicador de frete grátis, valor faltante e total
    E cada valor retornado é igual ao valor apresentado pela interface
```

### Referências aos cenários Gherkin já documentados

Os cenários abaixo já constam em `06-cenarios-gherkin-verzel-store.md`; são referenciados aqui em vez de copiados. Os CTs conservam os vereditos apresentados nas seções históricas deste documento.

| Tema | Referência manual e Gherkin existente | Origem e evidência | Automação relacionada |
|---|---|---|---|
| Cupom válido, variações de caixa, cupom inexistente, expirado e troca/remoção | CT-01 a CT-05; cenários homônimos em `06-cenarios-gherkin-verzel-store.md` | CTs deste documento; evidências das sessões de 11/10/2026: [cupom válido](../.playwright-mcp/page-2026-10-11T15-44-41-930Z.yml), [remoção do cupom](../.playwright-mcp/page-2026-10-11T15-44-45-861Z.yml), [inexistente](../.playwright-mcp/page-2026-10-11T15-44-48-870Z.yml) e [expirado](../.playwright-mcp/page-2026-10-11T15-44-52-402Z.yml). A sessão não tentou aplicar um segundo cupom enquanto o primeiro permanecia ativo. | `e2e/cupons/01-cupom-valido.spec.ts` a `05-apenas-um-cupom.spec.ts`; CT-05 não foi integralmente reexplorado pelo MCP. |
| Frete, desconto, arredondamento e fórmula do total | CT-06 a CT-09, CT-12, CT-13 e CT-24 a CT-26; cenários correspondentes em `06-cenarios-gherkin-verzel-store.md` | Resultados manuais registrados nos respectivos CTs. O recorte MCP de uma unidade está em [carrinho com uma unidade](../.playwright-mcp/page-2026-10-11T15-40-59-928Z.yml); não cobre as fronteiras do frete nem substitui os demais CTs. | `e2e/cupons/06-frete-gratis-a-partir-200.spec.ts` a `09-desconto-nao-incide-frete.spec.ts`; `e2e/cupons/11-arredondamento-2-casas.spec.ts`. |
| Validações de itens e quantidades pela API | CT-10, CT-11, CT-14, CT-15.1, CT-16 e CT-17; cenários correspondentes em `06-cenarios-gherkin-verzel-store.md` | CTs deste documento. CT-11 e CT-15.1 permanecem falhas históricas vinculadas aos bugs já registrados; não foram reclassificados aqui. | `backend-test/carrinho/05-itens-obrigatorios.spec.ts` a `11-quantidade-maxima.spec.ts`, conforme o cenário; `backend-test/carrinho/07-item-invalido.spec.ts`. |
| Limite de cinco unidades na interface | CT-27; cenário CT-27 em `06-cenarios-gherkin-verzel-store.md` | [Carrinho com cinco unidades](../.playwright-mcp/page-2026-10-11T15-41-10-044Z.yml) e [captura](../.playwright-mcp/page-2026-10-11T15-41-12-534Z.png). | `e2e/cupons/10-limite-5-unidades.spec.ts`. |
| Catálogo pela API e dados de produtos | CT-22 e CT-28; cenário combinado em `06-cenarios-gherkin-verzel-store.md`. A proposta “Apresentação exploratória do catálogo” também consta nesse documento. | [Snapshot do catálogo](../.playwright-mcp/page-2026-10-11T15-33-09-021Z.yml). A apresentação dos oito produtos pela interface é exploratória, sem critério formal localizado. | `backend-test/produtos/01-listar-produtos.spec.ts` e `02-consultar-produto.spec.ts`; a apresentação visual é coberta pelo novo `e2e/catalogo/01-apresentacao-catalogo.spec.ts`, ainda exploratório. |
| Remoção do último produto e carrinho vazio | Proposta exploratória “Estado exploratório do carrinho após remoção” em `06-cenarios-gherkin-verzel-store.md`; sem CT formal correspondente | [Snapshot do estado vazio após remoção](../.playwright-mcp/page-2026-10-11T15-41-22-581Z.yml). Estado observado, sem critério formal de aceitação. | `e2e/carrinho/01-remover-ultimo-produto.spec.ts`, identificado no teste como cobertura exploratória. |
| Semântica acessível dos erros de cupom | Proposta exploratória “Semântica acessível das mensagens de cupom” em `06-cenarios-gherkin-verzel-store.md`; CT-03 e CT-04 cobrem somente o comportamento funcional | Snapshots de [cupom inexistente](../.playwright-mcp/page-2026-10-11T15-44-48-870Z.yml) e [cupom expirado](../.playwright-mcp/page-2026-10-11T15-44-52-402Z.yml) mostraram alertas e campo inválido. Não foi localizado critério formal de acessibilidade. | `e2e/cupons/03-cupom-inexistente.spec.ts` e `04-cupom-expirado.spec.ts` incluem verificações propostas de papel `alert` e `aria-invalid`; isso não converte a proposta em requisito formal. |
| Pedidos, dados do cliente, erros HTTP e isolamento do carrinho | CT-18 a CT-21, CT-23 e CT-31; cenários correspondentes em `06-cenarios-gherkin-verzel-store.md` | CTs deste documento; sem nova evidência MCP para esses fluxos. | Testes existentes em `e2e/checkout/` e `backend-test/pedidos/`/`backend-test/http/`, conforme o fluxo. |

### Limitações que permanecem

- Catálogo visual, detalhes de produto, remoção do último item e estado vazio não têm critério formal de aceitação localizado; suas descrições permanecem exploratórias.
- A semântica acessível de mensagens de cupom e o estado inválido do campo são propostas de cobertura, não critérios aprovados.
- CT-29 e CT-30 têm cenários Gherkin neste documento, mas não foi localizado teste automatizado que reproduza exatamente o exemplo oficial de CT-29 ou compare interface e API para CT-30.
- CT-15 não tem cenário Gherkin próprio em `06-cenarios-gherkin-verzel-store.md`. Como sua descrição ampla se sobrepõe a CT-15.1, que registra um defeito para item vazio, não foi criada uma nova formulação sem dados que distingam os dois casos.
- O cenário CT-15.1 e os defeitos registrados permanecem conforme os resultados históricos; esta seção não altera bugs, vereditos ou evidências anteriores.

