const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'

// Types
export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  date_joined: string
  profile: {
    id: number
    user_type: 'HR' | 'CANDIDATE'
    company: {
      id: number
      name: string
      registration_code: string
    } | null
    created_at: string
    updated_at: string
  }
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  username: string
  email: string
  first_name: string
  last_name: string
  password: string
  password_confirm: string
  user_type: 'HR' | 'CANDIDATE'
  company_code?: string
}

export interface AuthResponse {
  user: User
  token: string
  message: string
}

// API Client
class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string) {
    this.baseURL = baseURL
    // Load token from localStorage on initialization
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token')
    }
  }

  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Token ${this.token}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.detail || error.message || 'Something went wrong')
    }

    return response.json()
  }

  // Auth endpoints
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    this.setToken(response.token)
    return response
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    this.setToken(response.token)
    return response
  }

  async logout(): Promise<void> {
    await this.request('/auth/logout/', {
      method: 'POST',
    })
    this.clearToken()
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth/me/')
  }

  // Jobs endpoints
  async getJobs() {
    return this.request('/jobs/')
  }

  async createJob(data: any) {
    return this.request('/jobs/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Applications endpoints
  async getApplications() {
    return this.request('/applications/')
  }

  // Companies endpoints
  async getCompanies() {
    return this.request('/companies/')
  }
}

export const api = new ApiClient(API_BASE_URL)