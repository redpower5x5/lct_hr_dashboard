export interface GetEmployeeInfoRequest {
  id: string
}

export interface GetEmployeeInfoResponse {
  id: number
  name: string
  email: string
  phone: string
  department: string
  sex: string
  age: number
  avatar: string
  quit_probability: number
}
