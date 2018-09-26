import React , { Component } from 'react';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const HOST = "http://localhost:8000";


// leaflet styles needed in index.html
// <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
// <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css">

export default class DraggableExample extends Component {
  state = {
      lat: 0,
      lng: 0,
      latM: 0,
      lngM: 0,
      zoom: 6,
      draggable: true,
  }

  componentDidMount(){
    console.log('component did Mount');
    let url = HOST + "/new";
    axios.get(url).then(res => {
      console.log(res.data)
      let lat = res.data.latitude;
      let lng = res.data.longitude;
      this.setState({lat:lat ,lng:lng , latM:lat , lngM:lng})
    })
  };
  refmarker = React.createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
 
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const markerPosition = [this.state.latM, this.state.lngM]
    console.log(position);
    console.log(markerPosition)
    return (
      <Map center={position} zoom={this.state.zoom} style={{height:'400px'}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
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


