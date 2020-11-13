import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import { encode } from '../utils/jwt';
import user from './mock/data';

dotenv.config();

chai.use(chaiHttp);
const requester = () => chai.request(app);
const prefix = '/api/v1/auth/register';
const adminToken = encode(user[6]);
const fakeToken = `${adminToken}abc`;
const nonAdminToken = encode(user[7]);

describe('Tests for the registration of the users', () => {
  it('Should not be possible to do any task with no token', (done) => {
    requester()
      .post(prefix)
      .send(user[0])
      .end((error, res) => {
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(401);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Should not be possible to do any task with a fake token', (done) => {
    requester()
      .post(prefix)
      .set('x-access-token', fakeToken)
      .send(user[1])
      .end((error, res) => {
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(401);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Should not be possible to do any task if not an admin', (done) => {
    requester()
      .post(prefix)
      .set('x-access-token', nonAdminToken)
      .send(user[0])
      .end((error, res) => {
        expect(res).to.have.status([403]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(403);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Should not be possible to signup with missing field', (done) => {
    requester()
      .post(prefix)
      .set('x-access-token', adminToken)
      .send(user[0])
      .end((error, res) => {
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Should be possible to register a user with right, complete and not duplicated data', (done) => {
    requester()
      .post(prefix)
      .set('x-access-token', adminToken)
      .send(user[2])
      .end((error, res) => {
        expect(res).to.have.status([201]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(201);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Should not be able to signup if email is already in the system', (done) => {
    requester()
      .post(prefix)
      .set('x-access-token', adminToken)
      .send(user[2])
      .end((error, res) => {
        expect(res).to.have.status([409]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(409);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
});
