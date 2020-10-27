import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { describe, it } from 'mocha';
import data from './mock/updateData';
import app from "../app";


chai.use(chaiHttp);


const prefix = '/api/v1/auth/updateProfile';
const tokenDriver ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11Z2VtYWxlb0BnbWFpbC5jb20iLCJyb2xlIjoiZHJpdmVyIiwiaWF0IjoxNjA0NTg0NzU0LCJleHAiOjE2MDUxODk1NTR9.5Xb4IE8Zn7Krb97--W7V1wda-rmLifTk8GaamsaQ5oc'

describe(" Test update profile", () =>{
  it("Should not update user if firstname is empty ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.firstnameIsEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 
  it("Should not update user if lastname is empty ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.lastnameIsEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 
  it("Should not update user if firstname or lastname is shorter than 5 chars ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.isShort)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 

  it("Should not update if no valid email is provided", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.isAnEmail)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 

  it("Should not update user if email is empty string ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.emailEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 

  it("Should not update user if gender is longer than eight chars ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.isBig)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 

  it("Should not update user if gender empty string ", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.genderEmpty)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 

  it("Should not update user if no birthdate is invalid", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.invalidDate)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 
  it("Should not update user if birthdate is empty", done=>{
    chai 
      .request(app)
      .patch(prefix)
      .set('x-access-token', tokenDriver)
      .send(data.emptyDate)
      .end((err,res)=>{
        expect(res).to.have.status(400);
        done();
      })
  }); 



  });
