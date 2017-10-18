import React, { Component } from 'react'; //import the React and its property -- Component

//class base component extending the Component property
class SearchBar extends Component {
  //inistanizate the constructor
  constructor(props){
    super(props);

    //initialize the state, which is a plain js object
    this.state = { term:'' };

  }

  //the render method will return the JSX
  render(){
    // the input JSX with onChange eventlistener and function when event trigger
    return (
      <div className='search-bar'>
      <input 
             onChange={(event) => {
      //set the state by using this.setState() method
      // setting, or reassing the state from user's input and assign to target.value
      this.onInputChange(event.target.value)
    }}
    placeholder="Search Videos"/>
    </div>
  )
  }


  onInputChange(term){
    this.setState({term:term});
    this.props.onSearchTermChange(term);
  }

}

//exporting the SearchBar class to index.js which is the main react js file
export default SearchBar;
