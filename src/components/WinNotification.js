import React from 'react'

const WinNotification = ({winNote}) => {
    let name = winNote ? `${winNote.prize_size}_win_notification` : ""
    if (winNote !== null) {
      return(
          <div className={name}>
              {winNote.message}
          </div>
      )
    } else {
        return null
    }
}

export default WinNotification