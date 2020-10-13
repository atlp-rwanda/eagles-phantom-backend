

  import chai,{ expect } from 'chai';
  import chaiHttp from 'chai-http';
  
  import app from '../app';
  
  
  chai.use(chaiHttp);
  
  describe('/GET logout a user', () => {
    it(' should check if token is not provided', (done) => {
      chai.request(app)
          .get('/logout')
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.error).to.equals('you are not logged in');
            done();
          });
      });
      it(' should check if token is deleted', (done) => {
      chai.request(app)
          .get('/logout')
          .send({
            email: 'Josh@gmail.com',
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equals('you are successfully logged out');
            done();
          });
      });

  });
  