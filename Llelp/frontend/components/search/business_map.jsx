import React from "react";

class BusinessMap extends React.Component {


  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.3387, lng: - 121.8853}, //San Jose
      zoom: 11,
			mapTypeControl: false,
			streetViewControl: false,

    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
		const geocoder = new google.maps.Geocoder();
		let near = this.props.near;

				geocoder.geocode({'address': near}, function(results, status){
					if(status === 'OK'){
							(this.map).setCenter(results[0].geometry.location)
						} else {
					return(alert("Geocode was not successful for the following reason: " + status));
				}
				});
			};

  // componentDidUpdate() {
  //   this.MarkerManager.updateMarkers(this.props.businesses)
  // }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default BusinessMap