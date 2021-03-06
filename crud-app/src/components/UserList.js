import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";


const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    console.log(users);
    return (
        <ListGroup>
            {users.map((user) => (
                <ListGroupItem className="d-flex" key={user.id}>
                    <strong>{user.name}</strong>
                    <div className="ml-auto">
                        <Link to={`/edit/${user.id}`} color="warning" className=" btn btn-warning mr-2 ">
                            Edit
                        </Link>
                        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>

    );
};


export default UserList;