# Verzel QA Challenge — Verzel Store | Playwright MCP + IA

Projeto de Quality Assurance desenvolvido para o desafio técnico da Verzel Store, com testes manuais, automação com Playwright e validações de API.

Esta versão apresenta uma **extensão experimental do projeto original utilizando Playwright MCP integrado ao Codex no Visual Studio Code**, explorando como a IA pode apoiar a investigação da aplicação, a identificação de oportunidades de teste e a evolução da cobertura automatizada.

> **🚀 DIFERENCIAL DO PROJETO — QA com IA**
>
> Além da implementação original, este repositório explora o uso de ferramentas compatíveis com MCP para interação com o navegador e apoio ao trabalho de QA por meio do Codex no VS Code.
>
> **Confira as duas versões:**
>
> - 🤖 **[Projeto com MCP — versão complementar](https://github.com/welbernogueira/mcp-verzel-qa-challenge)** — exploração assistida por IA, cenários complementares e evolução dos testes.
> - 🧪 **[Projeto original — sem MCP](https://github.com/welbernogueira/verzel-qa-challenge)** — implementação original do desafio, disponível para avaliação independente.
>
> O objetivo é demonstrar a aplicação prática de IA no processo de QA sem substituir a análise crítica, a revisão humana ou a validação dos resultados.

**Ambiente de teste:**

https://verzel-store.qa-test-verzel-store.workers.dev/

**Documentação funcional/API:**

https://verzel-store.qa-test-verzel-store.workers.dev/documentacao

## Sumário

- [Objetivos](#objetivos)
- [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
- [Diferencial: Playwright MCP + Codex](#diferencial-playwright-mcp--codex)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do ambiente](#configuração-do-ambiente)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar os testes](#como-executar-os-testes)
- [Relatório e evidências](#relatório-e-evidências)
- [Testes cobertos](#testes-cobertos)
- [Defeitos identificados](#defeitos-identificados)
- [Integração contínua](#integração-contínua)
- [Escopo e observações](#escopo-e-observações)
- [Referências](#referências)

## Objetivos

- Validar os critérios de aceite relacionados a cupons, descontos e frete grátis.
- Verificar fluxos positivos e negativos do checkout.
- Testar os endpoints da API de produtos, cálculo do carrinho e criação de pedidos.
- Validar regras de entrada, limites, respostas HTTP e códigos de erro.
- Registrar defeitos com passos de reprodução e evidências.
- Disponibilizar instruções para reproduzir a execução dos testes.
- Explorar o uso de IA para apoiar a investigação e a evolução da estratégia de testes.
- Ampliar a cobertura com cenários complementares identificados durante a exploração da aplicação.

## Tecnologias e ferramentas

| Tecnologia/ferramenta | Utilização |
|---|---|
| **Node.js** | Ambiente de execução dos testes |
| **npm** | Instalação e gerenciamento de dependências |
| **Playwright Test** | Execução e organização dos testes automatizados |
| **TypeScript** | Linguagem utilizada nos arquivos de teste |
| **Chromium** | Navegador utilizado nas execuções locais |
| **Relatório HTML do Playwright** | Consulta dos resultados das execuções |
| **Git e GitHub** | Versionamento e hospedagem do projeto |
| **GitHub Actions** | Automação de execução configurada no repositório |
| **Chrome DevTools Console** | Inspeção do console e análise de respostas da API |
| **Playwright MCP** | Integração de ferramentas compatíveis para interação com o navegador |
| **Codex no Visual Studio Code** | Apoio à análise, à elaboração de alterações e à documentação |

## Diferencial: Playwright MCP + Codex

O principal diferencial desta versão é a exploração do **Model Context Protocol (MCP)** como meio de integrar ferramentas de interação com o navegador ao fluxo de trabalho de QA, utilizando o Codex no Visual Studio Code como assistente de desenvolvimento e análise.

A proposta é complementar a automação tradicional com exploração assistida, investigação de comportamentos e identificação de novas oportunidades de validação.

### Principais pontos de melhoria

- **Exploração assistida da interface:** inspeção do catálogo, dos componentes e dos fluxos disponíveis na aplicação.
- **Ampliação da cobertura automatizada:** inclusão de cenários complementares a partir de comportamentos observados durante a exploração.
- **Validação do estado vazio do carrinho:** verificação da remoção do último produto, da atualização do contador e da apresentação do link para voltar aos produtos.
- **Validação de mensagens de cupons:** verificação das mensagens apresentadas para cupom inexistente e cupom expirado.
- **Inspeção de comportamentos e respostas:** análise dos estados da interface, do console do navegador e das respostas observadas durante a exploração.
- **Evolução da documentação:** inclusão de cenários complementares, documentação em estilo Gherkin e identificação de pontos que precisam de critérios de aceite mais claros.
- **Apoio à manutenção do projeto:** utilização do Codex para auxiliar na análise e na elaboração de alterações nos arquivos de teste e documentação.
- **Verificação das alterações:** revisão das mudanças, execução de testes automatizados e conferência de consistência dos arquivos modificados.

### Exemplos práticos explorados

| Área | Resultado da exploração |
|---|---|
| **Catálogo** | Inspeção dos produtos apresentados, dos preços observados e dos botões de adição ao carrinho |
| **Carrinho** | Verificação da remoção do último produto, do contador zerado, do estado vazio e do link para visualizar produtos |
| **Cupons** | Verificação das mensagens para cupom inexistente e cupom expirado |
| **Diagnóstico** | Inspeção do console do navegador e observação das respostas durante a exploração |
| **Documentação** | Registro de cenários complementares e de pontos ainda sem critérios de aceite formalizados |

### Cenários complementares automatizados

A evolução da suíte inclui os seguintes exemplos:

- `e2e/catalogo/01-apresentacao-catalogo.spec.ts` — validação da apresentação do catálogo, dos produtos observados e dos botões de adição.
- `e2e/carrinho/01-remover-ultimo-produto.spec.ts` — validação da remoção do último produto e do estado vazio do carrinho.
- `e2e/cupons/03-cupom-inexistente.spec.ts` — validação da mensagem de cupom inexistente.
- `e2e/cupons/04-cupom-expirado.spec.ts` — validação da mensagem de cupom expirado.

Durante uma execução local em Chromium, esses quatro testes foram executados com resultado de **4 testes aprovados**. Esse resultado representa aquela execução específica, não uma garantia de que todas as execuções futuras serão aprovadas.

### MCP, IA e responsabilidade do QA

O MCP permite que ferramentas compatíveis interajam com recursos externos, como o navegador. O Codex auxilia na análise e na elaboração de alterações, mas não substitui a avaliação técnica do profissional de QA.

As sugestões geradas precisam ser revisadas, e os comportamentos devem ser validados por meio da execução dos testes e da análise das evidências.

Cenários exploratórios sem critérios de aceite formalizados são tratados como propostas complementares, e não como requisitos oficialmente definidos pelo desafio. A exploração também não significa que os defeitos identificados tenham sido corrigidos na aplicação.

## Pré-requisitos

Instale:

- Node.js e npm.
- Git.
- Um navegador Chromium/Google Chrome.
- Visual Studio Code ou outro editor.
- Para reproduzir o fluxo assistido, uma configuração compatível com Playwright MCP e Codex.

O projeto foi executado durante o desenvolvimento com Node.js `v24.21.0` e npm `11.19.0`.

## Configuração do ambiente

### 1. Clonar o repositório com MCP

```bash
git clone https://github.com/welbernogueira/mcp-verzel-qa-challenge.git
cd mcp-verzel-qa-challenge
```

### 2. Instalar as dependências

```bash
npm ci
```

### 3. Instalar o navegador do Playwright

```bash
npx playwright install chromium
```

Se o comando não instalar as dependências de sistema necessárias no seu ambiente, consulte a documentação oficial:

https://playwright.dev/docs/browsers

### 4. Conferir a configuração do Playwright

A configuração geral está em `playwright.config.ts`. Ela define a descoberta dos testes, os projetos de navegador e as opções de execução e geração de relatórios.

Confira o conteúdo do arquivo para confirmar as opções efetivamente configuradas.

### 5. Configuração do Playwright MCP no VS Code

A configuração do servidor MCP utilizada no projeto fica em:

```text
.vscode/mcp.json
```

O arquivo deve ser conferido no repositório para verificar o comando de inicialização e as opções utilizadas.

Para utilizar o Codex no VS Code, é necessário ter a extensão e o ambiente compatível configurados. A integração MCP depende da configuração do cliente e do servidor correspondente.

**Documentação oficial do Playwright:**

https://playwright.dev/docs/intro

## Estrutura do projeto

```text
mcp-verzel-qa-challenge/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .vscode/
│   └── mcp.json
├── backend-test/
│   ├── carrinho/
│   ├── http/
│   ├── pedidos/
│   └── produtos/
├── bugs/               # Registros de defeitos com passos e evidências
├── documentos/
│   ├── 02-cenarios-de-teste.md
│   ├── 04-execucao-testes-manuais-verzel-store.md
│   ├── 06-cenarios-gherkin-verzel-store.md
│   ├── 07-matriz-rastreabilidade.md
│   └── 08-correcao-desafio-realtorio.md
├── evidencias/
│   └── historico/       # Capturas antigas preservadas e identificadas
├── e2e/
│   ├── catalogo/
│   ├── carrinho/
│   ├── checkout/
│   └── cupons/
├── package.json
├── package-lock.json
└── playwright.config.ts
```

A estrutura acima destaca os diretórios e arquivos relevantes ao projeto. Para conferir a estrutura completa, consulte diretamente o repositório.

## Como executar os testes

Execute os comandos a partir da raiz do projeto.

### Executar toda a suíte

```bash
npx playwright test --project=chromium
```

### Executar os testes E2E de cupons

```bash
npx playwright test e2e/cupons/ --project=chromium
```

### Executar os testes E2E do checkout

```bash
npx playwright test e2e/checkout/ --project=chromium
```

### Executar os testes do catálogo

```bash
npx playwright test e2e/catalogo/ --project=chromium
```

### Executar os testes do carrinho

```bash
npx playwright test e2e/carrinho/ --project=chromium
```

### Executar os testes de API

```bash
npx playwright test backend-test/carrinho/ --project=chromium
npx playwright test backend-test/pedidos/ --project=chromium
npx playwright test backend-test/produtos/ --project=chromium
npx playwright test backend-test/http/ --project=chromium
```

### Executar um teste específico

Exemplo — apresentação do catálogo:

```bash
npx playwright test e2e/catalogo/01-apresentacao-catalogo.spec.ts --project=chromium
```

Exemplo — remoção do último produto:

```bash
npx playwright test e2e/carrinho/01-remover-ultimo-produto.spec.ts --project=chromium
```

Exemplo — cupom inexistente:

```bash
npx playwright test e2e/cupons/03-cupom-inexistente.spec.ts --project=chromium
```

Exemplo — cupom expirado:

```bash
npx playwright test e2e/cupons/04-cupom-expirado.spec.ts --project=chromium
```

### Consultar opções do Playwright

```bash
npx playwright test --help
```

## Relatório e evidências

### Abrir o relatório HTML

Após executar os testes, rode:

```bash
npx playwright show-report
```

O Playwright abrirá o relatório HTML no navegador. Por padrão, o servidor local costuma utilizar `http://localhost:9323`.

### Consultar evidências

Os artefatos gerados dependem da configuração e do tipo de execução.

No PowerShell:

```powershell
Get-ChildItem test-results -Recurse
```

Para listar somente os vídeos:

```powershell
Get-ChildItem test-results -Recurse -Filter *.webm
```

No terminal Bash:

```bash
find test-results -type f
```

Nem todo teste necessariamente gera todos os tipos de evidência; isso depende da configuração e do resultado da execução.

## Testes cobertos

### Testes E2E — Catálogo e carrinho

A cobertura complementar inclui:

- Apresentação dos produtos do catálogo.
- Conferência dos preços observados durante a exploração.
- Presença dos botões de adição ao carrinho.
- Remoção do último produto.
- Atualização do contador de produtos.
- Apresentação do estado vazio do carrinho.
- Disponibilidade do link para voltar à listagem de produtos.

### Testes E2E — Cupons e frete

A suíte em `e2e/cupons/` cobre, entre outros pontos:

- Aplicação de cupom válido.
- Variações de maiúsculas, minúsculas e espaços.
- Cupom inexistente e cupom expirado.
- Restrição de aplicação de cupons.
- Frete grátis a partir do limite de compra.
- Fronteira exata de R$ 200,00 com duas Mochilas; o teste registra a falha esperada do BUG-CA06-API-001.
- Frete abaixo do limite.
- Cálculo do frete com base no subtotal anterior ao desconto.
- Garantia de que o desconto não incida sobre o frete.
- Limite de cinco unidades por produto na interface e validação exploratória da API.
- Arredondamento de valores monetários para duas casas decimais.

### Testes E2E — Checkout

A suíte em `e2e/checkout/` cobre:

- Finalização da compra com dados válidos.
- Obrigatoriedade e conteúdo do nome.
- Obrigatoriedade e formato do e-mail.
- Obrigatoriedade e formato do CEP.
- CEP com e sem hífen.
- Opção de pagamento na entrega.

### Testes de API

A suíte em `backend-test/` cobre:

- Listagem e consulta de produtos.
- Cálculo do carrinho.
- Campo `itens` ausente ou vazio.
- Item inválido e produto inexistente.
- Itens duplicados.
- Quantidade inválida e quantidade acima do limite.
- Criação de pedido.
- Dados inválidos do cliente.
- Cupons inválidos ou expirados no pedido.
- Rota inexistente e método HTTP não permitido.

Os cenários manuais, os resultados e as evidências complementares estão em `documentos/`.

A análise do feedback do avaliador e das correções realizadas está em [`documentos/08-correcao-desafio-realtorio.md`](documentos/08-correcao-desafio-realtorio.md).

### Documentação em Gherkin e rastreabilidade

A documentação em estilo Gherkin está em:

[`documentos/06-cenarios-gherkin-verzel-store.md`](https://github.com/welbernogueira/mcp-verzel-qa-challenge/blob/main/documentos/06-cenarios-gherkin-verzel-store.md)

A matriz de rastreabilidade está em:

[`documentos/07-matriz-rastreabilidade.md`](https://github.com/welbernogueira/mcp-verzel-qa-challenge/blob/main/documentos/07-matriz-rastreabilidade.md)

**Observação:** a documentação em Markdown com sintaxe inspirada em Gherkin não é, por si só, um arquivo `.feature` executável nem representa uma integração ativa com Cucumber.

## Defeitos identificados

Os defeitos identificados durante a avaliação da aplicação estão documentados no repositório, com informações sobre comportamento esperado, comportamento observado e evidências disponíveis.

### BUG-CA06-API-001 — Frete cobrado no subtotal exato de R$ 200,00

- **Endpoint:** `POST /api/carrinho/calcular`
- **Reprodução:** duas Mochilas Urbanas P005 resultam em subtotal de R$ 200,00.
- **Esperado:** frete grátis e total de R$ 200,00.
- **Observado:** frete de R$ 19,90 e total de R$ 219,90.
- **Registro com passos e evidências:** [BUG-CA06-API-001](bugs/BUG-CA06-API-001-frete-no-limite.md).

### BUG-CA10-API-001 — API permite quantidade superior a cinco unidades

- **Endpoint:** `POST /api/carrinho/calcular`
- **Comportamento observado:** a API aceita uma quantidade superior a cinco unidades.
- **Comportamento esperado:** rejeitar a requisição com HTTP `422` e código `QUANTIDADE_MAXIMA_EXCEDIDA`.
- **Registro com passos e evidências:** [BUG-CA10-API-001](bugs/BUG-CA10-API-001-limite-quantidade.md).

### BUG-API-002 — Código incorreto para item inválido

- **Endpoint:** `POST /api/carrinho/calcular`
- **Payload documentado:** `{"itens":[{}]}`
- **Comportamento observado:** a API retorna `PRODUTO_NAO_ENCONTRADO`.
- **Comportamento esperado:** HTTP `422` com código `ITEM_INVALIDO`.
- **Registro com passos e evidências:** [BUG-API-002](bugs/BUG-API-002-item-invalido-retorna-produto-nao-encontrado.md).

Um teste que evidencia um defeito conhecido deve ser analisado junto ao respectivo registro e ao relatório da execução. A exploração assistida por IA não significa que os defeitos tenham sido corrigidos na aplicação.

## Integração contínua

O repositório contém configuração de workflow em `.github/workflows/playwright.yml`.

Para verificar as execuções da pipeline, acesse a aba **Actions** do GitHub. O resultado depende dos eventos configurados, do estado da suíte e da configuração atual do workflow.

## Escopo e observações

- A aplicação é um ambiente fictício de teste técnico. Nenhuma compra é real, não há cobrança e nenhum e-mail é enviado.
- O ambiente é compartilhado e utiliza produtos, preços e cupons fixos.
- O carrinho fica armazenado apenas na aba do navegador; outra aba, outro navegador ou uma janela anônima começam vazios.
- Os pedidos não são persistidos: o número apresentado é fictício e não existe consulta posterior de pedidos.
- A API recebe os dados, calcula e responde; não mantém estado entre chamadas.
- Login, cadastro de clientes, pagamento online e consulta de pedidos estão fora do escopo definido para o desafio.
- Cenários exploratórios sem critérios de aceite formalizados devem ser tratados como propostas complementares.
- Resultados de testes representam uma execução específica e não garantem o mesmo resultado em execuções futuras.
- O uso de MCP e IA complementa, mas não substitui, a análise crítica, a revisão humana e a validação das evidências.

## Referências

- **Aplicação:** https://verzel-store.qa-test-verzel-store.workers.dev/
- **Documentação da aplicação:** https://verzel-store.qa-test-verzel-store.workers.dev/documentacao
- **Projeto com MCP:** https://github.com/welbernogueira/mcp-verzel-qa-challenge
- **Projeto original sem MCP:** https://github.com/welbernogueira/verzel-qa-challenge
- **Playwright — documentação oficial:** https://playwright.dev/docs/intro
- **Model Context Protocol — documentação oficial:** https://modelcontextprotocol.io/
