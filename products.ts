import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'aerobeat-pro-headphones',
    name: 'AeroBeat Pro Headphones',
    category: 'Audio',
    price: 129,
    originalPrice: 169,
    rating: 4.9,
    reviewsCount: 284,
    badge: 'BEST SELLER',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Immerse yourself in acoustic precision. Engineered with 40mm custom titanium dynamic drivers, hybrid active noise cancellation (up to -38dB), and plush memory-foam earcups wrapped in breathable protein leather.',
    shortDescription: 'Hybrid Active Noise Cancellation, 40-hour battery, custom 40mm titanium drivers.',
    features: [
      'Industry-leading Hybrid Active Noise Cancellation with Transparency Mode',
      '40-hour battery life on a single charge with USB-C quick fuel (10 min = 5 hrs)',
      'Multi-point Bluetooth 5.3 connection with dual-device seamless switching',
      'Studio-calibrated EQ presets via the Muddasir Store Companion app'
    ],
    specs: {
      'Driver Size': '40mm Titanium Composite',
      'Battery Life': '40 Hours (ANC On) / 60 Hours (ANC Off)',
      'Connectivity': 'Bluetooth 5.3 + 3.5mm Aux',
      'Weight': '248g'
    },
    colors: [
      { name: 'Midnight Navy', hex: '#0B1630' },
      { name: 'Cosmic Black', hex: '#111827' },
      { name: 'Titanium Silver', hex: '#9CA3AF' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'pulsepods-x2',
    name: 'PulsePods X2',
    category: 'Earbuds',
    price: 89,
    originalPrice: 119,
    rating: 4.8,
    reviewsCount: 416,
    badge: 'TRENDING',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-lightweight true wireless earbuds with punchy bass and crystalline treble. Featuring 4-mic AI ENC environmental noise reduction for crystal-clear calls, IPX5 water resistance, and sleek matte finish charging case.',
    shortDescription: '4-Mic ENC voice isolation, IPX5 sweatproof, 32-hour total playback with Qi wireless charging.',
    features: [
      'Quad-microphone beamforming array with AI vocal isolation',
      '32-hour combined battery life (8 hours bud + 24 hours charging case)',
      'Ergonomic pressure-relief acoustic vents for all-day comfort',
      'Instant magnetic snap-case with Qi wireless charging'
    ],
    specs: {
      'Water Resistance': 'IPX5 Sweat & Rainproof',
      'Playtime': '8h per charge (32h total with case)',
      'Audio Codecs': 'AAC, SBC, aptX Low Latency',
      'Weight': '4.1g per earbud'
    },
    colors: [
      { name: 'Stealth Black', hex: '#111827' },
      { name: 'Pure Frost White', hex: '#F3F4F6' },
      { name: 'Deep Indigo', hex: '#1E1B4B' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'novasound-mini-speaker',
    name: 'NovaSound Mini Speaker',
    category: 'Speakers',
    price: 69,
    originalPrice: 89,
    rating: 4.7,
    reviewsCount: 193,
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Compact acoustic powerhouse designed to travel anywhere. Delivers 360-degree expansive sound with deep dual passive radiators and up to 18 hours of uninterrupted playtime on a single charge.',
    shortDescription: '360° immersive audio, rugged IP67 waterproof enclosure, 18-hour continuous battery.',
    features: [
      'True 360° omnidirectional acoustic dispersion',
      'TWS True Wireless Stereo pairing: sync two speakers for stereo soundstage',
      'IP67 fully waterproof and dustproof submersible casing',
      'Integrated braided tear-resistant magnetic carry strap'
    ],
    specs: {
      'Output Power': '20W Peak Output',
      'Waterproof Rating': 'IP67 Submersible (up to 1m)',
      'Battery Capacity': '4,500 mAh (18 Hours Play)',
      'Wireless Range': '15m / 50ft (Bluetooth 5.3)'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#0F172A' },
      { name: 'Pacific Blue', hex: '#1D4ED8' },
      { name: 'Mineral Stone', hex: '#64748B' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'voltcharge-pro',
    name: 'VoltCharge Pro',
    category: 'Chargers',
    price: 49,
    originalPrice: 65,
    rating: 4.8,
    reviewsCount: 327,
    badge: 'BEST SELLER',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Next-generation GaN III 65W fast charger. Powers your laptop, phone, and tablet simultaneously from a footprint 50% smaller than standard chargers. Featuring smart thermal throttling protection.',
    shortDescription: '65W GaN III Multi-Port Fast Charger with 2x USB-C and 1x USB-A Power Delivery 3.0.',
    features: [
      'GaN III Semiconductor tech runs cooler and 50% smaller',
      'Intelligent dynamic power allocation across 3 simultaneous devices',
      'Foldable compact prongs for effortless travel packing',
      'Over-voltage, surge, and auto-shutoff thermal regulation'
    ],
    specs: {
      'Max Output': '65W Total Power Delivery 3.0',
      'Ports': '2x USB-C PD + 1x USB-A QC 4.0',
      'Input Voltage': '100-240V ~ 50/60Hz (Worldwide)',
      'Dimensions': '52 x 52 x 30 mm'
    },
    colors: [
      { name: 'Matte Charcoal', hex: '#1F2937' },
      { name: 'Glacier White', hex: '#F9FAFB' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'flexcharge-wireless-pad',
    name: 'FlexCharge Wireless Pad',
    category: 'Accessories',
    price: 39,
    originalPrice: 50,
    rating: 4.7,
    reviewsCount: 152,
    badge: 'TRENDING',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Precision magnetic wireless charger crafted with aircraft-grade aluminum and a tactile soft-touch silicone surface. Snaps instantly into place for effortless 15W high-speed inductive charging.',
    shortDescription: '15W MagSafe-compatible magnetic inductive charging pad with braided nylon cable.',
    features: [
      'Strong N52 neodymium magnetic ring alignment',
      'Ultra-slim 6mm profile with sandblasted anodized aluminum housing',
      'Foreign object detection (FOD) with LED subtle sleep-friendly indicator',
      'Includes 1.5m braided reinforced Type-C cable'
    ],
    specs: {
      'Charging Speed': '15W / 10W / 7.5W / 5W adaptive',
      'Thickness': '5.8mm',
      'Material': 'Aluminum Alloy + Soft Silicone',
      'Cable Length': '1.5m Braided Cable'
    },
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Silver Frost', hex: '#E5E7EB' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'visioncam-mini',
    name: 'VisionCam Mini',
    category: 'Smart Tech',
    price: 79,
    originalPrice: 99,
    rating: 4.6,
    reviewsCount: 118,
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crystal-clear 2K Quad HD smart streaming and conference webcam with auto-framing AI and dual stereo noise-canceling microphones. Features a physical magnetic privacy shutter for peace of mind.',
    shortDescription: '2K QHD 60FPS video, AI auto-focus & framing, integrated physical privacy slide.',
    features: [
      '2K Quad HD Sony Starvis sensor with exceptional low-light exposure',
      'Dual noise-filtering MEMS omnidirectional microphones',
      'Hardware magnetic lens slide for verified physical privacy',
      'Universal monitor clip with 360° pan and 1/4" tripod screw mount'
    ],
    specs: {
      'Resolution': '2560 x 1440p @ 60 FPS',
      'Field of View': '90° Wide Angle',
      'Microphone': 'Dual Stereo Noise Canceling',
      'Connection': 'Plug & Play USB-C / USB-A'
    },
    colors: [
      { name: 'Anodized Black', hex: '#111827' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'powerbank-ultra-20k',
    name: 'PowerBank Ultra 20K',
    category: 'Power',
    price: 59,
    originalPrice: 79,
    rating: 4.9,
    reviewsCount: 241,
    badge: 'HOT DEAL',
    image: 'https://images.unsplash.com/photo-1609592426868-b76bb06e87ef?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1609592426868-b76bb06e87ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-density 20,000mAh portable power station capable of delivering 45W Power Delivery to recharge laptops, tablets, and smartphones multiple times. Features an informative OLED digital battery gauge.',
    shortDescription: '20,000mAh capacity, 45W PD fast recharge, real-time OLED power percentage display.',
    features: [
      'Recharges an iPhone 15 up to 4.5 times or MacBook Air 1.2 times',
      '45W high-speed bidirectional Type-C port',
      'Crisp OLED screen shows remaining percentage and voltage output',
      'Airline flight-approved capacity (74Wh)'
    ],
    specs: {
      'Capacity': '20,000mAh / 74Wh',
      'Output Ports': '1x USB-C (45W) + 2x USB-A (18W)',
      'Recharge Time': '2.5 Hours with 45W wall adapter',
      'Weight': '365g'
    },
    colors: [
      { name: 'Titanium Graphite', hex: '#1F2937' },
      { name: 'Deep Cobalt', hex: '#1E3A8A' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'smartdesk-hub',
    name: 'SmartDesk Hub',
    category: 'Accessories',
    price: 99,
    originalPrice: 139,
    rating: 4.8,
    reviewsCount: 96,
    badge: 'BEST SELLER',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'All-in-one 10-in-1 desktop workstation hub with 4K HDMI @ 60Hz, Gigabit Ethernet, 100W PD pass-through, SD/microSD card slots, and high-speed 10Gbps USB 3.2 data ports in an elegant aluminum block.',
    shortDescription: '10-in-1 Aluminum USB-C Hub with dual 4K HDMI, Gigabit Ethernet, and 100W PD.',
    features: [
      'Dual 4K@60Hz HDMI video output for multi-monitor productivity',
      '100W Power Delivery charging passthrough for host laptop',
      'Solid CNC-machined thermal dissipation aluminum enclosure',
      'High-speed UHS-II SD and microSD card reader slots'
    ],
    specs: {
      'Ports': '10 Ports: 2x HDMI 4K, 1x GbE RJ45, 3x USB 3.2, 1x PD, SD/TF, 3.5mm Audio',
      'Data Speed': 'Up to 10Gbps transfer rates',
      'Compatibility': 'macOS, Windows, ChromeOS, iPadOS',
      'Weight': '180g'
    },
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Silver Matte', hex: '#D1D5DB' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'apexfit-horizon-smartwatch',
    name: 'ApexFit Horizon Watch',
    category: 'Wearables',
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewsCount: 312,
    badge: 'TRENDING',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Aerospace titanium bezel with vivid 1.43" AMOLED retina display. Tracks heart rate, SpO2, sleep architecture, VO2 max, and features standalone GPS tracking with up to 14 days of battery longevity.',
    shortDescription: 'Titanium chassis, 1.43" AMOLED display, built-in GPS, 14-day battery endurance.',
    features: [
      '1.43-inch Always-On AMOLED screen with 1,000 nits peak outdoor brightness',
      'Advanced biometric PPG sensor tracking 24/7 heart metrics and recovery',
      'Over 110 dedicated sports modes with dual-frequency GPS route mapping',
      '5 ATM water resistance rated down to 50 meters'
    ],
    specs: {
      'Display': '1.43" AMOLED 466x466 (326 ppi)',
      'Water Resistance': '5 ATM (50 meters)',
      'Battery Life': '14 Days Typical / 7 Days Heavy Use',
      'Sensors': 'Optical HR, SpO2, Accelerometer, Gyro, Compass, Barometer'
    },
    colors: [
      { name: 'Titanium Silver', hex: '#9CA3AF' },
      { name: 'Midnight Eclipse', hex: '#0F172A' }
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'auraglow-monitor-light',
    name: 'AuraGlow ScreenBar',
    category: 'Smart Tech',
    price: 64,
    originalPrice: 85,
    rating: 4.7,
    reviewsCount: 88,
    badge: 'HOT DEAL',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Asymmetric optical desktop monitor light bar that illuminates your desk workspace without any screen reflection or eye glare. Controlled effortlessly by a 2.4GHz wireless rotating desktop puck dial.',
    shortDescription: 'Zero-glare asymmetric optical lighting with wireless rotary remote controller.',
    features: [
      'Precision asymmetric optics cast light only onto desk surface, not screen',
      'Stepless dimming and adjustable color temperature from 2700K to 6500K',
      'Weighted clip fits both flat and curved ultra-wide monitors securely',
      'Powered directly via any standard USB-A or USB-C monitor port'
    ],
    specs: {
      'Color Temperature': '2700K - 6500K stepless',
      'CRI (Color Rendering)': 'Ra >= 95 Natural Color',
      'Power': '5W USB Powered',
      'Controller': '2.4GHz Wireless Touch Puck'
    },
    colors: [
      { name: 'Matte Black', hex: '#18181B' }
    ],
    inStock: true,
    featured: false
  }
];
