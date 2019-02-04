import React from 'react';

class Footer extends React.Component {
    render() {
        const subtotal = this.props.subTotal;
        const taxTotal = this.props.taxTotal;
        const total = this.props.total;

        return (
            <table className="Footer">
                <tbody>
                    <tr>
                        <td className="Subtotal-line">{'Subtotal'}</td>
                        <td className="Subtotal-value">{'$' + subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="Tax-line">
                            {'Tax '}
                            <input 
                                defaultValue={this.props.tax}
                                type='number' min='0'
                                onChange={this.props.onChange}
                            />
                            {'%'}
                        </td>
                        <td className="Tax-value">{'$' + taxTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="Total-line">{'Total'}</td>
                        <td className="Total-value">{'$' + total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Footer;