import Header from "../Shared/Header";
import styled from 'styled-components';
import Toast from "../Shared/Toast";
import PropTypes, {InferProps} from "prop-types";
import Loading from "../Shared/Loading";


const AppContent = styled.div`
  max-width: 90% !important;
  margin: 0 auto;
`;


const AppLayout = ({
                       children
                   }: InferProps<typeof AppLayout.propTypes>) => (
    <div>
        <Header/>
        <AppContent>
            {children}
        </AppContent>
        <Toast/>
        <Loading/>
    </div>
);

AppLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLayout
