import classes from './StockList.module.css';
import { useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useSelector, useDispatch } from 'react-redux';
import { stocksActions } from '../../store/stocks-slice';
import useHttp from '../../hooks/use-http';

const DUMMY_STOCKS = [
  {
    id: 1,
    name: 'Apple',
    currency: 'USD',
    regularMarketChangePercent: '10',
    symbol: 'AAPL',
  },
  {
    id: 2,
    name: 'Tesla',
    currency: 'USD',
    regularMarketChangePercent: '8.3',
    symbol: 'TSLA',
  },
  {
    id: 3,
    name: 'Lemonade',
    currency: 'USD',
    regularMarketChangePercent: '3.45',
    symbol: 'LMND',
  },
  {
    id: 4,
    name: 'NIO Technologies',
    currency: 'USD',
    regularMarketChangePercent: '12.3',
    symbol: 'NIO',
  },
  {
    id: 5,
    name: 'Vivendi SE',
    currency: 'USD',
    regularMarketChangePercent: '64.37',
    symbol: 'VIVHY',
  },
  {
    id: 6,
    name: 'Matterport',
    currency: 'USD',
    regularMarketChangePercent: '15.89',
    symbol: 'MTTR',
  },
  {
    id: 7,
    name: 'QuantumScape',
    currency: 'USD',
    regularMarketChangePercent: '13.66',
    symbol: 'QS',
  },
  {
    id: 8,
    name: 'IonQ',
    currency: 'USD',
    regularMarketChangePercent: '14.04',
    symbol: 'IONQ',
  },
  {
    id: 9,
    name: 'LendingTree',
    currency: 'USD',
    regularMarketChangePercent: '12.85',
    symbol: 'TREE',
  },
  {
    id: 10,
    name: 'Banco Santander México, S.A., Institución de Banca Múltiple, Grupo Financiero Santander México',
    currency: 'USD',
    regularMarketChangePercent: '11.304',
    symbol: 'BSMX',
  },
];

const Stocks = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.stocks.tableData);
  const { isLoading, error, sendRequest: getStocks } = useHttp();

  useEffect(() => {
    // const transformStocks = stocksObj => {
    //   dispatch(
    //     stocksActions.setTableData(
    //       stocksObj.finance.result[0].quotes.map((stock, id) => ({
    //         id: id,
    //         name: stock.displayName ? stock.displayName : stock.longName,
    //         currency: stock.currency,
    //         percent: stock.regularMarketChangePercent,
    //         symbol: stock.symbol,
    //       }))
    //     )
    //   );
    // };
    // getStocks(
    //   {
    //     url: 'https://stock-data-yahoo-finance-alternative.p.rapidapi.com/ws/screeners/v1/finance/screener/predefined/saved',
    //     method: 'GET',
    //     params: { scrIds: 'day_gainers', count: '5' },
    //     headers: {
    //       'x-rapidapi-host':
    //         'stock-data-yahoo-finance-alternative.p.rapidapi.com',
    //       'x-rapidapi-key':
    //         'e66e74b1a2msha1cb25c439d918ep1828adjsnb6ac9e274da3',
    //     },
    //   },
    //   transformStocks
    // );
    dispatch(stocksActions.setTableData(DUMMY_STOCKS));
  }, [dispatch]);

  const rowClickHandler = (e, row, rowIndex) => {
    dispatch(stocksActions.setCurrentStock(row.symbol));
  };

  const tableColumns = [
    {
      dataField: 'id',
      text: '#',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'currency',
      text: 'Currency',
    },
    {
      dataField: 'percent',
      text: 'Percent',
      sort: true,
    },
    {
      dataField: 'symbol',
      text: 'Symbol',
      sort: true,
    },
  ];
  return (
    <section className={classes.stocks}>
      <Card bg="white">
        <Card.Body>
          <Card.Title>Hot Stocks</Card.Title>
          {isLoading && (
            <Spinner
              style={{ position: 'fixed', top: '50%', right: '50%' }}
              animation="border"
            />
          )}
          {!isLoading && (
            <BootstrapTable
              variant="dark"
              bootstrap4
              keyField="id"
              data={tableData}
              columns={tableColumns}
              rowEvents={{ onClick: rowClickHandler }}
            />
          )}
        </Card.Body>
      </Card>

      <ul></ul>
    </section>
  );
};

export default Stocks;
