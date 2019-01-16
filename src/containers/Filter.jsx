import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Typograhpy from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { setFilter, setSearch } from '../actions';

import Button from '../components/Button.jsx';
import filterStyle from '../assets/jss/components/filterStyle.jsx';

const Filter = ({...props}) => {
    const { 
        classes, 
        filter, 
        search, 
        setFilter, 
        setSearch 
    } = props;

    const updateFilter = e => {
        let filter = e.target.dataset.filter;
        if (!filter) {
            filter = e.target.closest("button").dataset.filter;
        }
        setFilter(filter);
    }
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div className={classes.filter}>
            <div className={classes.filterShow}>
                <Typograhpy variant="h4" className={classes.lable}>Show: </Typograhpy>
                <Button size="sm" className={filter === "all" ? classes.selected : ""} round data-filter="all" onClick={updateFilter}>All</Button>
                <Button size="sm" className={filter === "selected" ? classes.selected : ""} justIcon data-filter="selected" round onClick={updateFilter}>
                    <Icon className={classes.starSelected}>star</Icon>
                </Button>
                <Button size="sm" className={filter === "not" ? classes.selected : ""} justIcon data-filter="not" round onClick={updateFilter}>
                    <Icon className={classes.starNot}>star</Icon>
                </Button>
            </div>
            <div className={classes.filterSearch}>
                <Icon>search</Icon>
                <TextField 
                    label="PCode/Event Name" 
                    InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }
                    }} 
                    InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline
                        }
                    }} 
                    variant="outlined" onChange={updateSearch} value={search}></TextField>
            </div>
        </div>
    );
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    filter: state.filter,
    search: state.search
});

const mapDispatchToProps = {
    setFilter,
    setSearch
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(withStyles(filterStyle)(Filter));