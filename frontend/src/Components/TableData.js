
function TableData(props){

    const onManage = () => {
        alert("Button Clicked")
    }

    return(
        <div className="table-row">
            <div className="table-cell">123153512</div>
            <div className="table-cell">John</div>
            <div className="table-cell">Doe</div>
            <div className="table-cell">jdoe</div>
            <div className="table-cell">1234567890</div>
            <div className="table-cell">{props.email}</div>
            <div className="table-cell">Inactive</div>
            <div className="table-cell">
                <button className="manage-btn fa fa-gear fa-xl" onClick={onManage} />
            </div>
        </div>
    );
}

export default TableData;