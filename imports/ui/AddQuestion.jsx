import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalInputForm from './ModalInputForm';

Modal.setAppElement('#react-target')

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
        <button onClick={this.handleOpenModal.bind(this)}>Add Question</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
          <ModalInputForm />
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<AddQuestion />, document.getElementById('react-target'));