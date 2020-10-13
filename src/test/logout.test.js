

  import chai,{ expect } from 'chai';
  import chaiHttp from 'chai-http';
  
  import app from '../app';
  
  
  chai.use(chaiHttp);
  
  describe('Log out a user!', () => {
  
      it(' should return log out message', (done) => {
          chai
            .request(app)
            .get('/logout')
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.message).to.equals('you are successfully logged out ');
              done();
            });
        });
  
  
        it(' should return log in message', (done) => {
          chai
            .request(app)
            .post('/login')
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.message).to.equals('signed in successfully!');
              done();
            });
        });
    
  });
  