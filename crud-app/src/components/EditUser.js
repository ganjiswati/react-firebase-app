import React, { useState, useEffect, useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const EditUser = (props) => {
  const { EditUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: '',
  });

  const history = useHistory();
  const currentUserId = props.match.parms.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    console.log(selectedUser);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);


  const onSubmit = (event) => {
    event.preventDefault();
    EditUser(selectedUser);
    history.push('/');
  }


  const onChange = (event) => {
    setSelectedUser({ ...selectedUser, [event.target.name]: event.target.value });
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={selectedUser.name} placeholder="Enter Name" onChange={onChange}></Input>
      </FormGroup>
      <Button type="submit"  >Edit</Button>
      <Link to="/" className='btn btn-danger ms-lg-2 ms-ms-2'>Cancel</Link>
    </Form>
  )
}
export default EditUser;

