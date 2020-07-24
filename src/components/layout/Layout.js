import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from './Layout.module.css';
import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
} 

export default Layout;