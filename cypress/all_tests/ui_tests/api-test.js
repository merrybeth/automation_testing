import AccessoriesPage from "../../page_objects/accessoriesPage";
import SearchResultsPage from "../../page_objects/searchResultsPage";

describe('Google store tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(() => {
        cy.fixture('product').then(data=>{
                cy.wrap(data).as('productData')
            })
    })

    it('Google Store', () =>{
        cy.get('@productData').then((productData) => {

            cy.log("GIVEN user is at Accessories page")
            AccessoriesPage.open()

            cy.log("WHEN user performs search product by name")
            AccessoriesPage.performSearch(productData.name)

            SearchResultsPage.getProduct(productData.url).should('exist')

        })
    })
})


