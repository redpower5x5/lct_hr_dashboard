export interface SignInRequest {
  username: string
  password: string
  scope: string
  client_id: string
  client_secret: string
  grant_type: string
}

export interface SignInResponse {
  access_token: string
  token_type: string
}
