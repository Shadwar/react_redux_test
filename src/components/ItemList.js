import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import ItemListHeader from './ItemListHeader';
import Item from './Item';
import {addItem, deleteItem} from '../actions';


const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

/**
 * Список товаров, выводит заголовок таблицы и все товары.
 */
class ItemList extends React.Component {
    render() { 
        console.log(this);
        return (
        <div>
            <ItemListHeader/>
            <Ul>
                {this.props.items.map(item =>
                    <Item 
                        key={item.id}
                        number={item.id}
                        title={item.title}
                        barcode={item.barcode}
                        actionDelete={() => {
                            this.props.dispatch(deleteItem(item.id));
                        }}
                    />
                )}
            </Ul>
        </div>
    );}
}

export default connect(state => state)(ItemList);