import styled from 'styled-components';
import React from 'react';

const AddButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 18px;
    text-transform: uppercase;
    color: green;
`;

const EmptyCell = styled.span`
    width: 40px;
    height: 40px;
    padding: 5px;
    display: inline-block;
    border: 1px solid black;
`;

const TitleCell = EmptyCell.extend`
    width: 350px;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    vertical-align: top;
    margin-left: -1px;
`;

const BarcodeCell = TitleCell.extend`
    width: 250px;
`;

const ActionCell = TitleCell.extend`
    width: 150px;
`;



class NewItemForm extends React.Component {
    render() { return (
        <div>
            <form>
                <EmptyCell></EmptyCell>
                <TitleCell>
                    <input type="text" placeholder="Title" />
                </TitleCell>
                <BarcodeCell>
                    <input type="text" placeholder="barcode" />
                </BarcodeCell>
                <ActionCell>
                    <AddButton>Add</AddButton>
                </ActionCell>
            </form>
        </div>
    );}
}

export default NewItemForm;