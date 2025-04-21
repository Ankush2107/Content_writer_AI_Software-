CREATE TABLE IF NOT EXISTS ai_output (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_data VARCHAR NOT NULL,
  ai_response TEXT,
  template_slug VARCHAR NOT NULL,
  created_by VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 