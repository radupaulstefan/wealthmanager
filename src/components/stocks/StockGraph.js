import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useHttp from '../../hooks/use-http';

const StockGraph = props => {
  const [priceData, setPriceData] = useState([]);
  const currentStock = useSelector(state => state.homePageStocks.currentStock);
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const { isLoading, error, sendRequest: getStockGraph } = useHttp();

  useEffect(() => {
    if (currentStock) {
      const transformStockGraph = stocksObj => {
        setPriceData(
          stocksObj.chart.result[0].timestamp.map((el, index) => [
            el,
            stocksObj.chart.result[0].indicators.quote[0].close[index],
          ])
        );
      };
      getStockGraph(
        'axios',
        {
          url: `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v8/finance/chart/${currentStock}`,
          method: 'GET',
          params: {
            range: '5d',
            inteval: '1d',
          },
          headers: {
            'x-rapidapi-host':
              'stock-data-yahoo-finance-alternative.p.rapidapi.com',
            'x-rapidapi-key':
              'e66e74b1a2msha1cb25c439d918ep1828adjsnb6ac9e274da3',
          },
        },
        transformStockGraph
      );
    }
  }, [currentStock, getStockGraph]);

  const configPrice = {
    yAxis: [
      {
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value);
          },
          x: -15,
          style: {
            color: '#000',
            position: 'absolute',
          },
          align: 'left',
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          numberFormat.format(this.y, 0) +
          '</b><br/>' +
          moment(this.x).format('MMMM Do YYYY, h:mm')
        );
      },
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: currentStock,
    },
    chart: {
      height: 600,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },
    xAxis: {
      type: 'date',
    },
    rangeSelector: {
      buttons: [
        {
          type: 'day',
          count: 1,
          text: '1d',
        },
        {
          type: 'day',
          count: 7,
          text: '7d',
        },
        {
          type: 'month',
          count: 1,
          text: '1m',
        },
        {
          type: 'month',
          count: 3,
          text: '3m',
        },
        {
          type: 'all',
          text: 'All',
        },
      ],
      selected: 4,
    },
    series: [
      {
        name: 'Price',
        type: 'spline',

        data: priceData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return (
    <div>
      {currentStock && <ReactHighcharts config={configPrice}></ReactHighcharts>}
    </div>
  );
};

export default StockGraph;
