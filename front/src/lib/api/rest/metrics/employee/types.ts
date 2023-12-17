export interface GetEmployeeMetricsRequest {
  id: string
}

export interface MetricsObject {
  employee_id: number
  number_of_answered_emails: number
  number_of_sent_emails: number
  number_of_received_emails: number
  mean_number_of_recipients_in_one_email_for_user: number
  number_of_emails_read_after_x_minutes: number
  mean_number_of_days_between_receiving_emails_and_read: number
  number_of_sent_emails_outside_of_working_hours: number
  received_and_sent_emails_proportion_for_user: number
  mean_number_of_not_answered_questions_in_email: number
  mean_length_of_user_emails: number
  mean_answering_time_for_user: number
  number_of_passed_corporative_tests_or_courses_for_user: number
  number_of_unique_recipients_of_emails_for_user: number
  number_of_unique_departments_in_emails_for_user: number
  toxcity_in_sent_emails_for_user: string
  toxcity_in_received_emails_for_user: string
  emotions_in_sent_emails_for_user: string
  emotions_in_received_emails_for_user: string
  salary: number
  high_priority_emails_reply_delay: number
  medium_priority_emails_reply_delay: number
  low_priority_emails_reply_delay: number
  period: {
    id: number
    start_date: string
    end_date: string
  }
}

export interface GetEmployeeMetricsResponse {
  metrics: MetricsObject[]
  periods: Array<{
    id: number
    start_date: string
    end_date: string
  }>
}
