import React, {Component} from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(
            <div>
                <input                
                 onChange={event => this.onSearchTermChange(event.target.value)}  />
                Value = {this.state.term}
            </div>
        );
    }

    onSearchTermChange(term){
        this.props.onSearchTermChange(term);
        this.setState({term});
    }

}

export default SearchBox;