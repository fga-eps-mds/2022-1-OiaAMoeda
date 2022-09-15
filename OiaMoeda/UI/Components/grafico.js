
function LoadCharts(symbol) {
    new TradingView.widget(
        {
            "autosize": false,
            "symbol": "BINANCE:" + symbol,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "100",
            "scale": "20",
            "locale": "in",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tvchart"
        }
        
    );
}