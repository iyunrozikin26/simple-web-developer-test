const request = require("supertest");
const app = require("../app");
const { hashingPassword } = require("../helpers/bcrypt");

const user = {
    name: "nanas",
    email: "nanas@voltest.com",
    password: "nanas!123",
};

let access_token;
let access_token1;

test("login admin succes", (done) => {
    request(app)
        .post("/login")
        .send({
            email: "admin@voltest.com",
            password: "admin!123",
        })
        .expect(200)
        .then((response) => {
            access_token = response.body.access_token;
            done();
        })
        .catch((err) => done(err));
});

test("login empty email", (done) => {
    request(app)
        .post("/login")
        .send({
            password: "admin!123",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});
test("login empty password", (done) => {
    request(app)
        .post("/login")
        .send({
            email: "admin@voltest.com",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});

test("get users", (done) => {
    request(app)
        .get("/users")
        .set("access_token", access_token)

        .expect(200)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});

test("get userById", (done) => {
    request(app)
        .get("/users/1")
        .set("access_token", access_token)

        .expect(200)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});

test("post Users failed email empty string", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send({
            email: "",
            password: "admin!123",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});
test("post Users failed password empty string", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send({
            email: "admin@voltest.com",
            password: "",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});
test("post Users failed email empty", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send({
            password: "admin!123",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});
test("post Users failed password empty", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send({
            email: "admin@voltest.com",
        })
        .expect(400)
        .then((response) => {
            // console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});

test("post Users success", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send(user)
        .expect(201)
        .then((response) => {
            done();
        })
        .catch((err) => done(err));
});

test("login user succes", (done) => {
    request(app)
        .post("/login")
        .send({
            email: "nanas@voltest.com",
            password: "nanas!123",
        })
        .expect(200)
        .then((response) => {
            access_token1 = response.body.access_token;
            done();
        })
        .catch((err) => done(err));
});

test("post Users already exist", (done) => {
    request(app)
        .post("/users")
        .set("access_token", access_token)

        .send(user)
        .expect(500)
        .then((response) => {
            console.log(response.body);
            done();
        })
        .catch((err) => done(err));
});

test("delete user unauthorize", (done) => {
    request(app)
        .delete("/users/99999")
        .expect(401)
        .then((response) => {
            done();
        })
        .catch((err) => done(err));
});

test("delete user not found", (done) => {
    request(app)
        .delete("/users/99999")
        .set("access_token", access_token)
        .expect(404)
        .then((response) => {
            done();
        })
        .catch((err) => done(err));
});
test("delete user by role user", (done) => {
    request(app)
        .delete("/users/1")
        .set("access_token", access_token1)
        .expect(403)
        .then((response) => {
            done();
        })
        .catch((err) => done(err));
});

test("delete user success by admin", (done) => {
    request(app)
        .delete("/users/373")
        .set("access_token", access_token)
        .expect(200)
        .then((response) => {
            done();
        })
        .catch((err) => done(err));
});
