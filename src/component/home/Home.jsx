import React from 'react';
import Emp from "../../data/emp-data.json";
import EmployeeInfo from "../employee-info/EmployeeInfo";

class Home extends React.Component {

    render() {
        return (<React.Fragment>
            <h2 className="text-center">Home</h2>
            <EmployeeInfo emp={Emp} />
        </React.Fragment>);
    }

}

export default Home;