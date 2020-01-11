import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome'];
    return (
        <ul>
            <li>{ items[0]}</li>
            <li>{ items [0]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {    
    const searchText = 'Text here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        style={searchStyle}
        placeholder={searchText} />;
};

const App = () => {

    return (
        <div>
            <AppHeader />
            <TodoList />
            <SearchPanel />
        </div>
    );
};

ReactDOM.render( <App />, document.getElementById('root'));
