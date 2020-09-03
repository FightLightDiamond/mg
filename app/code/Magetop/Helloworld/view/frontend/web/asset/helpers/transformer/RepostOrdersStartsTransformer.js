import {formatData} from './Formater'

const repostOrdersStartsTransformer = (repost_products_stats, fields = []) => {
    let chartOptions = {
        title: {
            text: 'Order Chart'
        },
        subtitle: {
            text: 'React Chart newbie'
        },
        xAxis: {
            title: {
                text: 'Order'
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
            coupons_count: [],
            net_revenue: [],
            orders_count: [],
            segments: []
        }
    }

    return formatData(chartOptions, repost_products_stats.intervals, fields, data)
}

export default repostOrdersStartsTransformer