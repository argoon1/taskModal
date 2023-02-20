import { Component } from "react";
import { ModalContextType, ModalContext } from "../ModalContext";
interface ModalContentProps {
  children: React.ReactNode;
  isInModal?: boolean;
}
export class ModalContent extends Component<ModalContentProps> {
  static contextType = ModalContext;
  render() {
    const { children } = this.props;
    const { isInModal } = this.context as ModalContextType;
    if (isInModal) return children;
    return null;
  }
}
