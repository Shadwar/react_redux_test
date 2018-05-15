import styled from 'styled-components';
import React from 'react';
import ItemListHeader from './ItemListHeader';
import Item from './Item';


const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

class ItemList extends React.Component {
    render() { return (
        <div>
            <ItemListHeader/>
            <Ul>
                <Item />
                <Item />
                <Item />
            </Ul>
        </div>
    );}
}

export default ItemList;