import React from 'react'

function Admin() {
    return (
        <div className='container'>
            <form className='form-group'>
                <label className='form-label'> Upload Photos </label>
                <input type='file' className='form-control' />
                <input type='button' value='Upload' className='btn'/>
            </form>
        </div>
    )
}

export default Admin
