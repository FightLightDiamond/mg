import React from 'react';
import {connect} from "react-redux";

import {
    getReportsOrdersStats
} from '../../store/redux/chart/actions'
import OrdersStatsChart from "../components/OrdersStatsChart";


class OrdersStatsChartContainer extends React.Component {
    render() {
        const {
            report_orders_stats,
            getReportsOrdersStats,
            loading,
            error
        } = this.props

        return (
            <OrdersStatsChart
                loading={loading}
                getReportsOrdersStats={getReportsOrdersStats}
                report_orders_stats={report_orders_stats}
            />
        );
    }
}

const mapStateToProps = ({chartReducer}) => {
    const {
        report_orders_stats,
        loading,
        error
    } = chartReducer;

    return {
        report_orders_stats,
        loading,
        error
    };
};

export default connect(
    mapStateToProps,
    {
        getReportsOrdersStats,
    }
)(OrdersStatsChartContainer);

