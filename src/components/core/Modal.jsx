const Modal = ({ children, isOpen, className }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`w-full h-[100vh] top-0 left-0 fixed inset-0 bg-[rgba(12,12,14,0.5)] flex justify-center items-center ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
