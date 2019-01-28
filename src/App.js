import React, {useState} from 'react'
//import NameForm from './components/NameForm'

const App = () => {
  const [name, setName] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log(name)
  }

  return(
    <div>
      
      <div>
        <p>Terve maailma!</p>
      </div>
      
      <div>
        <form>
          <input
            value={name}
            onChange={handleNameChange}/>
        </form>
      </div>
    
    </div>
  )
}

export default App;
