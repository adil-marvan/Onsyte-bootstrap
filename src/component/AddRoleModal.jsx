// import React from 'react'

// function AddRoleModal({ isOpen, onClose }) {
//     if (!isOpen) return null;
//     return (
//         <div>
//             <div class="modal" tabindex="-1">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title">Modal title</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             <p>Modal body text goes here.</p>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddRoleModal

import React from 'react';

function AddRoleModal() {
    return (
        <div className="modal fade" id="addRoleModal" tabIndex="-1" aria-labelledby="addRoleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addRoleModalLabel">Add Role</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                        {/* Add your form or inputs here */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRoleModal;
