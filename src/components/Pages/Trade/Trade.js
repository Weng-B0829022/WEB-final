import TradingViewWidget from 'react-tradingview-widget';
import './Trade.css'

export const Trade = () => {
  return (<div className="tradeback">
  <div className="trade"><TradingViewWidget
          symbol="BITTREX:DOGEUSD"/>
  </div>
  </div>
)};

