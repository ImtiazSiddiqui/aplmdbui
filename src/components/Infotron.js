import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import logo from '../img/heroine1-1.jpg';

const Infotron = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5 img-responsive" style={{ backgroundImage: 'url(https://nzpowerlunchfiles.blob.core.windows.net/images/heroine1-1.jpg)' }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Azure Power Lunch</MDBCardTitle>
                <p className="h2-responsive pt-3 m-5 font-bold red">Azure Power Lunch is taking a break during the Holidays. We will be back with more exciting Azure content starting from Friday January 15th, 2021.</p>
                <p className="mx-5 mb-5">Azure Power Lunch is a 30-minute weekly seminar every Friday from 11-11:30 AM CST. It is a great opportunity to learn about different Azure topics from Microsoft Azure Solution architecture team.
                </p>
                <MDBBtn href="https://nzpowerlunchfiles.blob.core.windows.net/images/Azure Power Lunch-2020.ics" outline color="white" className="mb-5"><MDBIcon icon="arrow-circle-down"  className="mr-2"></MDBIcon>Download Meeting Invite</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Infotron;