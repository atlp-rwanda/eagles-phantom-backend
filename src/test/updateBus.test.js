import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import bus from './mock/busData';
import user from './mock/data';
import { encode } from '../utils/jwt';

chai.use(chaiHttp);
const adminToken = encode(user[3]);
const nonAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydWNlQGdtYWlsLmNvbSIsInJvbGUiOiJkcml2ZXIiLCJpYXQiOjE2MDMzNzcyNzAsImV4cCI6MTYwMzk4MjA3MH0.UCLiQvmKRhD8_iamHOnjMLgVtxs9Z1e1ixVgc0cVVUA';

describe(' get Buses', () => {
    it('update bus', (done) => {
        chai
          .request(app)
          .patch('/api/v1/buses/1')
          .set('x-access-token', adminToken)
          .set('request.params', 1)
          .send({
            busId: 1,
          })
          .end((err, res) => {
            expect(res).to.have.status(403);
            expect(res).to.have.property('status');
            done();
          });
      });
      it('it should not update buses if non admin token', (done) => {
        chai.request(app)
        .post('/api/v1/buses')
        .set('x-access-token', nonAdminToken)
        .end((err, res) => {
            expect(res).to.have.status([401]);
          done();
          });
      });
      it('should not update bus if invalid id', (done) => {
        chai
          .request(app)
          .delete('/api/v1/buses/yuu')
          .set('x-access-token', adminToken)
          .end((err, res) => {
            expect(res).to.have.status(403);
            expect(res).to.have.property('status');
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.be.a('string');
            done();
          });
      });
});