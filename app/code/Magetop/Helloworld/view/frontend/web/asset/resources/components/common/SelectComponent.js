import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment'

// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class SelectComponent extends React.Component {
    renderOption = (options) => {
        let o = ''
        for (const [key, value] of options) {
            o += `<option value="${key}">${value}</option>`
        }

        return o
    }
    
    render() {
        const {handleInterval} = this.props

        const options = {
            hour: 'Hour',
            day: 'Day',
            week: 'Week',
            quarter: 'Quarter',
            year: 'Year',
        }

        return (
            <div>
                <label >interval</label>
                <select className={'form-control'}
                        onChange={(e) => handleInterval(e.target.value)}>
                    {
                        Object.entries(options).map(function ([key, value]) {
                            return <option key={key} value={key} >{value}</option>;
                        })
                    }
                </select>
            </div>
        );
    }
}