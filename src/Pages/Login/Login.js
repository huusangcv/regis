import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.scss';
function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
          <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">
            Đăng Nhập
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon="facebook-f" className="mx-2" />- ĐĂNG NHẬP BẰNG EMAIL AGU
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
