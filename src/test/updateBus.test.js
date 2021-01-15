import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import userMock from './mock/userMock';

chai.use(chaiHttp);
const nonAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydWNlQGdtYWlsLmNvbSIsInJvbGUiOiJkcml2ZXIiLCJpYXQiOjE2MDMzNzcyNzAsImV4cCI6MTYwMzk4MjA3MH0.UCLiQvmKRhD8_iamHOnjMLgVtxs9Z1e1ixVgc0cVVUA';
const id=2;
const token1=userMock.token.admin;
const token2=userMock.token.driver;

describe(' update Buses', () => {
  it('update bus', (done) => {
    chai
      .request(app)
      .patch('/api/v1/buses/'+id)
      .set('x-access-token', token1)
      .set('request.params', 1)
      .send({
        busId: 1,
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res).to.have.property('status');
        done();
      });
  });
  it('it should not update buses if non admin token', (done) => {
    chai.request(app)
    .post('/api/v1/buses')
    .set('x-access-token', token2)
    .end((err, res) => {
        expect(res).to.have.status([403]);
      done();
      });
  });
});