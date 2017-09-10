import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        // this.refs.map is where on the screen
        // the map gets rendered to
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return (
            // this.refs.map
            <div ref="map" />
        )
    }
}

export default GoogleMap