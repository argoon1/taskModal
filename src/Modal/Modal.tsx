import React from "react";
import { ModalFooter } from "./modalFooter/ModalFooter";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { ModalContent } from "./modalContent/ModalContent";
import { ModalContext } from "./ModalContext";
import styles from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
}
const { Provider } = ModalContext;
type ModalStateType = { isOpen: boolean };
export class Modal extends React.Component<ModalProps> {
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Content = ModalContent;
  state = {
    isOpen: true,
  };

  toggle = () => {
    this.setState((prevIsOpen) => {
      const { isOpen } = prevIsOpen as ModalStateType;
      return {
        isOpen: !isOpen,
      };
    });
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child))
        return React.cloneElement(child as React.ReactElement<any>, {
          ...child.props,
        });
    });
    if (isOpen)
      return (
        <Provider value={{ isInModal: true, toggle: this.toggle }}>
          <div className={styles.modalBackground}>
            <article className={styles.modalBody}>{children}</article>
          </div>
        </Provider>
      );
    return (
      <button onClick={this.toggle} className={styles.showModalBtn}>
        show modal{" "}
      </button>
    );
  }
}
