import React from 'react';
import styled from 'styled-components';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const Wrapper = styled.div`
    text-align: center;
`;

/**
 * Главный класс приложения.
 */
class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <NewItemForm actionAdd={(title, barcode) => this.props.dispatch(addItem(title, barcode))}/>
                <ItemList/>
            </Wrapper>
        );
    }
}

export default connect(store => store)(App);