import { RoomSuite, GalleryPhoto } from '../types';

import imgFacade from '../assets/images/hero_grand_boss_facade_1791794497254.jpg';
import imgDeluxeSuit from '../assets/images/room_deluxe_suit_1791794521128.jpg';
import imgExecutiveSuit from '../assets/images/room_executive_suit_1791794534758.jpg';
import imgLobby from '../assets/images/hotel_lobby_reception_1791794555212.jpg';
import imgBathroom from '../assets/images/hotel_suite_bathroom_1791794569395.jpg';
import imgBreakfast from '../assets/images/hotel_breakfast_lounge_1791794619729.jpg';
import imgTerrace from '../assets/images/hotel_city_terrace_1791794633950.jpg';
import imgStandardSuit from '../assets/images/room_standard_suit_1791794648895.jpg';
import imgEntrance from '../assets/images/hotel_entrance_evening_1791794663298.jpg';

export const HOTEL_INFO = {
  name: 'Grand Boss Suit Otel',
  tagline: 'Experience Luxury. Discover Comfort.',
  phone: '+90 555 146 5133',
  phoneClean: '+905551465133',
  email: 'info@grandbosssuitotel.com',
  address: 'Mesudiye, Fasih Kayabalı Cd. No:107 D, 33060 Akdeniz/Mersin, Türkiye',
  city: 'Mersin, Türkiye',
  district: 'Akdeniz',
  checkInTime: '14:00',
  checkOutTime: '12:00',
  frontDeskHours: '24 / 7 Dedicated Reception',
  languages: 'Turkish, English',
  coordinates: {
    lat: 36.8045,
    lng: 34.6298
  },
  images: {
    hero: imgFacade,
    entrance: imgEntrance,
    lobby: imgLobby,
    deluxe: imgDeluxeSuit,
    executive: imgExecutiveSuit,
    standard: imgStandardSuit,
    bathroom: imgBathroom,
    breakfast: imgBreakfast,
    terrace: imgTerrace
  }
};

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'deluxe-king-suit',
    name: 'Deluxe King Suit',
    tagline: 'Refined elegance with bespoke comforts',
    category: 'Deluxe',
    size: '38 m²',
    capacity: '2 Guests',
    bedType: '1 King Bed',
    image: imgDeluxeSuit,
    description: 'A spacious and meticulously appointed suite featuring luxury plush linens, bespoke timber headboards with integrated ambient glow, velvet seating, and a modern marble en-suite bathroom.',
    amenities: [
      'King-Size Orthopedic Bed',
      'High-Speed Fiber Wi-Fi',
      'Silent Inverter Air Conditioning',
      'Smart 4K Ultra HD TV',
      'Rainfall Shower & Vanity Marble',
      'Tea & Turkish Coffee Set',
      'In-Room Digital Safe',
      '24-Hour Room Service Call'
    ],
    features: ['City View', 'Soundproof Windows', 'Dedicated Work Desk', 'Mini Bar'],
    isFeatured: true
  },
  {
    id: 'executive-boss-suit',
    name: 'Executive Boss Suit',
    tagline: 'Expansive private suite with separate lounge',
    category: 'Executive',
    size: '52 m²',
    capacity: '3 Guests',
    bedType: '1 King Bed + Lounge Sofa',
    image: imgExecutiveSuit,
    description: 'Designed for discerning travelers and executives, this master suite combines an intimate sleeping quarter with an elegant private living room furnished in deep emerald velvet and dark walnut panelling.',
    amenities: [
      'Private Living & Seating Lounge',
      'King Bed with Luxury Egyptian Linens',
      'Large Format 4K Smart TV in Lounge & Bedroom',
      'High-Speed Wi-Fi & Work Station',
      'Premium Marble En-Suite Bathroom',
      'Espresso & Herbal Tea Corner',
      'Electronic Safe & Wardrobe',
      'Complimentary Bottled Water'
    ],
    features: ['Panoramic Balcony', 'Separate Lounge', 'Executive Workstation', 'VIP Turn-Down Service'],
    isFeatured: true
  },
  {
    id: 'comfort-standard-suit',
    name: 'Standard Suit',
    tagline: 'Intimate serenity in central Akdeniz',
    category: 'Standard',
    size: '28 m²',
    capacity: '2 Guests',
    bedType: '1 Queen Bed or Twin Beds',
    image: imgStandardSuit,
    description: 'An impeccably balanced room for solo travelers or couples seeking restorative sleep in Mersin. Calming earth tones, soft reading sconces, and refined hotel amenities ensure peaceful rest.',
    amenities: [
      'Queen Bed with Premium Mattress',
      'Complimentary High-Speed Wi-Fi',
      'Individually Controlled AC',
      'Flat-Screen Smart Television',
      'Modern En-Suite Bath with Hairdryer',
      'Daily Housekeeping Refresh',
      'Fresh Cotton Towels & Toiletries'
    ],
    features: ['Quiet Courtyard Orientation', 'Compact Work Nook', 'Double Glazed Glazing'],
    isFeatured: true
  },
  {
    id: 'grand-family-suit',
    name: 'Grand Family Suit',
    tagline: 'Generous accommodation for families and groups',
    category: 'Family',
    size: '60 m²',
    capacity: '4 Guests',
    bedType: '1 King Bed + 2 Twin Beds',
    image: imgDeluxeSuit,
    description: 'Generous multi-bed layout crafted specifically for families traveling through Mersin. Offers interconnected comfort, spacious wardrobe storage, and child-friendly accessibility.',
    amenities: [
      'Multiple Bed Configurations',
      'Spacious Shared Lounge Area',
      'Dual Climate Control Zones',
      'High-Speed Wi-Fi for All Devices',
      'Generous Marble Bathroom with Rain Shower',
      'Mini Fridge & Tea Station',
      'Soundproofed Multi-Room Design'
    ],
    features: ['Family Friendly', 'Interconnecting Suite Option', 'Spacious Wardrobe Storage'],
    isFeatured: false
  }
];

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Hotel Twilight Façade',
    category: 'Exterior',
    image: imgFacade,
    caption: 'The welcoming evening silhouette of Grand Boss Suit Otel in Mersin, Akdeniz.'
  },
  {
    id: 'gal-2',
    title: 'Deluxe King Suite Sanctuary',
    category: 'Rooms',
    image: imgDeluxeSuit,
    caption: 'Warm ambient lighting, deep burgundy velvet, and plush hotel bedding.'
  },
  {
    id: 'gal-3',
    title: 'Grand Entrance & Canopy',
    category: 'Exterior',
    image: imgEntrance,
    caption: 'Luminous brass canopy and warm entrance welcoming guests 24 hours a day.'
  },
  {
    id: 'gal-4',
    title: 'Reception & Guest Lobby',
    category: 'Lobby',
    image: imgLobby,
    caption: 'Sophisticated marble front desk with dedicated concierge and lounge seating.'
  },
  {
    id: 'gal-5',
    title: 'Executive Living Lounge',
    category: 'Rooms',
    image: imgExecutiveSuit,
    caption: 'Spacious executive suite lounge designed for relaxed meetings and leisure.'
  },
  {
    id: 'gal-6',
    title: 'Marble En-Suite Bathroom',
    category: 'Amenities',
    image: imgBathroom,
    caption: 'Polished black marble, illuminated vanity mirror, and premium rain shower.'
  },
  {
    id: 'gal-7',
    title: 'Breakfast Lounge & Dining',
    category: 'Dining',
    image: imgBreakfast,
    caption: 'Morning breakfast lounge serving fresh Turkish tea, artisan bread, and specialties.'
  },
  {
    id: 'gal-8',
    title: 'Rooftop Terrace Twilight View',
    category: 'Amenities',
    image: imgTerrace,
    caption: 'Relaxing Mediterranean evening breeze on the outdoor terrace overlooking the city.'
  },
  {
    id: 'gal-9',
    title: 'Comfort Standard Suite',
    category: 'Rooms',
    image: imgStandardSuit,
    caption: 'Understated tranquility with crisp linens and ergonomic reading sconces.'
  }
];

export const HOTEL_HIGHLIGHTS = [
  {
    title: 'Central Akdeniz Location',
    description: 'Situated on Fasih Kayabalı Caddesi, providing effortless access to Mersin Port, commercial centers, and cultural landmarks.'
  },
  {
    title: '24/7 Dedicated Reception',
    description: 'Round-the-clock front desk team ready to assist with arrivals, transfers, recommendations, and room requests.'
  },
  {
    title: 'Tailored Luxury Suites',
    description: 'Carefully curated suites with premium soundproofing, climate control, and orthopedic bedding for deep rest.'
  },
  {
    title: 'Authentic Hospitality',
    description: 'Warm, respectful Turkish hospitality delivered with modern boutique professionalism and attention to detail.'
  }
];
