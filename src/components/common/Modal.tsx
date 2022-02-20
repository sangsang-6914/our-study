import { ModalInner, ModalOverlay, ModalWrapper } from "@styles/modal.style"
import { useEffect } from "react"

interface IModalProps {
  className?: string;
  visible: boolean;
  children?: any;
  closable?: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
  width?: string;
}

function Modal({ className, visible, children, closable, maskClosable, onClose, width }:IModalProps) {

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  const onMaskClick = (e: any) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  const close = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper 
        tabIndex={-1} 
        className={className} 
        visible={visible}
        onClick={maskClosable ? onMaskClick : undefined}
      >
        <ModalInner tabIndex={0} className="modal-inner" width={width}>
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

export default Modal