import { test, expect, APIRequestContext } from "@playwright/test";
import { createApiContext } from "../../supports/api";

let apiContext: APIRequestContext;

test.describe.serial("inventory story for a pet", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
  });

  test("should return inventory with success", async () => {
    const request = await apiContext.get("v2/store/inventory");

    expect(request.status()).toBe(200);
  });
});
