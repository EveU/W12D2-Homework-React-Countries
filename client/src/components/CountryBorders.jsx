var React = require('react');

var CountryBorders = React.createClass({

  handleClick: function(e){
    console.log(e.target);
  },

  render: function(){
    if(this.props.borders.length == 0){return <h5>No borders</h5>}

    var borders = this.props.borders.map(function(border){
      var bordersWithInfo = this.props.countries.map(function(country, index){
        if(country.alpha3Code == border){return(<button key={index} value={index}> {country.name} </button>)}
      }.bind(this));
      return bordersWithInfo
    }.bind(this));

    return(
      <div  onClick={this.handleClick}> 
      <h4> Borders </h4>
      <p> {borders} </p>
      </div>
    ) 
  }
});

module.exports = CountryBorders;