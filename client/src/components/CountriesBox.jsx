var React = require('react');
var CountrySelect = require('./CountrySelect');
var CountryDisplay = require('./CountryDisplay');

var CountriesBox = React.createClass({
  getInitialState: function(){
    return {
      countries: [],
      currentCountry: null
    }
  },

  setCurrentCountry: function(country){
    this.setState( { currentCountry: country } )
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( {countries: data} );
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4> Countries </h4>
        <CountrySelect onSelectCountry={this.setCurrentCountry} countries={this.state.countries}></CountrySelect>
        <CountryDisplay onSelectCountry={this.setCurrentCountry}country={this.state.currentCountry} countries={this.state.countries}></CountryDisplay>
      </div>
    )
  }
});

module.exports = CountriesBox;