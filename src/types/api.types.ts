/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryFunction, QueryKey } from "@tanstack/react-query"
import { AxiosRequestHeaders, AxiosResponse, Method } from "axios"

export type MethodTypes = "get" | "post" | "patch" | "put" | "delete"

export interface SecureRequestProps<T = Record<string, unknown>> {
  method?: Method
  url: string
  body?: Record<string, unknown> | FormData
  isReavPagesApi?: boolean
  baseURL?: string
  headers?: AxiosRequestHeaders
  endpoint?: string
  queryKey?: string | string[] | number[]
  showSuccessToast?: boolean
  showFailureToast?: boolean
  token?: string
  message?: string
  queryFn?: QueryFunction<ReavPagesResponseType<T>, QueryKey>
}

export interface RequestResponse<T = Record<string, unknown>> {
  queryFn?: QueryFunction<ReavPagesResponseType<T>, QueryKey>
}

export type ReavPagesResponseType<D = Record<string, unknown>> = AxiosResponse<
  CredentialsServerResponseModel<D>
>

export type CredentialsServerResponseModel<T> = T

export interface ResponseErrorType {
  message: string
  name: string
  errors?: Record<string, unknown>

  response: {
    data: {
      response_message: string
      status: number
      statusCode: number
      message: string
      details: string[]
      errors?: Record<string, any>
      source: string
    }
  }
}

export type CustomMethod = "get" | "put" | "delete" | "post" | "patch"

export interface ILoginRes {
  token: string
  user: any
}
