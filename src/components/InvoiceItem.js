import React from 'react';

class InvoiceItem extends React.Component {
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
                        name='name'
                        type='text'
                        onChange={(e) => this.props.onUpdateItem(this.props.item, e)}
                    />
                </td>

                <td>
                    <input
                        name='quantity'
                        type='number' min='0'
                        onChange={(e) => this.props.onUpdateItem(this.props.item, e)}
                    />
                </td>

                <td>
                    <input
                        name='price'
                        type='number' min='0'
                        onChange={(e) => this.props.onUpdateItem(this.props.item, e)}
                    />
                </td>

                <td>
                    {total}
                </td>

                <td>
                    <button onClick={this.props.onDeleteItem}>
                        {'X'}
                    </button>
                </td>
            </tr>
            
        )
    }
}

export default InvoiceItem