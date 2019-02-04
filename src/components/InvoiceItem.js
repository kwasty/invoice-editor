import React from 'react';

class InvoiceItem extends React.Component {
    validatePrice(e) {
        let display = 'none';
        let msg = '';
         if (e.target.value < 0) {
            display = 'inherit';
            msg = 'Price must be greater than or equal to 0.';
         }

        this.refs.priceValidate.style.display = display;
        this.refs.priceValidate.innerHTML = msg;
    }

    validateQuantity(e) {
        let display = 'none';
        let msg = '';
        if (e.target.value < 0) {
            display = 'inherit';
            msg = 'Quantity must be greater than or equal to 0.';
        } else if (e.target.value % 1 !== 0) {
            display = 'inherit';
            msg = 'Quantity must be an integer (e.g. 0, 1, 2...).';
        }

        this.refs.quantityValidate.style.display = display;
        this.refs.quantityValidate.innerHTML = msg;
   }

   onBlur(e) {
       e.target.value = parseFloat(e.target.value).toFixed(2);
   }

    render() {
        const quantity = this.props.item.quantity;
        const price = this.props.item.price;

        let total = (Math.round(quantity) * price).toFixed(2);

        

        if (isNaN(total)) {
            total = '0.00';
        }

        return (
            <tr>
                <td>
                    <input
                        name='itemName'
                        type='text'
                        onChange={(e) => this.props.onUpdateItem(this.props.item, e)}
                    />
                </td>

                <td>
                    <input
                        name='quantity'
                        type='number' min='0'
                        onChange={(e) => {this.props.onUpdateItem(this.props.item, e); this.validateQuantity(e); }}
                    />
                    <p className='Validate' ref='quantityValidate'></p>
                </td>

                <td className='PriceTableData'> 
                    {'$'}
                    <input 
                        name='price'
                        type='number' min='0' step='0.01'
                        onBlur={(e) => this.onBlur(e)}
                        onChange={(e) => {this.props.onUpdateItem(this.props.item, e); this.validatePrice(e);}}
                    />
                    <p className='Validate' ref='priceValidate'></p>
                </td>

                <td>
                    {'$' + total}
                </td>

                <td>
                    <a className='Delete' onClick={this.props.onDeleteItem}>
                    </a>
                </td>
            </tr>
            
        )
    }
}

export default InvoiceItem;