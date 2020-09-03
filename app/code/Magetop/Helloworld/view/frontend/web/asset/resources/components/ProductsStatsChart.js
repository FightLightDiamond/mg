import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';
import DateRangeComponent from "./DateRangeComponent";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import moment from 'moment'
import Select from 'react-select'
import { repostProductsTransformer } from "../../helpers/TransformerChart";
import _ from "lodash";
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Link } from "react-router-dom";
const animatedComponents = makeAnimated();
const optionStatistic = [
    { value: 6, label: 'Net Revenue', bind: 'subtotals', bind2: 'net_revenue' },
    { value: 5, label: 'Order Count', bind: 'subtotals', bind2: 'orders_count' },
]
const optionDisplay = [
    { value: 1, label: 'Interval', bind: 'interval' },
]
export default class ProductsStatsChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnLabel: moment().format("DD/MM/YYYY").toString(),
            startDate: moment().startOf('day').format('YYYY-MM-DDTHH:mm:ss'),
            endDate: moment().endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
            chartData: [],
            tableData: [],
            selectedStatistic: [optionStatistic[0]],
            selectedDisplay: [optionDisplay[0]],
            columnData: [],
            sortColumn: { value: null, label: null, order: null },
        };
        this.handleCallback = this.handleCallback.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentWillReceiveProps(props, state) {
        const data = props.repost_products_stats.intervals;
        let chartData = [];
        let tableData = [];
        if (data !== undefined && data.length > 0) {
            data.forEach((element) => {
                chartData.push([element.interval, element.subtotals.net_revenue])
                tableData.push(element)
            })
        }
        this.setState({ ...state, chartData: chartData, tableData: tableData })
    }

    componentDidMount() {
        this.getColumnData();
        this.getData();
    }

    getData() {
        const { getReportsProductsStats } = this.props
        const params = {
            '_locale': 'user',
            'after': this.state.startDate,
            'before': this.state.endDate,
            'interval': 'day',
            'extended_info': 'true',
            'order': 'asc',
            'per_page': 100
        }
        getReportsProductsStats(params)
    }

    getColumnData = () => {
        let arrayColumn = this.state.selectedStatistic.concat(this.state.selectedDisplay);
        arrayColumn.sort(function (a, b) {
            // Compare the 2 dates
            if (a.value < b.value) return -1;
            if (a.value > b.value) return 1;
            return 0;
        });
        this.setState({ columnData: arrayColumn })
    }

    handleStatisticChange = async selectedStatistic => {
        if (selectedStatistic === null) {
            selectedStatistic = [];
        }
        await this.setState(
            { ...this.state, selectedStatistic }
        );
        this.getColumnData();
    };
    handleDisplayChange = async selectedDisplay => {
        if (selectedDisplay === null) {
            selectedDisplay = [];
        }
        await this.setState(
            { ...this.state, selectedDisplay }
        );
        this.getColumnData();
    };
    handleCallback(start, end, label) {
        if (start.format("DD/MM/YYYY").toString() === end.format("DD/MM/YYYY").toString()) {
            this.setState({
                ...this.state,
                btnLabel: start.format("DD/MM/YYYY").toString()
            });
        } else {
            this.setState({
                ...this.state,
                btnLabel: start.format("DD/MM/YYYY").toString() + " - " + end.format("DD/MM/YYYY").toString()
            });
        }
        this.setState({
            ...this.state,
            startDate: start.startOf('day').format('YYYY-MM-DDTHH:mm:ss'),
            endDate: end.endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
            sortColumn: { value: null, label: null, order: null },
        })
        this.getData();
    }
    sortData(sortData) {
        let tableData = this.state.tableData;
        if (sortData.value === this.state.sortColumn.value) {
            if (this.state.sortColumn.order === 'asc') {
                this.setState({
                    ...this.state,
                    tableData: tableData.reverse(),
                    sortColumn: { value: sortData.value, label: sortData.label, order: 'desc' }
                })
            } else {
                this.setState({
                    ...this.state,
                    tableData: tableData.reverse(),
                    sortColumn: { value: sortData.value, label: sortData.label, order: 'asc' }
                })
            }
        } else {
            if (sortData.bind2 === undefined) {
                tableData = _.orderBy(tableData, function (obj) {
                    return obj[sortData.bind]
                }, ['asc'])
            } else {
                tableData = _.orderBy(tableData, function (obj) {
                    return obj[sortData.bind][sortData.bind2]
                }, ['asc'])
            }
            this.setState({
                ...this.state,
                tableData: tableData,
                sortColumn: { value: sortData.value, label: sortData.label, order: 'asc' }
            })
        }
    }



    render() {
        const data = repostProductsTransformer('Product Stat Chart', this.state.chartData);
        const tableColumn = this.state.columnData;
        return (
            <div style={{ padding: "10px", paddingLeft: "10px" }} >
                {this.state.chartData.length > 0 && <HighchartsReact highcharts={Highcharts} options={data} key={this.state.chartData} />}
                {this.state.chartData.length === 0 && <h1>No Data</h1>}
                <Container style={{ width: '100%' }}>
                    <Row>
                        <div>Thống kê: </div>
                        <Col>
                            <Select
                                value={this.state.selectedStatistic}
                                onChange={this.handleStatisticChange}
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={this.state.selectedStatistic}
                                isMulti
                                options={optionStatistic} />
                        </Col>
                        <div>Hiển thị: </div>
                        <Col>
                            <Select
                                value={this.state.selectedDisplay}
                                onChange={this.handleDisplayChange}
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={this.state.selectedDisplay}
                                isMulti
                                options={optionDisplay} />
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <DateRangeComponent
                        handleDateRangePicker={this.handleCallback}
                        start={this.state.startDate}
                        end={this.state.endDate}
                        label={this.state.btnLabel}
                    />
                </Row>

                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                            {tableColumn.map((_, index) => (
                                <th key={index} onClick={() => this.sortData(tableColumn[index])}>{tableColumn[index].label}
                                    {(this.state.sortColumn.value === tableColumn[index].value) && (this.state.sortColumn.order === 'asc') && <svg paddingLeft="10px" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-sort-down-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 3a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 3z" />
                                        <path fill-rule="evenodd" d="M5.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 12.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 6.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0-9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5z" />
                                    </svg>}
                                    {(this.state.sortColumn.value === tableColumn[index].value) && (this.state.sortColumn.order === 'desc') && <svg paddingLeft="10px" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-sort-up-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 14a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-1 0v10a.5.5 0 0 0 .5.5z" />
                                        <path fill-rule="evenodd" d="M5.354 5.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L3 4.207l1.646 1.647a.5.5 0 0 0 .708 0zM7 6.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0-9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5z" />
                                    </svg>}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((value, index) => (
                            <tr key={index}>
                                {(this.state.selectedStatistic.length !== 0 || this.state.selectedDisplay.length !== 0) &&
                                    <td>{index}</td>}
                                {tableColumn.map((v, i) => {
                                    if (v.bind2) {
                                        if (v.bind2 === "category_ids") {
                                            return <td key={i}><div>{value[v.bind][v.bind2].map((categoryID, index, cateArr) => {
                                                if (index !== cateArr.length - 1) {
                                                    return categoryID + " , ";
                                                }
                                                return categoryID;
                                            })}</div></td>
                                        }
                                        if (v.bind2 === "image") {
                                            return <td key={i}><div dangerouslySetInnerHTML={{ __html: value[v.bind][v.bind2] }} /></td>
                                        }
                                        if (v.bind2 === "price") {
                                            return <td key={i}><div>{value[v.bind][v.bind2]}{"đ"}</div></td>
                                        }
                                        return <td key={i}>{value[v.bind][v.bind2]}</td>
                                    } else {
                                        if (v.bind === "net_revenue") {
                                            return <td key={i}><div>{value[v.bind]}{"đ"}</div></td>
                                        }
                                        return <td key={i}>{value[v.bind]}</td>
                                    }
                                })}
                            </tr>

                        ))}
                    </tbody>
                </Table>
                <Link to="/" variant="danger">Quay lại</Link>
            </div >
        )
    }
}

