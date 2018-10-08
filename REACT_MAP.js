import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Circle,FeatureGroup,LayerGroup,LayersControl,Map,Marker,Popup,Rectangle,TileLayer,} from 'react-leaflet';
import { Container, Row, Col ,ListGroup ,ListGroupItem} from 'reactstrap';
import Example from './navigation';


    "axios": "^0.18.0",
    "bootstrap": "^4.1.3",
    "leaflet": "^1.3.4",
    "react": "^16.5.2",
    "react-bootstrap": "^0.32.4",
    "react-dom": "^16.5.2",
    "react-leaflet": "^2.1.0",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.4",
    "reactstrap": "^6.5.0"

    
 <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
 <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css">


const { BaseLayer, Overlay } = LayersControl

const HOST = "http://localhost:8000";

class LayersControlExample extends Component {

    state = {
      latCustOne: 51.505,
      lngCustOne: -0.09,
      latCustTwo: 51.49,
      lngCustTwo: -0.08,
      firstNameCustOne:'',
      lastNameCustOne:'',
      firstNameCustTwo:'',
      lastNameCustTwo:'',
      genderOne:'',
      genderTwo:'',
      ageOne:null,
      ageTwo:null,
      zoom: 6,
      draggable: true
  }

    componentDidMount(){
    let url = HOST + this.props.location.pathname;

    axios.get(url).then(res => {
          console.log(res.data);

      let firstName = res.data[0].FirstName;
      let lastName = res.data[0].LastName;

      let firstNameTwo = res.data[1].FirstName;
      let lastNameTwo = res.data[1].LastName;

      let genderOne= res.data[0].Gender;
      let genderTwo= res.data[1].Gender;
      let str1 = res.data[0].BirthDate.split('T');
      let str2 = res.data[1].BirthDate.split('T');

      let ageOne =  str1[0];
      let ageTwo = str2[0]

      let lat = res.data.latitude;
      let lng = res.data.longitude;
      this.setState(
        {lat:lat ,lng:lng , latM:lat , lngM:lng ,
         firstNameCustOne:firstName , lastNameCustOne:lastName,
         firstNameCustTwo:firstNameTwo , lastNameCustTwo:lastNameTwo,
         genderOne:genderOne , genderTwo:genderTwo,
         ageOne:ageOne , ageTwo:ageTwo
       })
    })
};



  render() {
    const center = [this.state.latCustOne, this.state.lngCustOne]
const rectangle = [this.state.latCustTwo, this.state.lngCustTwo]
    return (
      <Container className='wrapper'>
        <Row>
          <Col style={{padding:0, margin:0}} md='4'>
            <div className='containerListGroup'>
              <Example />

              <ListGroup flush className='listGroup'>

                  <ListGroupItem className='listText'>
                      First Name: <h3 className='firstNameOne'>{this.state.firstNameCustOne}</h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>
                      Last Name: <h3 className='firstNameOne'>{this.state.lastNameCustOne} </h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>
                      Gender : <h3 className='firstNameOne'>{this.state.genderOne} </h3>
                 </ListGroupItem>

                  <ListGroupItem className='listText'>
                      Age : <h3 className='firstNameOne'>{this.state.ageOne} </h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>Vestibulum at eros</ListGroupItem>
                </ListGroup>

                <ListGroup flush className='listGroup'>

                  <ListGroupItem className='listText'>
                      First Name: <h3 className='firstNameOne'> {this.state.firstNameCustTwo} </h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>
                      Last Name:<h3 className='firstNameOne'> {this.state.lastNameCustTwo} </h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>
                      Gender : <h3 className='firstNameOne'>{this.state.genderTwo} </h3>
                  </ListGroupItem>

                  <ListGroupItem className='listText'>Age : <h3 className='firstNameOne'>{this.state.ageTwo} </h3></ListGroupItem>
                  <ListGroupItem className='listText'>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          <Col style={{padding:0, margin:0}} md='8'>
      <Map center={center} zoom={12} style={{height:'500px'}}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                Location : {center}. <br /> Gender {this.state.genderOne} <br/ > Age 17
              </Popup>
            </Marker>
          </Overlay>
          <Overlay name="Marker with popup">
            <Marker position={rectangle}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle
              className='markerAnim'
                center={center}
                fillColor="#4E3FF6"
                color="#4E3FF6"
                radius={100}
              />
              <LayerGroup>
                <Circle
                  className='markerAnim'
                  center={rectangle}
                  color="#0300F6"
                  fillColor="#0300F6"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={center} radius={200} />
              <Circle center={rectangle} radius={200} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
      </Map>
       </Col>
      </Row>
    </Container>
    )
  }
}

export default withRouter(LayersControlExample)