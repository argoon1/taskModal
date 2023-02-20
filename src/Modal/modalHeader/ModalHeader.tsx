import { Component, Context } from "react";
import { ModalContextType, ModalContext } from "../ModalContext";
interface ModalHeaderProps {
  title: string;
  isInModal?: boolean;
}
export class ModalHeader extends Component<ModalHeaderProps> {
  static contextType = ModalContext;
  render() {
    const { isInModal, toggle } = this.context as ModalContextType;
    const { title } = this.props;
    if (isInModal)
      return (
        <header>
          <h3>{title}</h3> <button onClick={toggle}>X</button>
        </header>
      );
    return null;
  }
}
