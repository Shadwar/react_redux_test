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
    border: 1px solid transparent;
`;

const TitleCell = EmptyCell.extend`
    width: 350px;
    border: 1px solid black;
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

    &.error {
        border: 1px solid red;
    }
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
     * Обработка отправки формы нового товара.
     * Дополнительная проверка введенных данных.
     * @param {Event} e 
     */
    handleSubmit(e) {
        e.preventDefault();

        const titleElem = e.target.elements.title;
        const barcodeElem = e.target.elements.barcode;

        const title = titleElem.value;
        const barcode = barcodeElem.value;

        let errors = false;
        if (!title || title.length < 10) {
            titleElem.classList.add('error');
            errors = true;
        }
        if (!barcode || barcode.length < 10) {
            barcodeElem.classList.add('error');
            errors = true;
        }

        if (errors) return;

        titleElem.value = '';
        barcodeElem.value = '';
        
        this.props.actionAdd(title, barcode);
    }

    /**
     * При вводе сбросить класс ошибки с поля ввода.
     * @param {Event} e 
     */
    handleInput(e) {
        e.target.classList.remove('error');
    }

    render() { return (
        <Form onSubmit={this.handleSubmit}>
            <EmptyCell></EmptyCell>
            <TitleCell>
                <Input type="text" placeholder="Title" name="title" onInput={this.handleInput}/>
            </TitleCell>
            <BarcodeCell>
                <Input type="text" placeholder="barcode" name="barcode" onInput={this.handleInput}/>
            </BarcodeCell>
            <ActionCell>
                <AddButton>Add</AddButton>
            </ActionCell>
        </Form>
    );}
}

export default NewItemForm;