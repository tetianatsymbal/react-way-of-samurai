import {connect} from "react-redux";
import Sidebar from "./Sidebar"

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  }
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     null
//   }
// };

const SidebarContainer = connect(mapStateToProps, null)(Sidebar)

export default SidebarContainer;
