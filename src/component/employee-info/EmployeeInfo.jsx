import React from "react";
import { Table } from "../common/Table";

export const EmployeeInfo = (props) => {
    const { emp } = props;
    let heading = (emp.length > 0) ? Object.keys(emp[0]) : [];
    return (<Table data={emp} heading={heading} />);
}

export default EmployeeInfo;