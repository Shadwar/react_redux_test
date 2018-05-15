import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

/**
 * Главный класс приложения.
 */
export default class App extends React.Component {
    render() {
        return (
            <div>
                <NewItemForm/>
                <ItemList 
                    items={
                        [
                            {id: 1, title: 'item title 1', barcode: '121212121212'},
                            {id: 2, title: 'item title 2', barcode: '232323232323'},
                            {id: 3, title: 'item title 3', barcode: '343434343434'},
                        ]
                    }
                />
            </div>
        );
    }
}