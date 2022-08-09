import { ReactNode, MouseEvent, FC, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { theme, flexJustAlignCenter } from "../style";
import styled from "styled-components";

interface ModalInterface {
  children: ReactNode;
  visible: boolean;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

function Portal({ children }: Pick<ModalInterface, "children">) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
}

export function Modal({ children, visible, onClick }: ModalInterface) {
  return (
    <Portal>
      <StyledModal visible={visible} onClick={onClick}>
        {children}
      </StyledModal>
    </Portal>
  );
}

const StyledModal: FC<ModalInterface> = styled.div<ModalInterface>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  ${flexJustAlignCenter}
  background-color: ${theme.colors.navy};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
  opacity: 1;
`;
