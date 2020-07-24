import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../backdrop/Backdrop';

const modal = props => (
    <Aux>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100%)',
                opacity: props.show ? '1' : '0',
                zIndex: props.show ? '500' : '0'
            }}
        >
            {props.children}
        </div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
    </Aux>
);

export default modal;