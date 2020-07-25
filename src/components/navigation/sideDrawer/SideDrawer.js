import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/auxiliary/Auxiliary'


const sideDrawer = props => {
    
    let attachedClasses = [classes.SideDrawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;