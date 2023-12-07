import "./Style/UserTable.css";
import TableData from "./TableData";

function UserTable(){
    return (
        <div className="user-table">
            <div className="table-head table-row">
                <div className="table-cell">User ID</div>
                <div className="table-cell">Name</div>
                <div className="table-cell">Surname</div>
                <div className="table-cell">User</div>
                <div className="table-cell">Phone No</div>
                <div className="table-cell">Email</div>
                <div className="table-cell">Status</div>
                <div className="table-cell">Manage</div>
            </div>
            <TableData email="jdoe@test.com"/>
            <TableData email="prakash.jha@gmail.com"/>
            <TableData email="jdoe@test.com"/>
            <TableData email="jdoe@test.com"/>
            <TableData email="jdoe@test.com"/>
        </div>
    );
}

export default UserTable;
