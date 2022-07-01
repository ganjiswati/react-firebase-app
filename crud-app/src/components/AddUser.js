import React, { useContext,useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';

const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory()

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: uuid(),
      name: name
    }

    addUser(newUser);
    history.push('/');
  }

  const onChange = (event) => {
    setName(event.target.value);
  }



  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder="Enter Name" onChange={onChange} ></Input>
      </FormGroup>
      <Button onClick={onSubmit}type="submit">Submit</Button>
      <Link to="/" className='btn btn-danger ms-lg-2 ms-ms-2'>Cancel</Link>
    </Form>
  )
}

export default AddUser;