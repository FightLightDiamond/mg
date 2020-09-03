import React from 'react';
import Select from 'react-select'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOptions: [],
            columns: []
        }
    }

    handleChange = (selectedOptions) => {

        const columns = selectedOptions.map(item => item.value);
        this.setState({ selectedOptions, columns });
        console.log('columns', columns)
    }

    optionSelects = () => [
            { value: 'avg_items_per_order', label: 'avg_items_per_order' },
            { value: 'avg_order_value', label: 'avg_order_value' },
            { value: 'coupons', label: 'coupons' },
            { value: 'coupons_count', label: 'coupons_count' },
            { value: 'gross_sales', label: 'gross_sales' },
            { value: 'items_sold', label: 'items_sold' },
            { value: 'net_revenue', label: 'net_revenue' },
            { value: 'num_new_customers', label: 'num_new_customers' },
            { value: 'num_returning_customers', label: 'num_returning_customers' },
            { value: 'num_items_sold', label: 'num_items_sold' },
            { value: 'products', label: 'products' },
            { value: 'orders_count', label: 'orders_count' },
            { value: 'refunds', label: 'refunds' },
            { value: 'shipping', label: 'shipping' },
            { value: 'taxes', label: 'taxes' },
            { value: 'total_sales', label: 'total_sales' },
        ]

    render() {
        return <div className={'col-lg-12'}>
            {JSON.stringify(this.state.columns)}
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                closeMenuOnSelect={false}
                isMulti
                options={this.optionSelects()}/>
        </div>
    }
}