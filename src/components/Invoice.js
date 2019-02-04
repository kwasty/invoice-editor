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
            <div>
                <table className='Invoice'>
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
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemRows} 
                    </tbody>
                </table>
                <div onClick={this.props.onAddItem} className='NewItem'>
                    {'New Item'}
                </div>
                
            </div>
        )
    }
}

export default Invoice