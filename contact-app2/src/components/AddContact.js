import React from 'react';

class AddContact extends React.Component
{
    render()
    {
        return(
            <div className='container mt-4'>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" className="form-control" id="name"/>
                    <label>Email</label>
                    <input type="text" className="form-control" id="name"/>
                    <button className="btn btn-primary mt-5 btn-block " >Add Contact</button>
                </div>
            </div>
            );
    }
}  


export default AddContact;