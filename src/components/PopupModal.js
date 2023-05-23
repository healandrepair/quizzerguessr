import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Popup({ isOpen, onClose, isCorrect, attempts}) {
    return ( isCorrect ? 
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onClose}
        isCorrect={isCorrect}
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 128, 0, 0.5)',
            },
            content: {
              textAlign: 'center',  
              width: '300px',
              height: '200px',
              margin: 'auto',
            },
          }}
        >
            <h2>Correct! 😄</h2>
            <p>Thanks for playing!</p>
            <p>You got it in {attempts} attempt(s)</p> 
            <button onClick={onClose}>Close</button>
        </Modal> 
        :
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onClose}
        isCorrect={isCorrect}
        style={{
            overlay: {
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
            },
            content: {
              textAlign: 'center',  
              width: '300px',
              height: '200px',
              margin: 'auto',
            },
          }}
        >
            <h2>Incorrect! 😢</h2>
            <br/>
            <p>Try again</p>
            <button onClick={onClose}>Close</button>
        </Modal>
        
    )
}

export default Popup;