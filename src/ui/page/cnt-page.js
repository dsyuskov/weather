import { connect } from 'react-redux';
import Page from './cmp-page';
import { getWeater } from '../../actions/actions'

function mapStateToProps (state) {  
  return { 
    city: state.weather.city
  }
}

const mapDispathToProps = {
  getWeater
}

export default connect(mapStateToProps, mapDispathToProps)(Page);