

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
      it('Log in the user', (done) => {
        chai
          .request(app)
          .post('/v1/auth/login')
          .send({
            email: 'Josh@gmail.com',
            password: 'admin',
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equals('logged In successfull');
            done();
          });
      });

      it(' should check if token is deleted', (done) => {
        
      chai.request(app)
         .get('/logout')
          .end((err, res) => {
            console.log(res.body)
            expect(res).to.have.status(200);
            expect(res.body.message).to.equals('you are successfully logged out');
            done();
          });
      });
  });
  