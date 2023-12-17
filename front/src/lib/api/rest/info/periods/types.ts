// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetPeriodsRequest {}

export interface PeriodObject {
  id: number
  start_date: string
  end_date: string
}

export interface GetPeriodsResponse {
  periods: PeriodObject[]
}
