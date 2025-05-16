SuiteOf(' 一般的なエラーのテスト ')
Scenario(' ユーザーが存在しない URL にアクセスすると、エラーメッセージと商品一覧へのリンクが表示される ',
    ({I})=> {
        I.amOnPage('/undefined')
        I.see('お探しのページは見つかりませんでした。')
        I.click('商品一覧へ戻る')
        I.seeInTitle('商品一覧')
    }
)