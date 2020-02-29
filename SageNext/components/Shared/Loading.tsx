import {connect} from 'react-redux';
import {ILoadingState} from "../../store/loading/state";
import styled from 'styled-components';
import {CircularProgress} from "@material-ui/core";


const InputBlocker = styled.div`
  width:100vw;
  height:100vh;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,0.2);
  z-index: 99999;
  display: flex;
  justify-content: center;
`;

interface IToastProps {
    loading: ILoadingState;
}


const Loading = ({loading}: IToastProps) => {
    return loading.isLoading ? <InputBlocker>
        <CircularProgress size={80}/>
    </InputBlocker> : null;
};

const mapStateToProps = (state) => ({
    loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Loading)

