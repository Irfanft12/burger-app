import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from './Layout.module.css'

const Layout = ( props ) => {
    return (
        <Aux>
            <div>Toolbar, Side drawer, Backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    );
} 

export default Layout;