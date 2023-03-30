import { test, expect, APIRequestContext } from "@playwright/test";
import { createApiContext } from "../../supports/api";

let apiContext: APIRequestContext;

test.describe.serial("get user by username", async () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await createApiContext(playwright);
  });
 
  test("should return user by username with success", async () => {
    const request = await apiContext.post("v2/user/string");
    expect(request.status()).toBe(200);
  });

  test("should return error if not contains username", async () => {
    const request = await apiContext.post("v2/user/string");
    expect(request.status()).toBe(405);
  });
});
