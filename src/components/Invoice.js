import React from 'react';
import InvoiceItem from './InvoiceItem'

class Invoice extends React.Component {

    render() {
        const items = this.props.items;

        const itemRows = items.map(item => {
            return (
                <InvoiceItem key={item.id}
                    item={item}
                    onUpdateItem={this.props.onUpdateItem}
                    onDeleteItem={() => this.props.onRemoveItem(item.id)}
                />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            {'Item'}
                        </th>
                        <th>
                            {'Qty'}
                        </th>
                        <th>
                            {'Price'}
                        </th>
                        <th>
                            {'Total'}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows} 
                    <tr>
                        <td>
                            <button onClick={this.props.onAddItem}>{'New Item'}</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Invoice