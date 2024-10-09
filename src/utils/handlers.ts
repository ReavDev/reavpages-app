import { NetworkResponse } from '@/entities/services'
import { AxiosError } from 'axios'

export const handleAxiosErrors = (
 error: Error | AxiosError
): NetworkResponse<undefined> => {
 const axiosErr = error instanceof AxiosError
 if (axiosErr && error.response) {
  return error.response.data
 } else if (axiosErr && error.request) {
  return {
   error: 'Network error',
   message: `${error.message || 'Some went wrong'}`,
  }
 } else {
  return {
   error: 'Error',
   message: error.message,
  }
 }
}
