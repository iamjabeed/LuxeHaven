const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          // onClick={onClose}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000] p-4 rounded-lg z-10 text-center shadow-md">
            <button
              className="text-[#db1143f3] text-2xl font-semibold hover:text-[#FF2E63] focus:outline-none mr-2"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
