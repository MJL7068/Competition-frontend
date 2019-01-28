import React from 'react'

const NameForm = ({addName, name, handleNameChange}) => {
    return(
        <form onSubmit={addName}>
            <div>Syötä nimimerkkisi: <input value={name} onChange={handleNameChange}/></div>
            <button type='submit'>tallenna</button>
        </form>
    )
}

export default NameForm