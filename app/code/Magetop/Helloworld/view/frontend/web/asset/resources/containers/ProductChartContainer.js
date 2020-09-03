import React from 'react';
import {connect} from "react-redux";

import {
    getReportsProducts
} from '../../store/redux/chart/actions'
import ProductChart from "../components/ProductChart";


class ProductChartContainer extends React.Component {
    render() {
        const {
            repost_products,
            getReportsProducts,
            loading,
            error
        } = this.props

        return (
            <ProductChart
                loading={loading}
                getReportsProducts={getReportsProducts}
                repost_products={repost_products}
            />
        );
    }
}

const mapStateToProps = ({chartReducer}) => {
    const {
        repost_products,
        loading,
        error
    } = chartReducer;

    return {
        repost_products,
        loading,
        error
    };
};

export default connect(
    mapStateToProps,
    {
        getReportsProducts,
    }
)(ProductChartContainer);

