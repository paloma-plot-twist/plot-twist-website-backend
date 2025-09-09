import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
  spreadsheetId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, role, challenge, spreadsheetId }: LeadSubmission = await req.json();
    
    console.log("Processing lead submission for Google Sheets:", { name, email, company, role, challenge, spreadsheetId });

    const googleApiKey = Deno.env.get("GOOGLE_API_KEY");
    
    if (!googleApiKey) {
      throw new Error("Google API Key not configured");
    }

    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID is required");
    }

    // Prepare the data to append to Google Sheets
    const values = [
      [
        new Date().toISOString(), // Timestamp
        name,
        email,
        company || '',
        role || '',
        challenge || ''
      ]
    ];

    // Google Sheets API endpoint to append data
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=RAW&key=${googleApiKey}`;

    console.log("Sending data to Google Sheets:", values);

    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: values
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Google Sheets API error:", result);
      throw new Error(`Google Sheets API error: ${result.error?.message || 'Unknown error'}`);
    }

    console.log("Successfully added to Google Sheets:", result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Lead submitted successfully to Google Sheets",
        updatedRows: result.updates?.updatedRows || 1
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-to-sheets function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);