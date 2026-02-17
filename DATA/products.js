/* VANGUARD HARDWARE DATABASE v15.10.0
    Logic: Multi-category support enabled.
    Mapping: VL111 & VL113 are mapped to both Vehicle & Motorcycle.
*/

const PRODUCT_DATABASE = [
    { 
        id: "VL111", 
        cat: ["vehicle", "motorcycle"], 
        name: "VL111 TERMINAL", 
        desc: "Advanced 4G LTE tracker with multiple I/O for high-end fleet monitoring and motorcycle security.", 
        status: "ACTIVE",
        features: [
            { icon: "📡", label: "4G LTE Cat 1" },
            { icon: "🛰️", label: "GPS/BDS/LBS" },
            { icon: "🔋", label: "Internal Battery" },
            { icon: "✂️", label: "Fuel Cut-off" }
        ]
    },
    { 
        id: "VL113", 
        cat: ["vehicle", "motorcycle"], 
        name: "VL113 SMART", 
        desc: "Rugged, waterproof 4G tracker designed for motorcycles, e-bikes, and heavy machinery.", 
        status: "ACTIVE",
        features: [
            { icon: "🛡️", label: "IP66 Waterproof" },
            { icon: "⚡", label: "9-90V Voltage" },
            { icon: "📢", label: "Vibration Alert" },
            { icon: "🔒", label: "Anti-Theft Lock" }
        ]
    },
    { 
        id: "VL505", 
        cat: ["obd"], 
        name: "VL505 OBD II", 
        desc: "Professional plug-and-play OBDII tracker with CAN bus data reading and driver behavior analysis.", 
        status: "ACTIVE",
        features: [
            { icon: "🔌", label: "OBDII Interface" },
            { icon: "📊", label: "CAN Data" },
            { icon: "⚠️", label: "Crash Detection" },
            { icon: "📍", label: "LBS Location" }
        ]
    }
    // Add remaining devices (VL501, Qbit M, etc.) following the same structure below
];