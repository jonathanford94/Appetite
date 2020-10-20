import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  // function that is used to trigger the API search, which is triggered by the let's go button in the searchBar
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then( businesses => {
        this.setState({
          businesses: businesses
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="homePage">
          <img className="headerImg" src={require('../../Images/backdrop1.svg')} alt=""></img>
          <header>
            <a className="headerTitle" href="http://localhost:3000/">
              <span className="logoWrapper fadeUp">
                <img className="logo" src={require('../../Images/fastfood.svg')} alt=""></img>
                <h1>Appetite</h1>
              </span>
            </a>
          </header>
          <SearchBar searchYelp={this.searchYelp} />
        </div>  
        <BusinessList businesses={this.state.businesses}/> 
      </div>
    )
  }
}

export default App;