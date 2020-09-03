const formatData = (chartOptions, res, fields, data) => {
    let xCategory = [];
    let series = [];

    if (res) {
        res.forEach(item => {
            xCategory.push(item.date_start)

            for (const [subtotalKey, subtotalValue] of Object.entries(item.subtotals)) {
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

export {formatData}