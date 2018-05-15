import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, dispatch } from 'react-redux';
import ItemListHeader from './ItemListHeader';
import Item from './Item';
import { deleteItem, getItems } from '../actions';


const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

const Wrapper = styled.div`
    display: inline-block;
`;

/**
 * Список товаров, выводит заголовок таблицы и все товары.
 */
class ItemList extends React.Component {
    /**
     * Перед тем, как список отобразится - сделать запрос итемов
     */
    componentWillMount() {
        this.props.dispatch(getItems());
    }

    render() { return (
        <Wrapper>
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
        </Wrapper>
    );}
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default connect(state => state)(ItemList);