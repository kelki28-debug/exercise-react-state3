import React, { Component } from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <TableHead />
                    <TableBody />
                </table>
            </div>
        );
    }
}

export default Table;
