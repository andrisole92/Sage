import Snackbar from "@material-ui/core/Snackbar";
import {AlertProps} from "@material-ui/lab";
import MuiAlert from "@material-ui/lab/Alert/Alert";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {SetToast} from "../../store/toast/actions";
import {IToastState} from "../../store/toast/state";

interface IToastProps {
    toast: IToastState;
    SetToast: (action: IToastState) => {};
}

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};


const Toast = ({toast, SetToast}: IToastProps) => (
    <Snackbar open={toast.open} autoHideDuration={3000}
              onClose={() => {
                  SetToast({open: false, message: toast.message, type: toast.type})
              }}
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert
            onClose={() => {
                SetToast({open: false, message: toast.message, type: toast.type})
            }}
            severity={toast.type}>
            {toast.message}
        </Alert>
    </Snackbar>
);

const mapStateToProps = (state) => ({
    toast: state.toast,
});

const mapDispatchToProps = (dispatch) => ({
    SetToast: bindActionCreators(SetToast, dispatch),

});
export default connect(mapStateToProps, mapDispatchToProps)(Toast)

