import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadNewOrders, setCurrentView } from '../actions';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Button from '../components/Button.jsx';
import NewOrdersList from '../containers/NewOrdersList.jsx';
import newOrdersViewStyle from '../assets/jss/views/newOrdersViewStyle.jsx';

class NewOrdersView extends Component {

    componentDidMount(){
        const { selectedEvents, loadNewOrders } = this.props;
        if (selectedEvents.length > 0){
            loadNewOrders(selectedEvents);
        }
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    render() {
        const { classes, selectedEvents, newOrders } = this.props;

        const updateCurrentView = e => {
            const { setCurrentView } = this.props;
            setCurrentView(e.target.closest("button").dataset.view);
        }

        if (selectedEvents.length > 0) {
            return (
                <div className={classes.ordersView}>
                    <NewOrdersList orders={newOrders}></NewOrdersList>
                </div>
            );
        }
        else {
            return (
                <div className={classes.notice}>
                    <h4>You haven't selected any events to monitor, please select the events</h4>
                    <Button data-view="EventsView" color="success" round onClick={updateCurrentView}>Ok</Button>
                </div>
            );
        }
    }
}

NewOrdersView.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    newOrders: state.newOrders,
    selectedEvents: state.selectedEvents
});

const mapDispatchToProps = {
    loadNewOrders,
    setCurrentView
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(newOrdersViewStyle)(NewOrdersView));
