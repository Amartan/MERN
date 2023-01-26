import React from "react";

export default function LoginModal ({open, onClose, children}) {
    if (!open) return null;

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="modal">
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>
    )
}