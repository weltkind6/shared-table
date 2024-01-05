import React from 'react';
import {Table} from "reactstrap";
import {fullData} from "../../store/data";

const UserTable = () => {

    const renderUsers = () => {
        return fullData.map((props) => {
            return (
                <tr key={props.id}>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    {props.year && <td>{props.year}</td>}
                </tr>
            );
        });

    }

    return (
        <Table striped>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Year</th>
            </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
        </Table>
    );
};

export default UserTable;
