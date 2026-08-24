import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  let cleanName = "";
  let cleanWhatsapp = "";
  
  try {
    const { name, whatsapp } = await request.json();
    
    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: "Name and WhatsApp number are required" },
        { status: 400 }
      );
    }

    cleanWhatsapp = whatsapp.trim();
    cleanName = name.trim();

    // Prepare lead object
    const lead = {
      name: cleanName,
      whatsapp: cleanWhatsapp,
      timestamp: new Date().toISOString(),
    };

    // Store lead locally in data/leads.json
    const dataDir = path.join(process.cwd(), "data");
    const filepath = path.join(dataDir, "leads.json");
    let leads = [];

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      if (fs.existsSync(filepath)) {
        const fileData = fs.readFileSync(filepath, "utf8");
        const parsed = JSON.parse(fileData);
        if (Array.isArray(parsed)) {
          leads = parsed;
        }
      }
    } catch (readError) {
      console.warn("Could not read existing leads file, starting fresh:", readError);
      leads = [];
    }

    leads.push(lead);

    try {
      fs.writeFileSync(filepath, JSON.stringify(leads, null, 2), "utf8");
    } catch (writeError) {
      // Fallback for read-only environments like Vercel
      console.warn("Filesystem is read-only or write failed. Logging lead to console:", writeError);
      console.log("LEAD_CAPTURE_FALLBACK:", JSON.stringify(lead));
    }

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Critical error in leads API:", error);
    // Even in case of a critical crash, let's log the lead data to console so it's not lost
    if (cleanName && cleanWhatsapp) {
      console.log("LEAD_CAPTURE_CRITICAL_FALLBACK:", JSON.stringify({
        name: cleanName,
        whatsapp: cleanWhatsapp,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error)
      }));
      return NextResponse.json({
        success: true,
        message: "Lead captured via fallback logging",
      });
    }
    
    return NextResponse.json(
      { error: "Failed to save lead information" },
      { status: 500 }
    );
  }
}
