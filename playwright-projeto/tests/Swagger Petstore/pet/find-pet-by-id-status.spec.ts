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

test.describe.serial("find by id/status", async () => {
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

  test("should return pet by status available with success", async () => {
    const request = await apiContext.get(`v2/pet/findByStatus?status=available`);
    
    const response = await request.json()

    const searchStatus = response.map((x) => {return x.status})

    expect(searchStatus).toContain("available");
    expect(request.status()).toBe(200);
  });

  test("should return pet by status pending with success", async () => {
    const request = await apiContext.get(`v2/pet/findByStatus?status=pending`);
    const response = await request.json()

    const searchStatus = response.map((x) => {return x.status})

    expect(searchStatus).toContain("pending");
    expect(request.status()).toBe(200);
  });

  test("should return pet by status sold with success", async () => {
    const request = await apiContext.get(`v2/pet/findByStatus?status=sold`);
    const response = await request.json()

    const searchStatus = response.map((x) => {return x.status})

    expect(searchStatus).toContain("sold");
    expect(request.status()).toBe(200);
  });

  test("should return pet by id with success", async () => {
    const request = await apiContext.get(`v2/pet/${id}`);
    
    expect(request.status()).toBe(200);
  });

  test("should return error if not exists required id", async () => {
    const request = await apiContext.post("/v2/pet");
    expect(request.status()).toBe(415);
  });

  test('should return error if id not exists', async () => {
    const id = '237c6e02-d444-4000-a822-338e8d4e7111'

    const request = await apiContext.post(`/v2/pet/${id}`)
    expect(request.status()).toBe(404)
  })

  test('should return error if status not exists', async () => {
    const request = await apiContext.post(`v2/pet/findByStatus?status=123`)
    expect(request.status()).toBe(405)
  })
});
