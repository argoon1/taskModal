import { Component } from "react";
import { ModalContextType, ModalContext } from "../ModalContext";
interface ModalFooterProps {
  callToActionLabel: string;
  isInModal?: boolean;
}
export class ModalFooter extends Component<ModalFooterProps> {
  static contextType = ModalContext;
  render() {
    const { callToActionLabel } = this.props;
    const { isInModal, toggle } = this.context as ModalContextType;
    function callToAction() {
      toggle();
      alert("ok");
    }
    if (isInModal)
      return (
        <footer>
          <button onClick={toggle}> closeModal</button>
          <button onClick={callToAction}> {callToActionLabel}</button>
        </footer>
      );
  }
}
