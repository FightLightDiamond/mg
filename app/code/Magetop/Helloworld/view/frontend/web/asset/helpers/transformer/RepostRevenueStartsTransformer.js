import {formatData} from './Formater'

const repostRevenueStartsTransformer = (repost_revenue_stats, fields = []) => {
    let chartOptions = {
        title: {
            text: 'Revenue Chart'
        },
        subtitle: {
            text: 'React Chart newbie'
        },
        xAxis: {
            title: {
                text: 'Product'
            },
            categories: [],
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        series: [],
    }

    let data = {}

    if (fields !== []) {
        fields.forEach(function (item) {
            data[item] = []
        })
    } else {
        data = {
            avg_items_per_order: [],
            avg_order_value: [],
            coupons: [],
            coupons_count: [],
            gross_sales: [],
            net_revenue: [],
            num_items_sold: [],
            num_new_customers: [],
            num_returning_customers: [],
            orders_count: [],
            refunds: [],
            segments: [],
            shipping: [],
            taxes: [],
            total_sales: []
        }
    }

    return formatData(chartOptions, repost_revenue_stats.intervals, fields, data)
}

export default repostRevenueStartsTransformer