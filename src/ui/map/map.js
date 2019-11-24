import React from 'react';
import mapboxgl from 'mapbox-gl';

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
      width: '80%',
      height: '360px',
    };

    return <div style={style} ref={el => this.mapContainer = el} className='map'/>;
  }
}
