var React = require('react');
var CountryBorders = require('./CountryBorders');
var CountryLanguage = require('country-language');

var CountryDisplay = React.createClass({
  render: function(){

    if(!this.props.country){return <h5>No country selected</h5>}

    var languageCode = this.props.country.languages[0];
    var language = CountryLanguage.getLanguage(languageCode);
      
    return(
      <div>
        <h4>{this.props.country.name}, {this.props.country.region}</h4>
        <h5>Capital City: {this.props.country.capital}</h5>
        <h5>Native Language: {language.name[0]}</h5>
        <CountryBorders onSelectCountry={this.props.onSelectCountry}borders={this.props.country.borders} countries={this.props.countries}></CountryBorders>
      </div>
    )

  }
});

module.exports = CountryDisplay;