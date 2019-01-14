import React, {Component} from "react"

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            names: ['Josh', 'Savanna', 'Andrew', 'Jeff', 'Tracee', 'Makinzee'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterNames(userInput) {
        let names = this.setState.names;
        let filteredNames = []

        for (var i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames, filteredNames})
    }

    render(){
        return(
            <div className='puzzleBox'>
                <h4>Filter String</h4>
                <span className='puzzleText'> Names: {(this.state.names. null, 10)}</span>
                <input className='inputLine' onChange={(e) => {this.handleChange(e.target.value)}}></input>
                <button className="confirmationButton" onClick={(this.state.filteredNames, null, 10)}> Filter </button>
                <span className='resultsBox filterStringRB'>Filtered Names: {(this.state.filteredNames, null, 10)} </span>

            </div>
        )
    }
}

