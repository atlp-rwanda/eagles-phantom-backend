import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import bus from './mock/busData';
import user from './mock/data';
import { encode } from '../utils/jwt';

chai.use(chaiHttp);
const adminToken = encode(user[3]);
const nonAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydWNlQGdtYWlsLmNvbSIsInJvbGUiOiJkcml2ZXIiLCJpYXQiOjE2MDMzNzcyNzAsImV4cCI6MTYwMzk4MjA3MH0.UCLiQvmKRhD8_iamHOnjMLgVtxs9Z1e1ixVgc0cVVUA';

describe(' create Buses', () => {
    it('create bus', (done) => {
        chai
          .request(app)
          .post('/api/v1/buses')
          .set('x-access-token', adminToken)
          .send(bus)
          .end((err, res) => {
            expect(res).to.have.status(403);
            expect(res).to.have.property('status');
            expect(res.body).to.be.an('object');
            done(err);
          });
      });
      it('it should not create buses if non admin token', (done) => {
        chai.request(app)
        .post('/api/v1/buses')
        .set('x-access-token', nonAdminToken)
        .end((err, res) => {
            expect(res).to.have.status([401]);
            expect(res).to.have.property('status');
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.eql(401);
            expect(res.body.message).to.be.a('string');
          done();
          });
      });
})