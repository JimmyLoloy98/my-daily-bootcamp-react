export default function ModalDelete({ openDelete, setOpenDelete }) {
  return (
    <div className={openDelete == false ? "modal close" : "modal"}>
      <div className="container-modal-delete">
        <a className="modal_close">&times;</a>

        <div className="content-modal">
          <h2>Are you sure you want to delete it?</h2>
          <div className="buttons-action">
            <button
              className="cancel-button-modal"
              onClick={() => {
                setOpenDelete(false);
              }}
            >
              Cancel
            </button>
            <button className="delete-button-modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
