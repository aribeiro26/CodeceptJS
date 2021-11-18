Feature('home');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');    
    I.click('ACEITAR TODOS OS COOKIES e Prosseguir');
    pause();

});
