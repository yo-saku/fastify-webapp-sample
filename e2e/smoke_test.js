SuiteOf('スモークテスト');

Scenario('Web サイトを開きログインする ', ({ I }) => {
    I.amOnPage('/')
    I.click('ログインする')
    I.fillField('ユーザー名', 'user1')
    I.fillField('パスワード', 'super-strong-passphrase')
    I.click('ログイン')
    I.see('user1 さん')
});