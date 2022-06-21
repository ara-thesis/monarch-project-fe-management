import React from 'react';
import { Modal, Button} from 'react-bootstrap';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    handleModal(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>                
                <div className="modalClass">
                    <Button onClick={()=>this.handleModal()}>Sign Up</Button>
                </div>
            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                <Modal.Header closeButton>You can sign up here</Modal.Header>
                <Modal.Body>This is modal's body</Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>this.handleModal}>Save</Button>
                    <Button onClick={()=>this.handleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default Register;