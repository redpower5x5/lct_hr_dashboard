// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetEmployeesRequest {}

export interface EmployeeInfo {
  id: number
  name: string
  email: string
  phone: string
  department: string
  sex: string
  age: number
  avatar: string
}

export interface GetEmployeesResponse {
  employees: EmployeeInfo[]
}
