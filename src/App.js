import React, {useState, useEffect} from 'react'
//import NameForm from './components/NameForm'
import competitionService from './services/CompetitionService'

const App = () => {
  const [name, setName] = useState('')
  const [winners, setWinners] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    competitionService
      .getNumber()
      .then(n => {
        setNumber(n.number)
      })
  }, [])

  useEffect(() => {
    competitionService
      .getWinners()
      .then(winners => {
        setWinners(winners)
      })
  }, [])

  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log(name)
  }

  const handleClick = () => {
      competitionService
        .increment()
        .then(n => {
          setNumber(n.number)
        })
    console.log('click')
  }

  return(
    <div>
      
      <div>
        <p>Terve maailma!</p>
      </div>
      
      <div>
        <form>
          Syötä nimimerkki<input
            value={name}
            onChange={handleNameChange}/>
        </form>
      </div>

      <div>
        <p>Paina nappia voittaaksesi!</p>
        <div>
          <p>{number}</p>
          <button onClick={handleClick}>        plus      </button>    
        </div>
      </div>

      <div>
        <p>Edelliset voittajat:</p>
        <ul>
          {winners.map(winner => 
            <li key={winner.name}>{winner.name}</li>  
          )}
        </ul>
      </div>
    
    </div>
  )
}

export default App;
