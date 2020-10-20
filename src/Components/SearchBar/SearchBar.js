import React from 'react';
import './SearchBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            arrow: 'hidden',
            searchError: '',
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
        if(this.state.term && this.state.location){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault();
            this.setState({ arrow: "visible"});
            this.setState({ searchError: ''});
        }else{
            this.setState({ searchError: 'Please ensure you fill the What food? and Where? fields before clicking the Let\'s Go button'});
        }
        
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
                <div className="SearchBar-sort-options fadeUp">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input className="fadeUp one" placeholder="What food? burgers, pizza, Chinese, Indian....." onChange={this.handleTermChange} />
                    <input className="fadeUp two" placeholder="Where? Manchester, New York, Rome....." onChange={this.handleLocationChange} />
                </div>
                <p className="errorMessage">{this.state.searchError}</p>
                <div className="SearchBar-submit fadeUp">
                    <button onClick={this.handleSearch} >Let's Go</button>
                </div>
                <div className={`arrow ${this.state.arrow}`}>
                    <AnchorLink href="#BusinessList" className="anchor"><img src={require('../../Images/downArrow.svg')} alt=""></img></AnchorLink>
                </div>
            </div>
        )
    }
}

export default SearchBar;