import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import './Modal.scss';

const ModalDialog = ({ onShow, onClose, setStudentCode, studentCode }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentCode !== '') {
      navigate(`/timeTable/${studentCode}`);
      setStudentCode('');
      onClose();
    }
  };
  return (
    <Modal show={onShow} onHide={onClose} style={{ padding: 0 }}>
      <Modal.Header closeButton>
        <Modal.Title>Xem thời khoá biểu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nhập mã số cần xem</Form.Label>
            <Form.Control
              type="text"
              placeholder="VD: DTH215782"
              autoFocus
              onChange={(e) => setStudentCode(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Huỷ
        </Button>
        <Button variant="primary" type="submit" onClick={onClose}>
          Xem
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;
