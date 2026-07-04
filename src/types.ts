export interface GalleryItem {
  cat: string;
  title: string;
  loc: string;
  img: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  source: 'Google' | 'Facebook' | 'Nextdoor';
}

export interface MapCenter {
  location: string;
  coords: string;
}
