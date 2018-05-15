import styled from 'styled-components';
import React from 'react';

const NumberCell = styled.span`
    width: 40px;
    height: 40px;
    text-transform: uppercase;
    display: inline-block;
    border: 1px solid black;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    vertical-align: top;
    padding: 5px;
`;

const TitleCell = NumberCell.extend`
    margin-left: -1px;
    width: 350px;
`;

const BarcodeCell = TitleCell.extend`
    width: 250px;
`;

const ActionCell = TitleCell.extend`
    width: 150px;
`;

class ItemListHeader extends React.Component {
    render() {
        return (
            <div>
                <NumberCell>№</NumberCell>
                <TitleCell>Title</TitleCell>
                <BarcodeCell>Barcode</BarcodeCell>
                <ActionCell>Actions</ActionCell>
            </div>
        )
    }
}

export default ItemListHeader;