import React from "react"

function Search(props) {
    return (
        <input type="text" placeholder="start typing here" onChange={props.handleInputChange}></input>
    )
}
export default Search