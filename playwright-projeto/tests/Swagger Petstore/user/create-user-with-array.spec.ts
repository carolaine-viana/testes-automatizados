import { test, expect, APIRequestContext } from "@playwright/test";
import { createApiContext } from "../../supports/api";
import { faker } from "@faker-js/faker";

let apiContext: APIRequestContext;

const defaultUser = {
  id: faker.random.numeric(5),
  username: faker.internet.userName(),
  firstName: faker.internet.domainName(),
  lastName: faker.random.word(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.random.numeric(),
  userStatus: 0,
};

test.describe.serial("create user", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
  });
 
  test("create user using array with success", async () => {
    const request = await apiContext.post("v2/user/createWithArray", {
      data: 
        [
          {...defaultUser},
          {...defaultUser},
          {...defaultUser}
        ]
    });
    expect(request.status()).toBe(200);
  });

  test("should return error if input not contains array", async () => {
    const request = await apiContext.post("v2/user/createWithArray", {
      data: 
        {
          ...defaultUser
        }
    });
    expect(request.status()).toBe(500);
  });
});
