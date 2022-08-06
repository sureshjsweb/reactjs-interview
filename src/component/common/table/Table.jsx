import React from "react";

export const Thead = (props) => {
    return props.titles.length && <thead style={{ backgroundColor: "lightgray" }}><tr>{props.titles.map((th) => <th>{th}</th>)}</tr></thead>;
};

export const TBody = (props) => {
    return props.data.length && <tbody style={{ backgroundColor: "lightgreen" }}>{props.data.map(tr => <TR row={tr} />)}</tbody>;
};

export const TR = (props) => {
    const { row } = props;
    return props.row && <tr>
        <TD>{row.photo}</TD>
        <TD>{row.fname}</TD>
        <TD>{row.lname}</TD>
        <TD>{row.dob}</TD>
        <TD>{row.designation}</TD>
        <TD>{row.experience}</TD>
    </tr>
}

export const TD = ({ children }) => {
    return <td style={{ width: "150px" }}>{children}</td>;
}

export const Table = ({ heading, data }) => {
    return (<table style={{ border: "1px solid black" }}>
        {
            heading.length && <Thead titles={heading} />
        }
        {
            data.length && <TBody data={data}></TBody>
        }
    </table>);
};