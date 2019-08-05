import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalInputForm from './ModalInputForm';

Modal.setAppElement('#modal-target')

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }
  
  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div>
        <button
          className="add-question-button" 
          onClick={this.handleOpenModal.bind(this)}>Add Question</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Modal database add"
           className='modal-style'
           overlayClassName='modal-overlay-style'
        >
          <a
            href="#"
            className="close-modal-button" 
            onClick={this.handleCloseModal.bind(this)}
          >x</a>
          <ModalInputForm closeInputModal={this.handleCloseModal.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

//ReactDOM.render(<AddQuestion />, document.getElementById('react-target'));