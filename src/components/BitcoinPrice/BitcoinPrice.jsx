import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar o preço do Bitcoin
  const loadBitcoinPrice = async () => {
    try {
      const data = await fetchBitcoinPrice(currency);
      setPrice(data.bitcoin);
    } catch (err) {
      setError("Erro ao carregar o preço do Bitcoin.");
    }
  };

  // Função para buscar dados históricos para o gráfico (últimas 30 horas)
  const loadBitcoinHistoricalData = async () => {
    try {
      const data = await fetchBitcoinHistoricalData(currency);
      const prices = data.prices.map(price => price[1]);
      setHistoricalData(prices);
    } catch (err) {
      setError("Erro ao carregar os dados históricos.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Começa o loading
      setError(null); // Limpa erros antigos
      try {
        await loadBitcoinPrice();
        await loadBitcoinHistoricalData();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Só finaliza o loading depois que tudo terminou
      }
    };
  
    fetchData();
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
        <Preloader />
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
