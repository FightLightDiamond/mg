import React from 'react';
import TableChart from "../components/TableChart";
import { SaleReportData, FinanceReport, WebsiteReport } from "../../config/chart-config"


class TableChartContainer extends React.Component {
    render() {
        return (
            <TableChart
                SaleReportData={SaleReportData}
                FinanceReport={FinanceReport}
                WebsiteReport={WebsiteReport}
            />
        );
    }
}
export default TableChartContainer;

