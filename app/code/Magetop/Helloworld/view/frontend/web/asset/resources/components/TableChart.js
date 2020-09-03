import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap'
import CardChart from './CardChart'
export default class TableChart extends React.Component {
    render() {
        let SaleData = this.props.SaleReportData
        let FinanceData = this.props.FinanceReport
        let WebsiteData = this.props.WebsiteReport
        return (
            <Tabs defaultActiveKey="sale-report" id="uncontrolled-tab-example">
                <Tab eventKey="sale-report" title="Báo cáo bán hàng">
                    <div style={{ "padding": "5px", "fontWeight": "bold" }} >Thực hiện các chiến lược kinh doanh hiệu quả bằng việc phân tích, so sánh lượng đơn hàng bán theo thời gian, kênh bán hàng…</div>
                    <Table responsive="md">
                        <tbody>
                            {
                                SaleData.map((element, i) => {
                                    return (
                                        <tr key={i} >
                                            {element.map((value, index) => {
                                                return (
                                                    <td key={index} >
                                                        <CardChart
                                                            title={value.title}
                                                            subTitle={value.subTitle}
                                                            link={value.link}
                                                        />
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="finance" title="Finances Report">
                    <div style={{ "padding": "5px", "fontWeight": "bold" }} >Báo cáo dòng tiền thu chi theo Ngày, theo Tháng, theo Quý,...</div>
                    <Table responsive="md">
                        <tbody>
                            {
                                FinanceData.map((element, i) => {
                                    return (
                                        <tr key={i} >
                                            {element.map((value, index) => {
                                                return (
                                                    <td key={index} >
                                                        <CardChart
                                                            title={value.title}
                                                            subTitle={value.subTitle}
                                                            link={value.link}
                                                        />
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="website" title="Website Report">
                    <div style={{ "padding": "5px", "fontWeight": "bold" }} >Báo cáo website thống kê và phân tích lưu lượng truy cập website của bạn. Nâng cao cơ hội bán hàng.</div>
                    <Table responsive="md">
                        <tbody>
                            {
                                WebsiteData.map((element, index) => {
                                    return (
                                        <tr key={index} >
                                            {element.map((value, i) => {
                                                return (
                                                    <td key={i}>
                                                        <CardChart
                                                            title={value.title}
                                                            subTitle={value.subTitle}
                                                            link={value.link}
                                                        />
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Tab>

            </Tabs>
        )
    }
}