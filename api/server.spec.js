const request = require('supertest');

const server = require('./server.js')

// describe('auth-router.js', () => {
//   describe('POST/', () => {
//     it("Should save user to database", async done => {
//       const res = await request.post("/register").send({
//         username: "user1",
//         password: "password"
//       });
//       done();
//     });
      
      

//     });
//   })


describe('Register Endpoints', () => {
  // it('should create a new user', async () => {
  //   const res = await request(server)
  //     .post('/api/auth/register')
  //     .send({
  //       username: 'cedric1',
  //       password: 'password',
  //     })
  //   expect(res.statusCode).toEqual(201)
  // })
  it('should not create a new user', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: 'cedric',
      })
    expect(res.statusCode).toEqual(500)
  })

  it('should not create a new user', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        password: 'cedric',
      })
    expect(res.statusCode).toEqual(500)
    expect(res.type).toMatch(/json/i)
  })

})

describe('Login Endpoints', () => {
  it('should login user', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'cedric1',
        password: 'password',
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should return JSON', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'cedric1',
        password: 'password',
      })
    expect(res.type).toMatch(/json/i)
  })
  
})