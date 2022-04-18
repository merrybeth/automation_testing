class AccessoriesPage {
    open () {
        cy.visit(`${Cypress.env('googleURL')}/gb/?hl=en-GB&regionRedirect=true`);
    }

    get searchIcon(){
        return cy.get("div[data-test*='header-search']");
    }

    get searchInput(){
        return cy.get("input[placeholder=\'Search Google Store\']");
    }

    performSearch(productToSearch)
    {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}
export default new AccessoriesPage()
