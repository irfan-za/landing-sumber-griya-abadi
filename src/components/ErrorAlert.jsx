import React from 'react';

function ErrorAlert(isOpen=false, message="") {
  let open=false
  open=isOpen
  setTimeout(() => {
    open=false
  }, 2000);
  return (
    <>
      {open && (
        <div className="fixed top-5 right-5 rounded-lg bg-white text-red-500 border border-b-4 border-red-500 p-2 shadow-md z-50">
          <div>Error : {message}</div>
        </div>
        )
      }
    </>
  );
}

export default ErrorAlert;