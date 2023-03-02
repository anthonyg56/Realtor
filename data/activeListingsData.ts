export interface IActiveListingItem {
  id: number;
  price: number;
  address: string;
  bedRooms: number;
  bathRooms: number;
  size: number;
  slug: string;
  image: string;
  propertyName: string;
  briefDescription: string;
  images: string[];
  descPhoto: string;
  fullDescription: string;
}

export const activeListingsItems: IActiveListingItem[] = [
  {
    id: 1,
    price: 2995000,
    address: '12315 Ellis Lane',
    bedRooms: 4,
    bathRooms: 3,
    size: 5980,
    slug: 'ellis-property',
    image: 'https://img1.wsimg.com/isteam/ip/6bff8ee6-e2c6-485c-89cd-e21e6161bfde/ellis%20property.webp/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:365,h:274,cg:true',
    propertyName: "Ellis Property",
    briefDescription: "Brief description of Ellis Property Home",
    fullDescription: "Hurry this one won't last! Sought after Bluff Ridge floating home  cantilevered by blue steel. Blue valley views from every room! Appealing open design with generous living room, formal dining area and modern stainless kitchen with glass top bar. Wrap around entertainment deck leads to 2 bedrooms plus a fabulous master suite with stylish spa size bathroom and walk-in closet. Cool roof top deck with expansive Bluff Ridge views. Gated entry.",
    images: [
      'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_348444.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75.03%25/rs=w:1240,h:620,cg:true',
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_2261305.jpg/:/cr=t:25.01%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true",
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_1188910.jpg/:/cr=t:24.89%25,l:0%25,w:100%25,h:52.67%25/rs=w:600,h:300,cg:true",
    ],
    descPhoto: "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_348168.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m"
  },
  {
    id: 2,
    price: 1395000,
    address: '5495 Bluff Drive',
    bedRooms: 3,
    bathRooms: 3,
    size: 2500,
    slug: 'bluff-house',
    image: 'https://img1.wsimg.com/isteam/ip/6bff8ee6-e2c6-485c-89cd-e21e6161bfde/Bluff%20House.webp/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:365,h:274,cg:true',
    propertyName: "Bluff House",
    briefDescription: "Brief description of Ellis Property Home",
    fullDescription: "Hurry this one won't last! Sought after Bluff Ridge floating home  cantilevered by blue steel. Blue valley views from every room! Appealing open design with generous living room, formal dining area and modern stainless kitchen with glass top bar. Wrap around entertainment deck leads to 2 bedrooms plus a fabulous master suite with stylish spa size bathroom and walk-in closet. Cool roof top deck with expansive Bluff Ridge views. Gated entry.",
    images: [
      'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txpfe376b65oyJ200_Large_1924511.jpg/:/cr=t:15.57%25,l:0%25,w:100%25,h:84.43%25/rs=w:1240,h:620,cg:true',
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txpfe376b65oyJ200_Large_1891026.jpg/:/cr=t:26.27%25,l:3.45%25,w:93.92%25,h:70.42%25/rs=w:600,h:300,cg:true,m",
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txpfe376b65oyJ200_Large_1950922.jpg/:/cr=t:20.23%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true",
    ],
    descPhoto: "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txpfe376b65oyJ200_Large_1910553.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100%25"
  },
  {
    id: 3,
    price: 2595000,
    address: '38 Refuge Dr.',
    bedRooms: 3,
    bathRooms: 4,
    size: 2500,
    slug: 'an-american-refuge',
    image: 'https://img1.wsimg.com/isteam/ip/6bff8ee6-e2c6-485c-89cd-e21e6161bfde/An%20American%20Refuge.webp/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:365,h:274,cg:true',
    propertyName: "An American Refuge",
    briefDescription: "Brief description of Ellis Property Home",
    fullDescription: "Hurry this one won't last! Sought after Bluff Ridge floating home  cantilevered by blue steel. Blue valley views from every room! Appealing open design with generous living room, formal dining area and modern stainless kitchen with glass top bar. Wrap around entertainment deck leads to 2 bedrooms plus a fabulous master suite with stylish spa size bathroom and walk-in closet. Cool roof top deck with expansive Bluff Ridge views. Gated entry.",
    images: [
      'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp186c7276kyJ200_Large_2261316.jpg/:/cr=t:26.47%25,l:1.09%25,w:98.06%25,h:73.53%25/rs=w:1240,h:620,cg:true,m',
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp186c7276kyJ200_Large_2261285.jpg/:/cr=t:22.17%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true",
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp186c7276kyJ200_Large_2261319.jpg/:/cr=t:14.51%25,l:1.28%25,w:98.06%25,h:73.53%25/rs=w:600,h:300,cg:true,m",
    ],
    descPhoto: "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp186c7276kyJ200_Large_2261335.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100%25"
  },
  {
    id: 4,
    price: 1258000,
    address: '2130 Dowell St',
    bedRooms: 3,
    bathRooms: 3,
    size: 2500,
    slug: 'dowel-residence',
    image: 'https://img1.wsimg.com/isteam/ip/6bff8ee6-e2c6-485c-89cd-e21e6161bfde/Dowell%20Residence.webp/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:365,h:274,cg:true',
    propertyName: "Dowel Residence",
    briefDescription: "Brief description of Ellis Property Home",
    fullDescription: "Hurry this one won't last! Sought after Bluff Ridge floating home  cantilevered by blue steel. Blue valley views from every room! Appealing open design with generous living room, formal dining area and modern stainless kitchen with glass top bar. Wrap around entertainment deck leads to 2 bedrooms plus a fabulous master suite with stylish spa size bathroom and walk-in closet. Cool roof top deck with expansive Bluff Ridge views. Gated entry.",
    images: [
      'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp57d3ffa3pyJ200_Large_2289709.jpg/:/cr=t:25.1%25,l:0%25,w:100%25,h:74.9%25/rs=w:1240,h:620,cg:true',
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp57d3ffa3pyJ200_Large_1160006.jpg/:/cr=t:25.27%25,l:0%25,w:100%25,h:74.51%25/rs=w:600,h:300,cg:true",
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp57d3ffa3pyJ200_Large_2303447.jpg/:/cr=t:20.23%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true",
    ],
    descPhoto: 'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp57d3ffa3pyJ200_Large_1192038.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100%25'
  },
  {
    id: 5,
    price: 2995000,
    address: '12315 Ellis Lane',
    bedRooms: 4,
    bathRooms: 3,
    size: 5980,
    slug: 'ellis-property',
    image: 'https://img1.wsimg.com/isteam/ip/6bff8ee6-e2c6-485c-89cd-e21e6161bfde/ellis%20property.webp/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:365,h:274,cg:true',
    propertyName: "Ellis Property",
    briefDescription: "Brief description of Ellis Property Home",
    fullDescription: "Hurry this one won't last! Sought after Bluff Ridge floating home  cantilevered by blue steel. Blue valley views from every room! Appealing open design with generous living room, formal dining area and modern stainless kitchen with glass top bar. Wrap around entertainment deck leads to 2 bedrooms plus a fabulous master suite with stylish spa size bathroom and walk-in closet. Cool roof top deck with expansive Bluff Ridge views. Gated entry.",
    images: [
      'https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_348444.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75.03%25/rs=w:1240,h:620,cg:true',
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_2261305.jpg/:/cr=t:25.01%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true",
      "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_1188910.jpg/:/cr=t:24.89%25,l:0%25,w:100%25,h:52.67%25/rs=w:600,h:300,cg:true",
    ],
    descPhoto: "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/Stocksy_txp4b845778nyJ200_Large_348168.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m"
  }
]

export interface IAboutMe {
  image: string;
  description: string;
}

export const AboutMeData: IAboutMe = {
  image: "https://img1.wsimg.com/isteam/ip/cc253ffa-8298-4fac-ac4e-9836c6c70f06/GettyImages-1023289800.jpg/:/cr=t:0%25,l:16.65%25,w:66.7%25,h:100%25/rs=w:600,h:600,cg:true",
  description: "I was born into a real estate family. My grandfather, Butherus Wythe, bought and sold property along the entire eastern seaboard. My father, Howard Wythe, bought, sold and developed commercial real estate properties in New Orleans and Baton Rouge for his entire adult life. Drawing inspiration from their careers, I was destined to make my own way in real estate. When I got my realtor’s license as a young man, I saw it not only as a way to make a living but as a charter to match people and families with their perfect properties. It’s a commitment I rededicate myself to every day, and it’s my commitment to this ideal that gives me the confidence to say: I want to be your next realtor."
}