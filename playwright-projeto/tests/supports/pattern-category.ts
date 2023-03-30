import { env } from './env'
import { APIRequestContext } from '@playwright/test'

const TRACER_ID = '1234'
const BASE_URL = env('BASE_URL')

interface Data {
  name: string
  type: string
  parentId?: string
}

export const createApiContext = (playwright) =>
  playwright.request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      tracerid: TRACER_ID
    }
  })

export const createObject = async (apiContext: APIRequestContext, data: Data) => {
  const request = await apiContext.post('/categories', {
    data: {
      ...data
    }
  })
  return await request.json()
}

export const deleteUserById = async (apiContext: APIRequestContext, id: string) => {
  const request = await apiContext.patch(`/categories/${id}/delete`)
  return await request.json()
}

export const searchByID = async (apiContext: APIRequestContext, id: string) => {
  const request = await apiContext.get(`/categories/${id}`)
  return await request.json()
}

export const ActiveInactiveObject = async (apiContext: APIRequestContext, id: string) => {
  const request_active = await apiContext.patch(`/categories/${id}/active`)
  return await request_active.json()

  const request_inactive = await apiContext.patch(`/categories/${id}/inactive`)
  return await request_inactive.json()
}
