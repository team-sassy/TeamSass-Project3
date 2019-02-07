import React from 'react';

// enter city where would like to travel
class CitySearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Where would you like to travel?</h3>
          <City items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="city">
              Enter city name here
            </label>
            <input
              id="city"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Create trip{this.state}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class City extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <CitySearch />,
    document.getElementById('city')
  );

// enter dates of trip
function Dates(props) {
    return <div id="dates">
    
    </div>
}

function Search(props) {
    return <div id="search">
 {/* search flights */}

 {/* search dining */}

 {/* search attractions    */}
  </div>
  }
  
  export default Search;