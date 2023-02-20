import { Modal } from "./Modal/Modal";
import "./index.css";
import { ModalContent } from "./Modal/modalContent/ModalContent";
export default function App() {
  return (
    <>
      <Modal>
        <Modal.Header title="My title string" />
        <Modal.Content>HELLO</Modal.Content>
        <Modal.Footer callToActionLabel="some action" />
      </Modal>
      "OUT OF CONTEXT RENDER :
      <ModalContent>Out out of modal context render</ModalContent> (renders
      nothing since it's outside of modal)
    </>
  );
}
