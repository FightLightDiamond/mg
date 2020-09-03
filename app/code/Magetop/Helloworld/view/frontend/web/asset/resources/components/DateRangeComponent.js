import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment'
import { Button } from 'react-bootstrap';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class DateRangeComponent extends React.Component {
    handleEvent = (start, end) => {
        const { handleDateRangePicker } = this.props
        handleDateRangePicker(start, end)
    }

    render() {
        const { start, end, label } = this.props
        const ranges = {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }

        return (
            <div>
                <div style={{ padding: "10px", "paddingLeft": "30px" }}>
                    <b>Thời gian thống kê :</b>
                </div>
                <DateRangePicker
                    onCallback={this.handleEvent}
                    initialSettings={{
                        locale: { format: "YYYY-MM-DD" },
                        alwaysShowCalendars: true,
                        startDate: start,
                        endDate: end,
                        ranges: ranges
                    }}
                >
                    <Button
                        variant="outline-secondary"
                        style={{ height: 40, minWidth: 200, marginBottom: "15px" }}>
                        <div
                            style={{ color: 'black', fontWeight: 'bold' }}>
                            {label}
                        </div>
                    </Button>
                </DateRangePicker>
            </div>
        );
    }
}