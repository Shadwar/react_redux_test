import React from 'react';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form>
                        <input type="text" placeholder="Title" />
                        <input type="text" placeholder="barcode" />
                        <button>Add</button>
                    </form>
                </div>
                <div>
                    <div>
                        <div>№</div><div>Title</div><div>Barcode</div><div>Actions</div>
                    </div>
                    <ul>
                        <li>
                            <div>1</div><div>Item title 1</div><div>121212121212</div>
                            <div>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div>2</div><div>Item title 2</div><div>232323232323</div>
                            <div>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div>1</div><div>Item title 3</div><div>343434343434</div>
                            <div>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}