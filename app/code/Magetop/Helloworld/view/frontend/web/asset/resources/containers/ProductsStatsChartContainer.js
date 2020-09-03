import React from 'react';
import {connect} from "react-redux";

import {
    getReportsProductsStats
} from '../../store/redux/chart/actions'
import ProductsStatsChart from "../components/ProductsStatsChart";


class ProductsStatsChartContainer extends React.Component {
    render() {
        const {
            repost_products_stats,
            getReportsProductsStats,
            loading,
            error
        } = this.props

        return (
            <ProductsStatsChart
                loading={loading}
                getReportsProductsStats={getReportsProductsStats}
                repost_products_stats={repost_products_stats}
            />
        );
    }
}

const mapStateToProps = ({chartReducer}) => {
    const {
        repost_products_stats,
        loading,
        error
    } = chartReducer;

    return {
        repost_products_stats,
        loading,
        error
    };
};

export default connect(
    mapStateToProps,
    {
        getReportsProductsStats,
    }
)(ProductsStatsChartContainer);

