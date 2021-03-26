import React from 'react';

class SearchBar extends React.Component {
    
    state = { term:'' };
    
    // We need an arrow function as we can't use "this.state" property inside the usual function (Video №88) or we can pass it directly to our form's props
    // {event => this.onFormSubmit()}
    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(event) => this.setState({term: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

// this.onInputChange() - automatically called when the app renders 
// this.onInputChange - doesn't automatically called when the app renders 
// (event) => console.log(event.target.value)

// onInputChange(event) {
//     console.log(event.target.value)
// }