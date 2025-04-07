const API_BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchBitcoinPrice = (currency) => {
  return fetch(`${API_BASE_URL}/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    .then(res => res.json())
    .catch(() => {
      throw new Error("Erro ao carregar o preço do Bitcoin.");
    });
};

export const fetchBitcoinHistoricalData = (currency) => {
  return fetch(`${API_BASE_URL}/coins/bitcoin/market_chart?vs_currency=${currency}&days=1`)
    .then(res => res.json())
    .catch(() => {
      throw new Error("Erro ao carregar os dados históricos.");
    });
};
