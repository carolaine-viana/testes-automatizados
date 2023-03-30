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
  name: faker.random.word(),
  photoUrls: ["///C:/Users/wncg/Desktop/QArentena/Nina_Maria1.jpeg"],
  status: "available",
};

let id;

test.describe.serial("delete pet by id", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
    const request = await apiContext.post("/v2/pet", {
      data: {
        ...defaultPet,
      },
    });

    const response = await request.json()
    id = response.id
  });

  test("should delete pet with success", async () => {
    const request = await apiContext.delete(`v2/pet/${id}`);
    expect(request.status()).toBe(200);
  });

  test("should return error if not exists required id", async () => {
    const request = await apiContext.delete(`v2/pet/1111`);
    expect(request.status()).toBe(404);
  });
});
