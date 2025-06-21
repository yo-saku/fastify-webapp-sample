const { utils } = inject()
module.exports = {
    /**
     * 商品を作成、商品名を取得
     * @param {function(string): string} name
     */
    haveItem(name) {
        const I = actor({});
        if (!name)
            name = `牛ハラミ弁当 - テスト -${utils.now.format("YYYYMMDDHHmmss")}-${Math.floor(Math.random() * 100000)}`;

        I.executeScript((itemName) => {
            fetch("/items/add", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Language": "ja,en-US;q=0.7,en;q=0.3",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Upgrade-Insecure-Requests": "1",
                    "Sec-Fetch-Dest": "document",
                    "Sec-Fetch-Mode": "navigate",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-User": "?1",
                    "Priority": "u=0, i"
                },
                "referrer": "http://localhost:8080/items/add",
                "body": `name=${itemName}&description=テスト商品2です&price=5432`,
                "method": "POST",
                "mode": "cors"
            });
        }, name);

        return name;
    },
};