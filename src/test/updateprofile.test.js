import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { describe, it } from 'mocha';
import data from './mock/updateData';
import app from "../app";

const prefix = '/api/v1/auth/updateProfile/eea7c41a-0b07-42c5-8af1-1b3946485b48';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11Z2VtYWxlb0BnbWFpbC5jb20iLCJyb2xlIjoiT3BlcmF0b3IiLCJpYXQiOjE2MDM3MTY4MzQsImV4cCI6MTYwNDMyMTYzNH0.MifMu3xn644iV_mTV-kzttQKTMVGhkwr-Ftw4sVk8O0';


chai.use(chaiHttp);

describe(" Test update profile", () => {
  it("Should not update user if name is empty ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.nameIsEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("Name must not be empty")
        done();
      })
  }); 
  it("Should not update user if name is shorter than 4 chars ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.isShort)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("Name must be atleast four characters")
        done();
      })
  }); 

  it("Should not update if no valid email is provided", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.isAnEmail)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("provide valid email")
        done();
      })
  }); 

  it("Should not update user if name is empty string ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.nameIsEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("Name must not be empty")
        done();
      })
  }); 

  it("Should not update user if email is empty string ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.emailEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("Email must not be empty")
        done();
      })
  }); 

  it("Should not update user if gender is longer than eight chars ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.isBig)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("gender should be not more 8 characters")
        done();
      })
  }); 

  it("Should not update user if gender empty string ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.genderEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("gender must not be empty characters")
        done();
      })
  }); 

  it("Should not update user if no birthdate is invalid", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.invalidDate)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("date of birth should be in a format yyyy-mm-dd")
        done();
      })
  }); 
  it("Should not update user if birthdate is empty", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', token)
      .send(data.emptyDate)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal("date of birth should be in a format yyyy-mm-dd")
        done();
      })
  }); 



  });
