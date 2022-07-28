describe('Product Tests', () => {
    it('Can add product to cart', () => {
        cy.get('div.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .parents('div.inventory_item')
            .get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('span.shopping_cart_badge').should('have.text', '1');
    });
});