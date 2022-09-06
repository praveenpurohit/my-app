import './style.css';
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function TableData() {
    const [show, handleShow] = useState(false);

    const handleState = (status) => {
        handleShow(!show);
    };

    const Remove = () => {
        localStorage.removeItem('UserName');
        localStorage.removeItem('Email');
        localStorage.removeItem('Password');
    };
   
    return (
        <Table>
            <thead>
                <tr>
                    <th> UserName </th>
                    <th> Email </th>
                    <th>Password</th>
                    <th className='ActionTag'> Actions </th>
                </tr>
            </thead>
            <tbody>

                {/* Loops require to render list */}
                <tr key={"index"}>
                    <td>{localStorage.getItem("UserName")}</td>
                    <td>{localStorage.getItem("Email")}</td>
                    <td>{localStorage.getItem("Password")}</td>

                    <td style={{ display: "flex" }} >

                        <Button className="btn-update" variant="primary"
                            onClick={() => { handleState(true) }}> Update
                        </Button>

                        <Button className="btn-submit" variant="danger"
                            onClick={() => { Remove() }} >Delete
                        </Button>

                    </td>
                </tr>
            </tbody>


            {/* Update Modal box */}
            <Modal show={show} onHide={() => handleState(false)}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="text" placeholder="enter name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPass">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password" placeholder="enter password" />
                    </Form.Group>

                    <Button variant="success" type="submit" > Save changes </Button>
                    <Button variant="primary" type="reset" > Reset </Button>

                </Form>
            </Modal>
        </Table>
    );
}