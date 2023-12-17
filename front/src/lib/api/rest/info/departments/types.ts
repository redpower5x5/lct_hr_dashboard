// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetDepartmentsRequest {}

export interface DepartmentObject {
  id: number
  name: string
}

export interface GetDepartmentsResponse {
  departments: DepartmentObject[]
}
