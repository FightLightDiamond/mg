import React from 'react';
import {connect} from "react-redux";

import {
    getReportsRevenueStats
} from '../../store/redux/chart/actions'
import RevenueStatsChart from "../components/RevenueStatsChart";


class RevenueStatsChartContainer extends React.Component {
    render() {
        const {
            repost_revenue_stats,
            getReportsRevenueStats,
            loading,
            error
        } = this.props

        return (
            <RevenueStatsChart
                loading={loading}
                getReportsRevenueStats={getReportsRevenueStats}
                repost_revenue_stats={repost_revenue_stats}
            />
        );
    }
}

const mapStateToProps = ({chartReducer}) => {
    const {
        repost_revenue_stats,
        loading,
        error
    } = chartReducer;

    return {
        repost_revenue_stats,
        loading,
        error
    };
};

export default connect(
    mapStateToProps,
    {
        getReportsRevenueStats,
    }
)(RevenueStatsChartContainer);

