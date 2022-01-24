import { useState, useCallback } from 'react';
import axios from 'axios';

// const response = await axios.get(
//     'https://stock-data-yahoo-finance-alternative.p.rapidapi.com/ws/screeners/v1/finance/screener/predefined/saved',
//     {
//       method: 'GET',
//       params: { scrIds: 'day_gainers', count: '5' },
//       headers: {
//         'x-rapidapi-host':
//           'stock-data-yahoo-finance-alternative.p.rapidapi.com',
//         'x-rapidapi-key':
//           'e66e74b1a2msha1cb25c439d918ep1828adjsnb6ac9e274da3',
//       },
//     }
//   );
//   dispatch(
//     stocksActions.setTableData(
//       response.data.finance.result[0].quotes.map((stock, id) => ({
//         id: id,
//         name: stock.displayName ? stock.displayName : stock.longName,
//         currency: stock.currency,
//         percent: stock.regularMarketChangePercent,
//         symbol: stock.symbol,
//       }))
//     )

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (apiUsed, requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      if (apiUsed === 'axios') {
        const response = await axios.request({
          url: requestConfig.url ? requestConfig.url : '',
          method: requestConfig.method ? requestConfig.method : 'GET',
          params: requestConfig.params ? requestConfig.params : {},
          data: requestConfig.body ? requestConfig.body : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        if (response.statusText !== 'OK') {
          throw new Error('Request failed!');
        }

        applyData(response.data);
      } else {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method,
          body: JSON.stringify(requestConfig.body),
          headers: requestConfig.headers,
        });

        if (!response.ok) {
          const data = await response.json();
          let errorMessage = 'Authentication failed!';
          errorMessage = data.error.message;
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        }

        const data = await response.json();
        applyData(data, requestConfig.body);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
