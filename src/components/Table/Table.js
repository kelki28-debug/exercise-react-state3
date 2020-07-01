import React, { Component } from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends Component {
   
    render() {
        let table = this.props.data.map((tables, index)=>{
            return <TableBody key={index} name={tables.name} age={tables.age} address={tables.address} sex={tables.sex}
           />})
        return (
            <div>
                <table>
                    <TableHead />
                    {table}
                </table>
            </div>
        );
    }
}

export default Table;
