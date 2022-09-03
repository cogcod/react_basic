import React, {useEffect, useState} from 'react';

// 암호 화폐들과 그 가격 나열하기
function CoinTracker() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] =useState([])

    // useEffect - 컴포넌트가 처음 렌더링 될 때 함수 실행
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) =>
                    setCoins(json),  // 데이터를 화면에 출력하기 위해 state에 넣기
                    setLoading(false),  // 데이터를 가져왔으면 loading 끝내기
            )
    }, [])

    return (
        <div>
            <h1>The Coins! { loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : null}

            <ul>
                {
                    coins.map((coin) =>
                        <li key={coin.id}>
                            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default CoinTracker;