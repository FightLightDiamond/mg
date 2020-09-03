import {formatData} from './Formater'

const repostProductsStartsTransformer = (repost_products_stats, fields = []) => {
    let chartOptions = {
        title: {
            text: 'Product Chart'
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
            items_sold: [],
            net_revenue: [],
            orders_count: [],
            products_count: [],
            segments: [],
            variations_count: [],
        }
    }

    return formatData(chartOptions, repost_products_stats.intervals, fields, data)
}

export default repostProductsStartsTransformer