import React from 'react';
import mapboxgl from 'mapbox-gl';
import { translite } from "../../service";

mapboxgl.accessToken = 'pk.eyJ1IjoieXVza292c3MiLCJhIjoiY2szNnRoODJuMDR2NTNubWhmZ2tyNHcweiJ9.nqpNmNuvXFtwx0VFoqqxGQ';

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 20,
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [this.props.lon, this.props.lat],
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 10
    });
  }

  componentDidUpdate() {
    this.map.setCenter([this.props.lon, this.props.lat]);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };
    
    const lat = (''+this.props.lat).split('.');
    const lon = (''+this.props.lon).split('.');

    return (
      <div className='mapContainer'>
        <div style={style} ref={el => this.mapContainer = el} className='map'/>
        <div>{translite(this.props.lang,'words', 'lat')}: { lat[0] }&deg;{ lat[1] }'</div>
        <div>{translite(this.props.lang,'words', 'lon')}: { lon[0] }&deg;{ lon[1] }'</div>
      </div>
    )
  }
}
