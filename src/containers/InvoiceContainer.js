import { connect } from 'react-redux'
import { addItem, removeItem, updateItem } from '../actions'
import Invoice from '../components/Invoice'

const dispatchUpdateByEventName = (dispatch, item, event) => {
    switch (event.target.name) {
        case 'name':
            dispatch(updateItem({
                ...item,
                name: event.target.value
            }));
        case 'quantity':
            dispatch(updateItem({
                ...item,
                quantity: event.target.value
                
            }));
        case 'price':
            dispatch(updateItem({
                ...item,
                price: event.target.value
            }));
        default: 
            dispatch(updateItem(item));
    }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = (dispatch) => ({
  onAddItem: () => dispatch(addItem()),
  onRemoveItem: id => dispatch(removeItem(id)),
  onUpdateItem: (item, event) => dispatchUpdateByEventName(dispatch, item, event)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Invoice)
