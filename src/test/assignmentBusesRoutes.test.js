import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import user from './mock/data';
import { encode } from '../utils/jwt';

dotenv.config();

chai.use(chaiHttp);
const requester = () => chai.request(app);
const prefix1 = `/api/v1/assignment/${200}`;
const prefix2 = `/api/v1/assignment/${1}`;

const operatorToken = encode(user[12]);

describe('Tests for the assignment of buses to routes and getting the assigned buses', () => {
  it('Operator should not be able to assign any bus to a route if there is no bus is not in the system', (done) => {
    requester()
      .patch(prefix1)
      .set('x-access-token', operatorToken)
      .send(user[16])
      .end((error, res) => {
        expect(res).to.have.status([404]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(404);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Operator should not be able to assign any bus to a route if there is no route is not in the system', (done) => {
    requester()
      .patch(prefix2)
      .set('x-access-token', operatorToken)
      .send(user[17])
      .end((error, res) => {
        expect(res).to.have.status([404]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(404);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('Operator should be able to assign a bus to a route if the bus and the route exist', (done) => {
    requester()
      .patch(prefix2)
      .set('x-access-token', operatorToken)
      .send(user[16])
      .end((error, res) => {
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
});
