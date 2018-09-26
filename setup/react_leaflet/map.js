
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';


const host = "http://localhost:8000/map";
export default class DraggableExample extends Component {

	componentDidMount(){
		axios.get(host)
		.then(res => {
			let lat = res.data.latitude;
			let lng = res.data.longitude;
			console.log(lat , lng)
			this.setState({lat:lat , lng:lng})
		})
		.catch(err => console.log(err))
	}

  state = {
      lat: 0,
      lng: 0,
      latMarker: 0,
      lngMarker: 0,
    zoom: 6,
    draggable: true,
  }
  refmarker = React.createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const markerPosition = [this.state.lat, this.state.lng]
    const title = 'Hi There';

    return (
      <Map center={position} zoom={this.state.zoom} style={{height:"400px"}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
        riseOnHover={true}
        opacity={0.3}
        	title={title}
          draggable={this.state.draggable}
          onDragend={this.updatePosition}
          position={markerPosition}
          ref={this.refmarker}>
          <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}