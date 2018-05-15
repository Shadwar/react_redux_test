import styled from 'styled-components';
import React from 'react';

const Li = styled.li`
    list-style: none;
`;

const Cell = styled.span`
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

const TitleCell = Cell.extend`
    margin-left: -1px;
    width: 350px;
    line-height: 18px;
    text-align: left;
`;

const BarcodeCell = Cell.extend`
    margin-left: -1px;
    width: 250px;
`;

const ActionCell = Cell.extend`
    margin-left: -1px;
    width: 150px;
`;

const DeleteButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 18px;
    text-transform: uppercase;
    color: red;
`;


class Item extends React.Component {
    render() { return (
        <Li>
            <Cell>2</Cell>
            <TitleCell>Item title 2</TitleCell>
            <BarcodeCell>232323232323</BarcodeCell>
            <ActionCell>
                <DeleteButton>Delete</DeleteButton>
            </ActionCell>
        </Li>
    )}
}

export default Item;