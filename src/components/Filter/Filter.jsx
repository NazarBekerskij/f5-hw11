import { Component } from "react";


class Filter extends Component {
    render(){
        const {onFilter} = this.props
        return(
            <>
            <input type="text" onChange={(evt) => onFilter(evt.target.value)} />
            </>
        )
    }
}

export default Filter