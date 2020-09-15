import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import logo from '../../assets/logo.svg';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '2em'
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"
    }
}));

export default function Header(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar color={'primary'}>
                <Toolbar disableGutters={true}>
                    <img alt="company logo" src={logo}/>
                    <Tabs className={classes.tabContainer}>
                        <Tab className={classes.tab} label="Home"></Tab>
                        <Tab className={classes.tab} label="Services"></Tab>
                        <Tab className={classes.tab} label="The Revolution"></Tab>
                        <Tab className={classes.tab} label="About Us"></Tab>
                        <Tab className={classes.tab} label="Contact Us"></Tab>
                    </Tabs>
                </Toolbar>


            </AppBar>
            <div className={classes.toolbarMargin}></div>

        </React.Fragment>
    );

}