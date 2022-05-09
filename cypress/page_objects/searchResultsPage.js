class SearchResultsPage {
    getProduct(url) {
        return cy.get(`div[style='background-image:url(${url})']`)
    }
}

export default new SearchResultsPage()
