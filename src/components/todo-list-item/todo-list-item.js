import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
<<<<<<< HEAD

      render() {    
        const { label, onDeleted, 
            onToggleDone, 
            onToggleImportant,
            done,
            important} = this.props;

=======
   
    render() {    

        const { label, onDeleted,
              onToggleDone,
              onToggleImportant,
              done, 
              important} = this.props;
              
>>>>>>> 119a2a6be223c2ee26206e405f7cb97c7ea9f654

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important){
            classNames += ' important';
        }

        return ( 
            <span className= { classNames }>
                <span 
<<<<<<< HEAD
                className="todo-list-item-lable"
                onClick= { onToggleDone }>
                { label} 
=======
                    className="todo-list-item-lable"
                    onClick= { onToggleDone }>
                    { label} 
>>>>>>> 119a2a6be223c2ee26206e405f7cb97c7ea9f654
                </span>        
            
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick= { onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
            
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick= { onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>

            </span>
        );
    };
};