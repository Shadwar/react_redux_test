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

const Form = styled.form`
    display: inline-block;
`;

const Input = styled.input`
    width: 90%;
    line-height: 18px;
`;


/**
 * Форма добавления нового товара
 */
class NewItemForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Обработка отправки формы нового товара
     * @param {Event} e 
     */
    handleSubmit(e) {
        e.preventDefault();

        const titleElem = e.target.elements.title;
        const barcodeElem = e.target.elements.barcode;

        const title = titleElem.value;
        const barcode = barcodeElem.value;

        titleElem.value = '';
        barcodeElem.value = '';
        
        this.props.actionAdd(title, barcode);
    }

    render() { return (
        <Form onSubmit={this.handleSubmit}>
            <EmptyCell></EmptyCell>
            <TitleCell>
                <Input type="text" placeholder="Title" name="title"/>
            </TitleCell>
            <BarcodeCell>
                <Input type="text" placeholder="barcode" name="barcode"/>
            </BarcodeCell>
            <ActionCell>
                <AddButton>Add</AddButton>
            </ActionCell>
        </Form>
    );}
}

export default NewItemForm;