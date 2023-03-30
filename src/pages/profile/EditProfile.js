import React from "react";

function EditProfile() {
  return (
    <div
      className="modal fade editmodal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="userimagesection">
                  <label
                    htmlFor="formFile"
                    className="form-label mb-0 w-100 h-100"
                  >
                    <div className="image">
                      <img
                        className="w-100 h-100"
                        src="assets/img/profile/users.jpg"
                        // alt="user"
                      />
                    </div>
                  </label>
                  <input
                    className="form-control "
                    type="file"
                    id="formFile"
                    hidden
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="inputIconGroup d-flex align-items-center justify-content-start">
                  <div className="icon">
                    <img
                      src="assets/img/profile/Icon feather-user.svg"
                    //   alt="usericon"
                    />
                  </div>
                  <input
                    className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                    type="text"
                    name="name"
                    defaultValue="Deepak sahu"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="inputIconGroup d-flex align-items-center justify-content-start">
                  <div className="icon">
                    <img
                      src="assets/img/profile/Icon simple-email.svg"
                    //   alt="@icon"
                    />
                  </div>
                  <input
                    className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                    type="email"
                    name="email"
                    defaultValue="deepaksahu@gmail.com"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="inputIconGroup d-flex align-items-center justify-content-start">
                  <div className="icon">
                    <img src="assets/img/profile/phone.svg" alt="@icon" />
                  </div>
                  <input
                    className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                    type="tel"
                    name="phone"
                    defaultValue={9079168958}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="inputIconGroup d-flex align-items-center justify-content-start">
                  <div className="icon ">
                    <img src="assets/img/profile/birthday.svg" alt="@icon" />
                  </div>
                  <input
                    className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                    type="date"
                    name="birthday"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="inputIconGroup d-flex align-items-center">
                  <div className="icon me-2">
                    <img src="assets/img/profile/gander.svg" alt />
                  </div>
                  <div className="d-flex align-items-cente">
                    <div className="form-check px-4">
                      <input
                        className="form-check-input checkinput shadow-none"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label checklebal shadow-none"
                        htmlFor="flexCheckDefault"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check ps-3">
                      <input
                        className="form-check-input checkinput shadow-none"
                        type="checkbox"
                        defaultValue
                        id="flexCheckChecked"
                        defaultChecked
                      />
                      <label
                        className="form-check-label checklebal shadow-none"
                        htmlFor="flexCheckChecked"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
