const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("Register Endpoints", () => {
    // it('should create a new user', async () => {
    //   const res = await request(server)
    //     .post('/api/auth/register')
    //     .send({
    //       username: 'cedric1',
    //       password: 'password',
    //     })
    //   expect(res.statusCode).toEqual(201)
    // })
    it("should not create a new user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          username: "cedric"
        });
      expect(res.statusCode).toEqual(500);
    });

    it("should not create a new user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          password: "cedric"
        });
      expect(res.statusCode).toEqual(500);
      expect(res.type).toMatch(/json/i);
    });
  });

  describe("Login Endpoints", () => {
    it("should login user", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "cedric1",
          password: "password"
        });
      expect(res.statusCode).toEqual(200);
    });

    it("should return JSON", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "cedric1",
          password: "password"
        });
      expect(res.type).toMatch(/json/i);
    });
  });

  describe("Login Endpoints", () => {
    it("should return 401 without token authentication", () => {
      return (
        request(server)
          .get("/api/jokes")
          .auth("cedric", "password")
          // .set("Authorization", `Bearer ${token}`)
          .then(response => {
            expect(response.status).toBe(401);
          })
      );
    });
    it("should be content Json", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          username: "cedric",
          password: "password"
        })
        .then(response => {
          return request(server)
            .get("/api/jokes")
            .set('Accept', 'application/json')
            .set('authorization', `Bearer ${response.body.token}`)
            .expect('Content-Type', /json/)

          // .then(res => {
          //   expect(res.status).toBe(200);

          // })
        });
    });
  });
});
