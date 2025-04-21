export interface Database {
  public: {
    Tables: {
      ai_output: {
        Row: {
          id: string
          form_data: string
          ai_response: string | null
          template_slug: string
          created_by: string
          created_at: string
        }
        Insert: {
          id?: string
          form_data: string
          ai_response?: string | null
          template_slug: string
          created_by: string
          created_at?: string
        }
        Update: {
          id?: string
          form_data?: string
          ai_response?: string | null
          template_slug?: string
          created_by?: string
          created_at?: string
        }
      }
    }
  }
} 