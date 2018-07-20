import React, {Component} from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />
                Value = {this.state.term}
            </div>
        );
    }
}

export default SearchBox;