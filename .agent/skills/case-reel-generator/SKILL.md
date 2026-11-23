---
name: case-reel-generator
description: >-
  Programmatic video reel generator using HyperFrames, FFmpeg, Wispr (faster-whisper), and Edge TTS.
  Generates 9:16 vertical kinetic video reels (1080x1920) with synchronized AI voiceovers,
  karaoke word-level subtitles, ambient background motion, and conversion CTAs for business categories.
---

# Case Reel Generator (HyperFrames + FFmpeg + Wispr + Edge TTS)

This skill provides the automated end-to-end pipeline to generate high-converting, vertical 9:16 video reels (1080x1920 MP4) tailored for any business category or use case.

## The 4 Core Engines

1. **HyperFrames (`hyperframes`)**:
   - Modern HTML/CSS/GSAP video composition framework.
   - Renders 1080x1920 vertical canvas frame-by-frame using headless Chrome.
2. **FFmpeg (`ffmpeg` & `ffprobe`)**:
   - Encodes H.264 video streams and muxes the audio voiceover into broadcast-ready MP4.
3. **Wispr (`faster-whisper`)**:
   - Transcribes voiceover audio with millisecond-accurate word-level timestamps.
   - Drives kinetic karaoke subtitle text highlighting (active word glows in emerald `#10b981`).
4. **Edge TTS (`edge-tts`)**:
   - Neural text-to-speech engine with natural Indian English and multilingual voices:
     - `en-IN-PrabhatNeural` (Authoritative male voice)
     - `en-IN-NeerjaExpressiveNeural` (Engaging female voice)
     - `hi-IN-MadhurNeural` (Hindi male voice)

---

## Supported Categories & Case Presets

| Category Key | Industry / Target | Primary Metric | Voice |
| :--- | :--- | :--- | :--- |
| `d2c-fashion` | D2C Fashion & Apparel | `3.8x ROAS` | `en-IN-PrabhatNeural` |
| `clinics-doctors` | Clinics & Healthcare | `+340% Inquiries` | `en-IN-NeerjaExpressiveNeural` |
| `coaching-education` | Coaching & EdTech | `4.2x Admissions` | `en-IN-PrabhatNeural` |
| `real-estate` | Real Estate Builders | `+220% Site Visits` | `en-IN-PrabhatNeural` |
| `restaurants` | Restaurants & Cafes | `+340% Footfall` | `en-IN-NeerjaExpressiveNeural` |
| `hardware-manufacturers`| Industrial MSMEs | `Pan-India RFQs` | `en-IN-PrabhatNeural` |
| `salons-spas` | Salons & Luxury Spas | `+180% Bookings` | `en-IN-NeerjaExpressiveNeural` |
| `automobile-services` | Car Detailing & Garages | `+280% Detailing Jobs` | `en-IN-PrabhatNeural` |
| `home-decor` | Home Decor Showrooms | `+310% Walk-Ins` | `en-IN-NeerjaExpressiveNeural` |

---

## CLI Usage

To generate a reel for any category, run:

```powershell
python C:\Users\PC2\.gemini\tools\generate_case_reel.py <category_key> [output_directory]
```

### Example: Generate D2C Fashion Reel
```powershell
python C:\Users\PC2\.gemini\tools\generate_case_reel.py d2c-fashion C:\Users\PC2\.gemini\tools\reels
```

### Example: Generate Doctor & Clinic Reel
```powershell
python C:\Users\PC2\.gemini\tools\generate_case_reel.py clinics-doctors C:\Users\PC2\.gemini\tools\reels
```

Output: A broadcast-quality `1080x1920` MP4 video saved with full audio, progress rail, and karaoke subtitles.
