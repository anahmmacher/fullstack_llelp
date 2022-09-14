import React from "react";

class BusinessMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.3387, lng: - 121.8853}, //San Jose
      zoom: 8
    };
  
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses)
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