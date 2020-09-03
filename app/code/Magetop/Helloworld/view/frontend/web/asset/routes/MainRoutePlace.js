import React from "react";
import { Route } from 'react-router-dom'
import OrdersStatsChartContainer from "../resources/containers/OrdersStatsChartContainer";
import ProductChartContainer from "../resources/containers/ProductChartContainer";
import ProductsStatsChartContainer from "../resources/containers/ProductsStatsChartContainer";
import ProductsStatsByHourContainer from "../resources/containers/ProductsStatsByHourContainer";
import RevenueStatsChartContainer from "../resources/containers/RevenueStatsChartContainer";
import TableChartContainer from "../resources/containers/TableChartContainer"
import TestContainer from "../resources/containers/TestContainer"
import ProductsStatsByCurrentMonthContainer from "../resources/containers/ProductsStatsByCurrentMonthContainer"

export default class MainRoutePlace extends React.Component {
    render() {
        return (
            <div className="main-route-place">
                <Route exact path="/orders-starts-chart" component={OrdersStatsChartContainer} />
                <Route exact path="/product-chart" component={ProductChartContainer} />
                <Route exact path="/products-stats-chart" component={ProductsStatsChartContainer} />
                <Route exact path="/revenue-stats-chart" component={RevenueStatsChartContainer} />
                <Route exact path="/" component={TableChartContainer} />
                <Route exact path="/test" component={TestContainer} />
                <Route exact path="/products-stats-chart-by-hour" component={ProductsStatsByHourContainer} />
                <Route exact path="/products-stats-chart-by-current-month" component={ProductsStatsByCurrentMonthContainer} />
            </div>

        );
    }
}
