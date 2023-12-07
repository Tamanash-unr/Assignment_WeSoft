import "./Style/MainContainer.css";
import UserTable from "./UserTable";

function MainContainer(props){
    const doOnCreate = () => {
        props.showCreateWindow(true);
    }

    return(
        <div className="main-container">
            <h3>Users</h3>
            <div className="toolbar">
                <div className="form">
                    <button className="search-button">
                        <i className="fa fa-search fa-xl"></i>
                    </button>
                    <input id="user-search" type="text" className="form-input" placeholder="Search User..." />
                </div>
                <button className="create-button" onClick={doOnCreate}>
                    <i className="fa fa-user fa-lg" />
                    &nbsp;&nbsp;
                    Create User
                </button>
            </div>
            <UserTable />
            <div className="toolbar-nav">
                <button className="fa fa-angles-left" />
                <button className="fa fa-angle-left" />
                <div className="nav-pag">
                    <button>1</button>
                </div>
                <button className="fa fa-angle-right" />
                <button className="fa fa-angles-right" />
            </div>
        </div>
    );
}

export default MainContainer;