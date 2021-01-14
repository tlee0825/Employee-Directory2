import React from "react"
import TableHead from '../table head/tablehead'

function Table(props) {
    return (
        <div>
            <table className="container">
                <thead>
                    <TableHead sortNames={props.sortNames} />
                </thead>
                <tbody>
                    {props.employees.map((employee) => (
                        <tr key={employee.login.username}>
                            <td>
                                <img src={employee.picture.thumbnail} alt="Profile Pic" />
                            </td>
                            <td>
                                {employee.name.first} {employee.name.last}
                            </td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default Table