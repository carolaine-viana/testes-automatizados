export const createApiContext = (playwright) =>
  playwright.request.newContext({
    baseURL: 'https://petstore.swagger.io/',
    extraHTTPHeaders: {
      Accept: 'application/json',
    }
  })