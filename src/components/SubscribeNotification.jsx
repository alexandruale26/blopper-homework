import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";

const defaultMessage = "Thank you for subscribing! Musk and Kotick will be forever billionaires.";

const SubscribeNotification = ({ open, onClose, duration = 5000, message = undefined }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      message={message || defaultMessage}
      onClose={onClose}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    />
  );
};
SubscribeNotification.displayName = "SubscribeNotification";
SubscribeNotification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  message: PropTypes.string,
};

export default SubscribeNotification;
