import { useState } from "react";
import Preloader from '../Preloader/preloader';
import { fetchBitcoinPrice, fetchBitcoinHistoricalData } from "../../utils/BitcoinApi";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./BitcoinPrice.css";

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showData, setShowData] = useState(false); // Para controlar se os dados devem ser exibidos

  const loadData = async () => {
    setLoading(true);
    setError(null);
    setShowData(false); // Oculta dados anteriores enquanto carrega

    try {
      const priceData = await fetchBitcoinPrice(currency);
      const historical = await fetchBitcoinHistoricalData(currency);
      const prices = historical.prices.map(price => price[1]);

      setPrice(priceData.bitcoin);
      setHistoricalData(prices);
      setShowData(true); // Exibe os dados
    } catch (err) {
      setError("Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: new Array(historicalData.length).fill(''),
    datasets: [
      {
        label: `Preço do Bitcoin em ${currency.toUpperCase()}`,
        data: historicalData,
        borderColor: "rgba(255, 165, 0, 1)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bitcoin-price">
      <h2>Preço do Bitcoin</h2>

      <div className="currency-selector">
        <label htmlFor="currency">Escolha a moeda: </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="brl">BRL</option>
          <option value="eur">EUR</option>
        </select>
        <button onClick={loadData} className="load-button">Carregar dados</button>
      </div>

      {loading ? (
        <Preloader />
      ) : error ? (
        <p>{error}</p>
      ) : showData && (
        <div>
          <div className="price">
            <p>
              <strong>{currency.toUpperCase()}:</strong> { 
                price && typeof price[currency] === 'number'
                ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency.toUpperCase() }).format(price[currency])
                : 'Carregando...'
              }
            </p>
          </div>

          <div className="chart-container">
            <Line data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
