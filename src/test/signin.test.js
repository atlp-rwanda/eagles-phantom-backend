// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';

// import app from '../app';

// chai.use(chaiHttp);
// describe('Sign in route', () => {
//   it('check user info', (done) => {
//     chai
//       .request(app)
//       .post('/api/v1/auth/login')
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equals('firstname is required');
//         done();
//       });
//   });

//   it('Log in the user', (done) => {
//     chai
//       .request(app)
//       .post('/api/v1/auth/login')
//       .send({
//         email: 'Josh@gmail.com',
//         password: 'admin',
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equals('firstname is required');
//         done();
//       });
//   });
// });
