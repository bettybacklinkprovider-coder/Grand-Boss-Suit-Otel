export interface RoomSuite {
  id: string;
  name: string;
  tagline: string;
  category: string;
  size: string;
  capacity: string;
  bedType: string;
  image: string;
  description: string;
  amenities: string[];
  features: string[];
  isFeatured?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Exterior' | 'Rooms' | 'Lobby' | 'Amenities' | 'Dining';
  image: string;
  caption: string;
}

export interface BookingInquiry {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  message?: string;
}

export type RoutePath = '/' | '/about' | '/rooms' | '/contact';
