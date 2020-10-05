import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match', 
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
        };
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    // method to change the styling of selected sort by options
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    // method to change the sort by value when clicked
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption});
    }

    // updates the term of the state
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    // updates the location of the state
    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    // method to use the searchYelp method passed down from app
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault()
    }

    // renders the sort by options from the sort by options object in the constructor
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue=this.sortByOptions[sortByOption];
            return ( <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >{sortByOption}</li> );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch} >Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;