var React = require('react');

var CountrySelect = React.createClass({

  getInitialState: function(){
    return ( {selectedIndex: null} );
  },

  handleSelect: function(e){
    e.preventDefault;
    var index = e.target.value;
    this.setState( {selectedIndex: index} );
    var currentCountry = this.props.countries[index];
    this.props.onSelectCountry(currentCountry);
  },

  render: function(){

    var countryNames = this.props.countries.map(function(country, index){
      return(<option key={index} value={index}> {country.name} </option>)
    });

    return(
      <div>
        <select value={this.state.selectedIndex} onChange={this.handleSelect} >
          <option value="">Choose a country...</option>
          { countryNames }
        </select>
      </div>
    )
  }
});

module.exports = CountrySelect;