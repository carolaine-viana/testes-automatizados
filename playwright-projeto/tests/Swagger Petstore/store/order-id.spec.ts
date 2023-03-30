import { test, expect, APIRequestContext } from "@playwright/test";
import { createApiContext } from "../../supports/api";

let apiContext: APIRequestContext;

const defaultPet = {
  id: 123,
  petId: 0,
  quantity: 0,
  shipDate: "2023-03-18T20:36:12.040Z",
  status: "placed",
  complete: true
};

let id;

test.describe.serial("order for a pet", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
    const request = await apiContext.post("v2/store/order", {
      data: 
          {
            ...defaultPet,
          }
    });

    const response = await request.json()
    id = response.id;
  });

  test("should order with success", async () => {
    const request = await apiContext.get(`v2/store/order/${id}`);
    expect(request.status()).toBe(200);
  });

  test("should return error if not exists id", async () => {
    const request = await apiContext.post("v2/store/order/222");
    expect(request.status()).toBe(405);
  });
});
