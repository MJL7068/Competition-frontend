import React, {useState, useEffect} from 'react'
import competitionService from './services/CompetitionService'
import WinNotification from './components/WinNotification';

const App = () => {
  const [name, setName] = useState('')
  const [winners, setWinners] = useState([])
  const [message, setMessage] = useState('Aloita peli...')
  const [note, setNote] = useState(null)

  useEffect(() => {
    competitionService
      .getWinners()
      .then(winners => {
        setWinners(winners.reverse())
      })
  }, [])

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = () => {
      competitionService
        .increment(name)
        .then(note => {
          setMessage("Voitto vain " + note.clicks_to_win + " painalluksen päässä...")
          
          if (note.winner === true) {
            setNote(note)

            setTimeout(() => {
              setNote(null)
            }, 5000)
          }
        })

      competitionService
        .getWinners()
        .then(winners => {
          setWinners(winners.reverse())
        })
  }

  return(
    <div>
      
      <div>
        <h1>Nappipeli!</h1>
      </div>

      <div>
        <p>{message}</p>
      </div>
      
      <div>
        <form>
          Kirjoita nimimerkki kenttään <input
            value={name}
            onChange={handleNameChange}/>
        </form>
      </div>

      <div>
        <div>
          <button onClick={handleClick} className="button"> Paina nappia voittaaksesi! </button>    
        </div>
      </div>

      <WinNotification winNote={note}/>

      <div>
        <h2>Edelliset voittajat:</h2>
        <ul>
          {winners.map(winner => {
            let size = ''
            if (winner.prizeSize === 'large') {
              size = '(iso)'
            } else if (winner.prizeSize === 'medium') {
              size = '(keskikokoinen)'
            } else if (winner.prizeSize === 'small') {
              size = '(pieni)'
            }
            return <li key={winner._id}>{winner.name} {size}</li>  
          }
          )}
        </ul>
      </div>
    
    </div>
  )
}

export default App;