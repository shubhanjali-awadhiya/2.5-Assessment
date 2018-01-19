const selectors = require('../test_data/selectors')
const data = require('../test_data/data')

module.exports = {
    //pre-conditions
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    
    //post condition
    after: browser => {
        
        browser.end()
    },

    'Evens_and_Odds': browser => {
    //Enter Value 
    browser
        .setValue(selectors.Evens_and_Odds.inputLine, data.Evens_and_Odds_input.inputLine)
        .click(selectors.Evens_and_Odds.splitButton)
        .expect.element(selectors.Evens_and_Odds.evenResultBox).to.text.contain(data.Evens_and_Odds_input.evenResultBox)
    browser   
        .expect.element(selectors.Evens_and_Odds.oddResultBox).to.text.contain(data.Evens_and_Odds_input.oddResultBox)
    },

    'Filter_Object': browser => {
        browser
        .setValue(selectors.Filter_Object.inputLine, data.Filter_Object_1.inputLine)
        .click(selectors.Filter_Object.filterButton)
        .pause(1000)
        .expect.element(selectors.Filter_Object.resultBox).to.text.contain(data.Filter_Object_1.resultBox)
    },

    'Filter_String': browser => {
        browser
        .setValue(selectors.Filter_String.inputLine, data.Filter_String_1.inputLine)
        .click(selectors.Filter_String.filterButton)
        .expect.element(selectors.Filter_String.resultBox).to.text.contain(data.Filter_String_1.resultBox)
    },

    'Palindrome': browser => {
        browser
        .setValue(selectors.Palindrome.inputLine, data.Palindrome.inputLine)
        .click(selectors.Palindrome.checkButton)
        .expect.element(selectors.Palindrome.resultBox).to.text.contain(data.Palindrome.resultBox)
    },

    'Sum': browser => {
        browser
        .setValue(selectors.Sum.inputLine1, data.Sum.inputLine1)
        .setValue(selectors.Sum.inputLine2, data.Sum.inputLine2)
        .click(selectors.Sum.sumButton)
        .expect.element(selectors.Sum.resultBox).to.text.contain(data.Sum.resultBox)
    }
    
    
}