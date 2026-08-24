import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, whatsapp } = await request.json();
    
    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: "Name and WhatsApp number are required" },
        { status: 400 }
      );
    }

    const cleanWhatsapp = whatsapp.trim();
    const cleanName = name.trim();

    // Store lead locally in data/leads.json
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    const filepath = path.join(dataDir, "leads.json");
    let leads = [];

    if (fs.existsSync(filepath)) {
      try {
        const fileData = fs.readFileSync(filepath, "utf8");
        leads = JSON.parse(fileData);
      } catch (parseError) {
        // Fallback if file is corrupted or empty
        leads = [];
      }
    }

    leads.push({
      name: cleanName,
      whatsapp: cleanWhatsapp,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(filepath, JSON.stringify(leads, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Failed to save lead information" },
      { status: 500 }
    );
  }
}
