import "./Style/MainContainer.css";

function MainContainer(){
    return(
        <div className="main-container">
            <h3>Users</h3>
            <div className="toolbar">
                <div class="form">
                    <i class="fa fa-search"></i>
                    <input id="superhero-search" type="text" class="form-control form-input" placeholder="Search for your Hero..." />
                </div>
                <button type="submit">Add User</button>
            </div>
        </div>
    );
}

export default MainContainer;