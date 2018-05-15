import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NewItemForm/>
                <ItemList/>
            </div>
        );
    }
}