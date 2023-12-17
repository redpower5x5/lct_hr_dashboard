// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetStatisticsRequest {
  department_ids: string[]
  date_from: string
  date_to: string
}

export interface StatisticsObjectRes {
  employee_id: number
  employee_name: string
  employee_email: string
  employee_department: string
  employee_quit_probability: number
}

export interface GetStatisticsResponse {
  statistics: StatisticsObjectRes[]
}
