import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/auxiliary/Auxiliary';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {        
       return  nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log("[Modal] WillUpdate");
    }

    render() {
        return(
            <Aux>
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: this.props.show ? '1' : '0',
                    zIndex: this.props.show ? '500' : '0'
                }}
            >
                {this.props.children}
            </div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        </Aux>
        );
    }
}

export default Modal;