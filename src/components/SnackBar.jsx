import React from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import withStyles from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import snackbarStyle from '../assets/jss/components/snackbarStyle';

import { hideSnackbar } from '../actions';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const MySnackbarContentWrapper = withStyles(snackbarStyle)(MySnackbarContent);

const AppSnackbar = ({ open, message, variant, hideSnackbar }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={open}
    autoHideDuration={3000}
    onClose={hideSnackbar}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
  >
    <MySnackbarContentWrapper
      variant={variant}
      message={message}
      onClose={hideSnackbar}
    />
  </Snackbar>
);

const mapStateToProps = state => ({
  open: state.snackbar.snackbarOpen,
  message: state.snackbar.snackbarMessage,
  variant: state.snackbar.snackbarVariant,
});

const mapDispatchToProps = {
  hideSnackbar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppSnackbar);