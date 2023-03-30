import { test, expect, APIRequestContext } from "@playwright/test";
import { createApiContext } from "../../supports/api";
import { faker } from "@faker-js/faker";

let apiContext: APIRequestContext;

const defaultPet = {
  id: '123',
  category: {
    id: 0,
    name: "string",
  },
  name: faker.internet.userName(),
  photoUrls: ["///C:/Users/wncg/Desktop/QArentena/Nina_Maria1.jpeg"],
  status: "available",
};

test.describe.serial("create pet", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
  });
  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test("should create pet with success", async () => {
    const request = await apiContext.post("/v2/pet", {
      data: {
        ...defaultPet,
      },
    });

    const response = await request.json();
      console.log('aq', response)

    expect(response.id).toBeTruthy();
    expect(response.category).toBeTruthy();
    expect(response.name).toBeTruthy();
    expect(response.photoUrls).toBeTruthy();
    expect(response.tags).toBeTruthy();
    expect(response.status).toBeTruthy();

    expect(request.status()).toBe(200);
  });

  test("should return error if not exists required field", async () => {
    const request = await apiContext.post("/v2/pet");
    expect(request.status()).toBe(415);
  });

  test('should return error if body is empty', async () => {
    const request = await apiContext.post("/v2/pet", {
      data: {
        id: '',
        category: {
          id: '',
          name: '',
        },
        name: '',
        photoUrls: '',
        status: '',
      }
    })
    expect(request.status()).toBe(500)
  })
});
