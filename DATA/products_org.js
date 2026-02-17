/* GeoTrackPro Vanguard - Master Hardware Database v13.5.0
   Last Updated: 2026-01-07
   Note: All specs link to ROOT/DOCS/SPECS/[id].pdf
*/

const PRODUCT_DATABASE = [
    // --- VEHICLE TRACKERS ---
    { id: "VL103", cat: "vehicle", name: "VL103", desc: "Classic High-Sensitivity Vehicle Tracker.", specs: "VL103.pdf", status: "ACTIVE" },
    { id: "VL106", cat: "vehicle", name: "VL106", desc: "Advanced LTE Fleet Terminal.", specs: "VL106.pdf", status: "ACTIVE" },
    { id: "VL111", cat: "vehicle", name: "VL111", desc: "Professional 4G LTE with 2G Fallback.", specs: "VL111.pdf", status: "ACTIVE" },
    { id: "VL113", cat: "vehicle", name: "VL113", desc: "Multi-Band Enhanced Positioning Terminal.", specs: "VL113.pdf", status: "ACTIVE" },
    { id: "VL808", cat: "vehicle", name: "VL808", desc: "Heavy-Duty Industrial Fleet Tracker.", specs: "VL808.pdf", status: "ACTIVE" },
    
    // --- ASSET TRACKERS ---
    { id: "LL701", cat: "asset", name: "LL701", desc: "Ultra-Long Standby Wireless Asset Manager.", specs: "LL701.pdf", status: "ACTIVE" },
    { id: "LL702", cat: "asset", name: "LL702", desc: "Rugged IP67 Waterproof Asset Tracker.", specs: "LL702.pdf", status: "ACTIVE" },
    { id: "LL301", cat: "asset", name: "LL301", desc: "Rechargeable Industrial Asset Tracker.", specs: "LL301.pdf", status: "ACTIVE" },
    { id: "LL744", cat: "asset", name: "LL744", desc: "Global Logistics & Container Tracker.", specs: "LL744.pdf", status: "ACTIVE" },

    // --- OBD TRACKERS ---
    { id: "VL505", cat: "obd", name: "VL505", desc: "Plug-and-Play OBDII Diagnostic Tracker.", specs: "VL505.pdf", status: "ACTIVE" },

    // --- MOTORCYCLE TRACKERS ---
    { id: "VL111M", cat: "motorcycle", name: "VL111 (Moto)", desc: "Vibration-Resistant Motorcycle LTE Tracker.", specs: "VL111.pdf", status: "ACTIVE" },
    { id: "VL113M", cat: "motorcycle", name: "VL113 (Moto)", desc: "Compact Multi-GNSS Motorcycle Terminal.", specs: "VL113.pdf", status: "ACTIVE" },

    // --- PERSONAL TRACKERS ---
    { id: "QbitM", cat: "personal", name: "Qbit M", desc: "Micro Personal Safety GPS Tracker.", specs: "QbitM.pdf", status: "ACTIVE" },
    { id: "PL601", cat: "personal", name: "PL601", desc: "Personnel Management Safety Tracker.", specs: "PL601.pdf", status: "ACTIVE" },
    { id: "PL200", cat: "personal", name: "PL200", desc: "Advanced Worker Protection Terminal.", specs: "PL200.pdf", status: "ACTIVE" },

    // --- DASHCAMS ---
    { id: "JC181", cat: "dashcam", name: "JC181", desc: "Professional Single-Channel Dashcam.", specs: "JC181.pdf", status: "ACTIVE" },
    { id: "JC182", cat: "dashcam", name: "JC182", desc: "Dual-Lens Commercial Video Monitor.", specs: "JC182.pdf", status: "ACTIVE" },
    { id: "JC261", cat: "dashcam", name: "JC261", desc: "Full HD Industrial Video Terminal.", specs: "JC261.pdf", status: "ACTIVE" },
    { id: "JC400", cat: "dashcam", name: "JC400", desc: "Edge Computing AI Video Solution.", specs: "JC400.pdf", status: "ACTIVE" },
    { id: "JC450", cat: "dashcam", name: "JC450 AI VISION", desc: "8-Feature Multi-Channel AI Surveillance.", specs: "JC450.pdf", status: "ACTIVE" },
    { id: "JC170", cat: "dashcam", name: "JC170", desc: "Smart Entry-Level AI Dashcam.", specs: "JC170.pdf", status: "ACTIVE" },
    { id: "JC171", cat: "dashcam", name: "JC171", desc: "Ultra-Compact AI Video Fleet Cam.", specs: "JC171.pdf", status: "ACTIVE" },

    // --- CAMERA ACCESSORIES ---
    { id: "CE02", cat: "acc", name: "CE02", desc: "Hardware Interface Expansion Module.", specs: "CE02.pdf", status: "ACTIVE" },
    { id: "CI06F", cat: "acc", name: "CI06F", desc: "AI Driver Monitoring System (DMS) Camera.", specs: "CI06F.pdf", status: "ACTIVE" },
    { id: "CI05F", cat: "acc", name: "CI05F", desc: "Advanced Cabin View Night-Vision Lens.", specs: "CI05F.pdf", status: "ACTIVE" },
    { id: "CI04", cat: "acc", name: "CI04", desc: "External Waterproof Auxiliary Camera.", specs: "CI04.pdf", status: "ACTIVE" },
    { id: "CI03", cat: "acc", name: "CI03", desc: "Standard Definition Internal Camera.", specs: "CI03.pdf", status: "ACTIVE" },
    { id: "CI02", cat: "acc", name: "CI02", desc: "Rear-Facing High-Definition Lens.", specs: "CI02.pdf", status: "ACTIVE" },
    { id: "CI01", cat: "acc", name: "CI01", desc: "Wide-Angle Side View Accessory Cam.", specs: "CI01.pdf", status: "ACTIVE" },

    // --- FUTURE PIPELINE ---
    { id: "VANGUARD_X", cat: "dashcam", name: "Vanguard X1", desc: "Next-Gen Neural Processor AI Camera.", specs: "TBD", status: "COMING_SOON" }
];