-- Create customer_leads table with IST timezone
CREATE TABLE public.customer_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  challenge TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'Asia/Kolkata'),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'Asia/Kolkata'),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'Asia/Kolkata')
);

-- Enable Row Level Security
ALTER TABLE public.customer_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert customer leads
CREATE POLICY "Anyone can submit customer leads" 
ON public.customer_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading of customer leads
CREATE POLICY "Only authenticated users can read customer leads" 
ON public.customer_leads 
FOR SELECT 
USING (false);

-- Create function to update timestamps in IST
CREATE OR REPLACE FUNCTION public.update_updated_at_column_ist()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now() AT TIME ZONE 'Asia/Kolkata';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates in IST
CREATE TRIGGER update_customer_leads_updated_at
BEFORE UPDATE ON public.customer_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column_ist();