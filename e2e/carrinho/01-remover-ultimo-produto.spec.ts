import { test, expect } from '@playwright/test';

const URL = 'https://verzel-store.qa-test-verzel-store.workers.dev/';

test.describe('Carrinho - remoção do último produto (cobertura exploratória)', () => {
  test('deve exibir o estado vazio após remover o único produto', async ({ page }) => {
    await page.goto(URL);
    await page.getByRole('link', { name: 'Produtos' }).click();

    const produto = page.getByRole('article', { name: 'Camiseta Essencial' });
    await expect(produto).toBeVisible();
    await produto.getByRole('button', { name: 'Adicionar ao carrinho' }).click();

    await page.getByRole('link', { name: /Carrinho/ }).click();
    await expect(page.getByRole('heading', { name: 'Carrinho' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    ).toBeVisible();

    await page
      .getByRole('button', { name: 'Remover Camiseta Essencial do carrinho' })
      .click();

    await expect(page.getByText('Seu carrinho está vazio', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Carrinho 0 itens no carrinho' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ver produtos' })).toBeVisible();
  });
});
