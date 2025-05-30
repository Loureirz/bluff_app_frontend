import { useEffect, useState } from "react";
import BitcoinCard from "../BitcoinCard/BitcoinCard";
import Preloader from "../Preloader/preloader";
import { fetchBitcoinPrice } from "../../utils/BitcoinApi";
import "./BitcoinPriceCards.css";

const currencies = ['usd', 'brl', 'eur', 'gbp', 'jpy', 'ars'];

export default function BitcoinPriceCards() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const results = {};
      for (let currency of currencies) {
        try {
          const data = await fetchBitcoinPrice(currency);
          results[currency] = data.bitcoin[currency];
        } catch {
          results[currency] = "Erro";
        }
      }
      setPrices(results);
      setLoading(false);
    }

    fetchAll();
  }, []);

  const showMore = () => setVisible(v => v + 3);

  if (loading) return <Preloader />;

  return (
    <div className="bitcoin-price-cards">
      {currencies.slice(0, visible).map((currency) => (
        <BitcoinCard
          key={currency}
          currency={currency}
          price={prices[currency]}
        />
      ))}
      {visible < currencies.length && (
        <button className="show-more-btn" onClick={showMore}>
          Mostrar mais
        </button>
      )}
    </div>
  );
}
