import { connect } from 'react-redux'
import { updateTax } from '../actions'
import Footer from '../components/Footer'
import { getSubTotal, getTaxTotal, getTotal } from '../util/util';

const mapStateToProps = state => ({
  subTotal: getSubTotal(state.items),
  taxTotal: getTaxTotal(state.items, state.taxRate),
  tax: state.taxRate,
  total: getTotal(state.items, state.taxRate)
})

const mapDispatchToProps = (dispatch) => ({
  onChange: e => dispatch(updateTax(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
