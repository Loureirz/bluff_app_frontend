import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./BitcoinPrice.css";

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar o preço do Bitcoin
  const fetchBitcoinPrice = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
      setPrice(response.data.bitcoin);
    } catch (err) {
      setError("Erro ao carregar o preço do Bitcoin.");
    }
  };

  // Função para buscar dados históricos para o gráfico (últimas 30 horas)
  const fetchBitcoinHistoricalData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=1`);
      const prices = response.data.prices.map(price => price[1]);
      setHistoricalData(prices);
    } catch (err) {
      setError("Erro ao carregar os dados históricos.");
    }
  };

  useEffect(() => {
    fetchBitcoinPrice();
    fetchBitcoinHistoricalData();
    setLoading(false);
  }, [currency]);

  // Dados do gráfico
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
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="price">
            <p><strong>{currency.toUpperCase()}:</strong> {price?.[currency]}</p>
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
