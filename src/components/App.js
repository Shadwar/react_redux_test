import React from 'react';
import styled from 'styled-components';


const AddButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 18px;
    text-transform: uppercase;
    color: green;
`;

const DeleteButton = AddButton.extend`
    color: red;
`;

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

const TitleHeaderCell = NumberCell.extend`
    margin-left: -1px;
    width: 350px;
`;

const TitleItemCell = TitleHeaderCell.extend`
    line-height: 18px;
    text-align: left;
`;

const ActionCell = NumberCell.extend`
    width: 150px;
`;

const BarcodeCell = TitleHeaderCell.extend`
    width: 250px;
`;

const Item = styled.li`
    list-style: none;
`;

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
`;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form>
                        <NumberCell></NumberCell>
                        <TitleHeaderCell>
                            <input type="text" placeholder="Title" />
                        </TitleHeaderCell>
                        <BarcodeCell>
                            <input type="text" placeholder="barcode" />
                        </BarcodeCell>
                        <ActionCell>
                            <AddButton>Add</AddButton>
                        </ActionCell>
                    </form>
                </div>
                <div>
                    <div>
                        <NumberCell>№</NumberCell>
                        <TitleHeaderCell>Title</TitleHeaderCell>
                        <BarcodeCell>Barcode</BarcodeCell>
                        <ActionCell>Actions</ActionCell>
                    </div>
                    <ItemList>
                        <Item>
                            <NumberCell>2</NumberCell>
                            <TitleItemCell>Item title 2</TitleItemCell>
                            <BarcodeCell>232323232323</BarcodeCell>
                            <ActionCell>
                                <DeleteButton>Delete</DeleteButton>
                            </ActionCell>
                        </Item>
                        <Item>
                            <NumberCell>2</NumberCell>
                            <TitleItemCell>Item title 2</TitleItemCell>
                            <BarcodeCell>232323232323</BarcodeCell>
                            <ActionCell>
                                <DeleteButton>Delete</DeleteButton>
                            </ActionCell>
                        </Item>
                        <Item>
                            <NumberCell>1</NumberCell>
                            <TitleItemCell>Item title 3</TitleItemCell>
                            <BarcodeCell>343434343434</BarcodeCell>
                            <ActionCell>
                                <DeleteButton>Delete</DeleteButton>
                            </ActionCell>
                        </Item>
                    </ItemList>
                </div>
            </div>
        );
    }
}