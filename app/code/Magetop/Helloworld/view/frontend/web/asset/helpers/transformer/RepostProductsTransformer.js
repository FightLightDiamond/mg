import _ from 'lodash'


const formatData = (chartOptions, res, fields, data) => {
    let xCategory = [];
    let series = [];

    try {
        // res = _.orderBy(res, ['items_sold'],['asc']);
        res = _.orderBy(res, ['net_revenue'], ['asc']);
        // console.log('RES :', res)
    } catch (e) {
        console.log(e)

    }


    if (res) {
        res.forEach(item => {
            xCategory.push(item.extended_info.name)

            for (const [subtotalKey, subtotalValue] of Object.entries(item)) {
                if (fields.indexOf(subtotalKey) !== -1) {
                    data[subtotalKey].push(subtotalValue)
                }
            }
        })

        for (const [key, value] of Object.entries(data)) {
            series.push(
                {
                    name: key,
                    type: 'column',
                    data: value
                }
            )
        }

        chartOptions.series = series
        chartOptions.xAxis.categories = xCategory
    }

    return chartOptions
}


const repostProductsTransformer = (title, data = []) => {
    return {
        title: {
            text: title
        },
        chart: {
            type: 'column'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            opposite: true,
            title: {
                text: 'VNĐ'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Net Revenue: <b>{point.y} đ</b>'
        },
        series: [{
            name: 'Net Revenue',
            data: data,
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 8, // 10 pixels down from the top
                style: {
                    fontSize: '8px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    }
}

export default repostProductsTransformer
