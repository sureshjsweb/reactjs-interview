import React from "react";
import { Table } from "../common/table/Table";

export const EmployeeInfo = (props) => {
    const { emp } = props;
    let heading = [...Object.keys(emp[0]), 'Actions'];
    return (<Table data={emp} heading={heading} />);
}

export default EmployeeInfo;