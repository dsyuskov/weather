import { connect } from 'react-redux';
import Page from './cmp-page';
import { getTemp } from '../../actions/weather'

function mapStateToProps (state) { 
 
  return { 
    city: state.weather.collection,
  }
}

const mapDispathToProps = {
  getTemp
}

export default connect(mapStateToProps, mapDispathToProps)(Page);