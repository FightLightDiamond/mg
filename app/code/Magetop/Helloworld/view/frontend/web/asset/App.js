import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import MainRoutePlace from "./routes/MainRoutePlace";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>ABCDEF</h1>
                <h2>xyz</h2>
                <h3>gde</h3>
                <MainRoutePlace />
                <ToastContainer />
            </div>
        );
    }
}
