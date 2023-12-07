import "./Style/UserForm.css";

function CreateUser(props){
    const handleOnClose = () => {
        props.showCreateWindow(false);
    }

    return(
        <div className="screen-bg">
            <div className="user-form">
                <div className="form-head">
                    <h3>Create User</h3>
                    <button className="fa fa-close" onClick={handleOnClose}/>
                </div>
                <form method="POST" onSubmit={props.onSubmit}>
                    <input className="form-control" type="text" id="name" placeholder="Enter Name" required />
                    <input className="form-control" type="text" id="surname" placeholder="Enter Surname" required />
                    <input className="form-control" type="text" id="phone" placeholder="Enter Phone No" required />
                    <select name="position" id="position" required >
                        <option value="" disabled selected hidden>Select Position</option>
                        <option value="admin">Admin</option>
                        <option value="auditor">Auditor</option>
                        <option value="developer">Developer</option>
                        <option value="manager">Manager</option>
                    </select>
                    <div className="role">
                        <h5>Role:</h5>
                        <div className="role-options">
                            <span>Administrator</span>
                            <input type="checkbox" id="admin" name="admin" value={"Administrator"}/>
                        </div>
                        <div className="role-options">
                            <span>Support</span>
                            <input type="checkbox" id="support" name="support" value={"Support"}/>
                        </div>
                        <div className="role-options">
                            <span>Assistant</span>
                            <input type="checkbox" id="assistant" name="assistant" value={"Assistant"}/>
                        </div>
                    </div>
                    <input className="form-control" type="email" id="email" placeholder="Enter Email" required />
                    <input className="form-control" type="password" id="password" placeholder="Enter Password" required />
                    <input className="form-control" type="password" id="conf-password" placeholder="Confirm Password" required />
                    <button type="submit">Create User</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;