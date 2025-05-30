import "./BitcoinCard.css";

export default function BitcoinCard({ currency, price }) {
  return (
    <div className="bitcoin-card">
      <h3>{currency.toUpperCase()}</h3>
      <p>{typeof price === "number" ? price.toFixed(2) : price}</p>
    </div>
  );
}
