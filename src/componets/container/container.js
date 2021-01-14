import React, { Component } from "react"
import Search from '../search/search'
import API from '../../utils/api'
import Table from '../table/table'

class Container extends Component {
    state = { employees: [] }
    initialEmployeelist;
    componentDidMount() {
        this.getEmployees()
    }
    getEmployees = () => {
        API.getEmployees().then((res) => {
            this.initialEmployeeList = res.data.results;
            this.setState({ employees: res.data.results });
        }).catch((err) => console.log(err))
    }
    handleInputChange = (event) => {
        console.log("this.handleInputChange")
        const searchName = event.target.value
        if (searchName) {
            this.searchNames(searchName);
        } else if (!searchName) {
            this.setState({ employees: this.initialEmployeeList });
        }
    }
    searchNames = (searchName) => {
        const filteredEmployees = this.initialEmployeeList.filter((employee) => {
            let uppercaseFirstName = employee.name.first.toUpperCase();
            let uppercaseSearchName = searchName.toUpperCase();
            if (
                employee.name.first.toUpperCase().includes(uppercaseSearchName) ||
                employee.name.last.toUpperCase().includes(uppercaseSearchName)
            ) {
                return employee;
            }
            //return uppercaseName.includes(uppercaseSearchName);
        });
        console.log(filteredEmployees);
        this.setState({ employees: filteredEmployees });
    }
    sortNames = () => {
        console.log ("name")
        let sortedEmployees = this.state.employees;
        console.log(sortedEmployees);
        sortedEmployees.sort(function (a, b) {
            let nameA = a.name.first.toUpperCase();
            let nameB = b.name.first.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({ employees: sortedEmployees });
    }
    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} />
                <Table employees={this.state.employees} sortNames={this.sortNames} />
            </div>
        )
    }
}
export default Container