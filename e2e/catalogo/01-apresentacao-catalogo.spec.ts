import { test, expect } from '@playwright/test';

const URL = 'https://verzel-store.qa-test-verzel-store.workers.dev/';

test.describe('Catálogo - observação exploratória de 11/10/2026', () => {
  test('deve apresentar os oito produtos e os preços observados', async ({ page }) => {
    // Dados observados via Playwright MCP em 11/10/2026. Ainda não há critério
    // formal de aceitação aprovado para a apresentação do catálogo.
    const produtos = [
      { nome: 'Camiseta Essencial', preco: 'R$ 59,90' },
      { nome: 'Calça Jeans Slim', preco: 'R$ 139,90' },
      { nome: 'Tênis Casual Urbano', preco: 'R$ 189,90' },
      { nome: 'Boné Aba Curva', preco: 'R$ 49,90' },
      { nome: 'Mochila Urbana 20L', preco: 'R$ 100,00' },
      { nome: 'Kit 3 Pares de Meias', preco: 'R$ 29,90' },
      { nome: 'Jaqueta Corta-Vento', preco: 'R$ 229,90' },
      { nome: 'Garrafa Térmica 750ml', preco: 'R$ 50,00' },
    ];

    await page.goto(URL);
    await page.getByRole('link', { name: 'Produtos' }).click();

    const artigos = page.getByRole('article');
    await expect(artigos).toHaveCount(8);

    for (const produto of produtos) {
      const artigo = page.getByRole('article', { name: produto.nome });

      await expect(artigo).toBeVisible();
      await expect(artigo.getByText(produto.preco, { exact: true })).toBeVisible();
      await expect(
        artigo.getByRole('button', { name: 'Adicionar ao carrinho' })
      ).toBeVisible();
    }
  });
});
