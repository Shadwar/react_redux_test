import styled from 'styled-components';
import React from 'react';
import ItemListHeader from './ItemListHeader';
import Item from './Item';


const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

/**
 * Список товаров, выводит заголовок таблицы и все товары.
 */
class ItemList extends React.Component {
    render() { return (
        <div>
            <ItemListHeader/>
            <Ul>
                {this.props.items.map(item =>
                    <Item 
                        key={item.id}
                        number={item.id}
                        title={item.title}
                        barcode={item.barcode}
                    />
                )}
            </Ul>
        </div>
    );}
}

export default ItemList;