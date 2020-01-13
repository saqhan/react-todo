import React, { Component } from 'react';
<<<<<<< HEAD
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    
    render() {
    
=======

import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
    
>>>>>>> b4762ce624dc16cf655cddf24b786122be0dd04c
        const { label, important = false  } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
    
        return ( 
            <span className="todo-list-item">
                <span className="todo-list-item-lable"
                style={style} >
                { label} 
                </span>        
    
                <button type="button"
                  className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
                
            </span>
        );
    };
<<<<<<< HEAD
}


=======
};
>>>>>>> b4762ce624dc16cf655cddf24b786122be0dd04c
