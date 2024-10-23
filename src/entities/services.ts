export interface NetworkResponse<T> {
 data?: T
 statusCode?: number
 error?: string
 message?: string | string[]
}
