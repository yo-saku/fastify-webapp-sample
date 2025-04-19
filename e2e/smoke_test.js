SuiteOf('スモークテスト');

Scenario('example.com にアクセスする ', ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain')
});
