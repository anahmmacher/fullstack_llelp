import React from "react";

class BusinessMap extends React.Component {


  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.3387, lng: - 121.8853}, //San Jose
      zoom: 8,
			mapTypeControl: false
    };
		let near = this.props.near;
		geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(this.mapNode, mapOptions);
		
			if(geocoder){
				geocoder.geocode({'address': near}, function(results, status){
					if(status == google.maps.GeocoderStatus.OK){
						if(status != google.maps.GeocoderStatus.ZERO_RESULTS){
							this.map.setCenter(results[0].geometry.location)
							this.MarkerManager = new MarkerManager(this.map);
    					this.MarkerManager.updateMarkers(this.props.businesses)
						} else {
							alert("no results found")
						}
				} else {
					alert("Geocode was not successful for the following reason: " + status);
				}
				});
			} else {
				this.MarkerManager = new MarkerManager(this.map);
    		this.MarkerManager.updateMarkers(this.props.businesses)
			}



  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses)
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default BusinessMap