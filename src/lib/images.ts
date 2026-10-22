/**
 * PHOTOGRAPHY
 * ============================================================
 * Every photograph on the site is listed here with its source and
 * licence, and credited on /image-credits. All are published under the
 * Unsplash License (free for commercial use, no permission needed) or,
 * for the Smithsonian map, the Public Domain. Add new photographs here
 * rather than inline so the credits page stays complete.
 */

export interface Photo {
  src: string;
  alt: string;
  subject: string; // short caption for the credits page
  photographer: string;
  photographerUrl: string;
  sourceUrl: string;
  licence: "Unsplash License" | "Public Domain";
}

const unsplash = (id: string, w = 2400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  containerPort: {
    src: unsplash("photo-1494412651409-8963ce7935a7"),
    alt: "Aerial view of stacked shipping containers at a port",
    subject: "Container terminal, Singapore",
    photographer: "CHUTTERSNAP",
    photographerUrl: "https://unsplash.com/@chuttersnap",
    sourceUrl: "https://unsplash.com/photos/aerial-photo-of-cargo-crates-fN603qcEA7g",
    licence: "Unsplash License",
  },
  portBarcelona: {
    src: unsplash("photo-1727430683041-6fed14c5cbc2"),
    alt: "Aerial view of a port and its harbour",
    subject: "Port of Barcelona, Spain",
    photographer: "Dalibor Janeček",
    photographerUrl: "https://unsplash.com/@daliborjanecek",
    sourceUrl: "https://unsplash.com/photos/an-aerial-view-of-a-port-with-a-large-body-of-water-UKQUJ_AvB4o",
    licence: "Unsplash License",
  },
  indiaGate: {
    src: unsplash("photo-1705927122615-02dcef3b1465"),
    alt: "India Gate in New Delhi with birds in the sky",
    subject: "India Gate, New Delhi",
    photographer: "Swipe",
    photographerUrl: "https://unsplash.com/@swipe9",
    sourceUrl: "https://unsplash.com/photos/india-gate-monument-in-new-delhi-PHqd7WAr1lc",
    licence: "Unsplash License",
  },
  safdarjung: {
    src: unsplash("photo-1575566668200-7dcaa7b2cf28"),
    alt: "Safdarjung's Tomb in New Delhi",
    subject: "Safdarjung's Tomb, New Delhi",
    photographer: "Darklabs India",
    photographerUrl: "https://unsplash.com/@darklabsindia",
    sourceUrl: "https://unsplash.com/photos/safdarjungs-tomb-in-new-delhi-india-wwEE3qtFtvU",
    licence: "Unsplash License",
  },
  library: {
    src: unsplash("photo-1687102122406-98dfe4057329"),
    alt: "The Long Room library, lined with tall wooden bookshelves",
    subject: "Long Room, Trinity College Library, Dublin",
    photographer: "mana5280",
    photographerUrl: "https://unsplash.com/@mana5280",
    sourceUrl: "https://unsplash.com/photos/a-long-room-filled-with-lots-of-books-aITB6HX64Tk",
    licence: "Unsplash License",
  },
  boardroom: {
    src: unsplash("photo-1431540015161-0bf868a2d407"),
    alt: "An empty boardroom with an oval wooden table and chairs",
    subject: "Boardroom",
    photographer: "Benjamin Child",
    photographerUrl: "https://unsplash.com/@bchild311",
    sourceUrl: "https://unsplash.com/photos/oval-brown-wooden-conference-table-and-chairs-inside-conference-room-GWe0dlVD9e0",
    licence: "Unsplash License",
  },
  wafer: {
    src: unsplash("photo-1587845323226-bad89242c735"),
    alt: "A silicon wafer with a grid of microchip dies",
    subject: "Silicon wafer",
    photographer: "Laura Ockel",
    photographerUrl: "https://unsplash.com/@viazavier",
    sourceUrl: "https://unsplash.com/photos/silicon-wafer-with-iridescent-microchip-grid-qOx9KsvpqcM",
    licence: "Unsplash License",
  },
  worldMap1798: {
    src: unsplash("photo-1779293109173-a5c9a0f71273"),
    alt: "A historical world map showing the two hemispheres",
    subject: "World map sampler, 1798 (Cooper Hewitt, Smithsonian)",
    photographer: "Smithsonian",
    photographerUrl: "https://unsplash.com/@smithsonian",
    sourceUrl: "https://unsplash.com/photos/an-old-historical-world-map-showing-two-hemispheres-s_wAHGES51Y",
    licence: "Public Domain",
  },
  columns: {
    src: unsplash("photo-1780445333332-3abb7dde9ad1"),
    alt: "Classical stone columns casting strong shadows",
    subject: "Classical columns",
    photographer: "Sebastian Schuster",
    photographerUrl: "https://unsplash.com/@sschusterphotoart",
    sourceUrl: "https://unsplash.com/photos/architectural-facade-featuring-classical-columns-and-strong-shadows-lCkHnqTnjXw",
    licence: "Unsplash License",
  },
  cargoShip: {
    src: unsplash("photo-1724597500306-a4cbb7d1324e"),
    alt: "Aerial view of a cargo ship at sea",
    subject: "Cargo ship near Willemstad, Curaçao",
    photographer: "Bent Van Aeken",
    photographerUrl: "https://unsplash.com/@bentje",
    sourceUrl: "https://unsplash.com/photos/an-aerial-view-of-a-cargo-ship-in-the-ocean-0A7YwYhZhWw",
    licence: "Unsplash License",
  },
  financialDistrict: {
    src: unsplash("photo-1606661403337-ddcadaa22f16"),
    alt: "High-rise office towers under a grey sky",
    subject: "Financial district, Chicago",
    photographer: "Andres Garcia",
    photographerUrl: "https://unsplash.com/@andresgarcia",
    sourceUrl: "https://unsplash.com/photos/high-rise-buildings-under-gray-sky-tGOOLTI5cFM",
    licence: "Unsplash License",
  },
  windTurbine: {
    src: unsplash("photo-1671308819531-1097d5ab5dcc"),
    alt: "Aerial view of a wind turbine in a green field",
    subject: "Wind turbine",
    photographer: "Stan Versluis",
    photographerUrl: "https://unsplash.com/@stanversluis",
    sourceUrl: "https://unsplash.com/photos/an-aerial-view-of-a-wind-turbine-in-a-green-field-RHcbkkRLpBU",
    licence: "Unsplash License",
  },
  solarFarm: {
    src: unsplash("photo-1789676965156-f880587af2c7"),
    alt: "Aerial view of a solar farm in a rural landscape",
    subject: "Solar farm",
    photographer: "Bernd Dittrich",
    photographerUrl: "https://unsplash.com/@hdbernd",
    sourceUrl: "https://unsplash.com/photos/solar-farm-in-rural-landscape-bheTycKOh9Q",
    licence: "Unsplash License",
  },
  seaLink: {
    src: unsplash("photo-1569758267239-d08deb78bb1a"),
    alt: "The Bandra–Worli Sea Link spanning the water toward the Mumbai skyline",
    subject: "Bandra–Worli Sea Link, Mumbai",
    photographer: "Previn Samuel",
    photographerUrl: "https://unsplash.com/@samuelprevin",
    sourceUrl: "https://unsplash.com/photos/bandra-worli-sea-link-in-mumbai-vr6nMSlyTJs",
    licence: "Unsplash License",
  },
  warship: {
    src: unsplash("photo-1508530786855-dfea35260b8d"),
    alt: "A grey naval vessel at sea",
    subject: "Naval vessel, San Diego",
    photographer: "Michael Afonso",
    photographerUrl: "https://unsplash.com/@mafonso",
    sourceUrl: "https://unsplash.com/photos/gray-warship-on-body-of-water-BQgAYwERXhs",
    licence: "Unsplash License",
  },
  labShelves: {
    src: unsplash("photo-1766297247072-93fd815afef3"),
    alt: "Laboratory shelves filled with glassware and equipment",
    subject: "Laboratory glassware",
    photographer: "Chidera Faustina Okeke",
    photographerUrl: "https://unsplash.com/@thefourthwxll",
    sourceUrl: "https://unsplash.com/photos/laboratory-shelves-filled-with-glassware-and-equipment-v41sgDGz4ik",
    licence: "Unsplash License",
  },
  dataCentre: {
    src: unsplash("photo-1784652852605-6945598f2af3"),
    alt: "Rows of white server cabinets in a data centre",
    subject: "Data centre, London",
    photographer: "Tony Marinescu",
    photographerUrl: "https://unsplash.com/@tonymarinescu",
    sourceUrl: "https://unsplash.com/photos/modern-data-center-with-rows-of-white-server-cabinets-fImCPTZ026U",
    licence: "Unsplash License",
  },
  fountainPen: {
    src: unsplash("photo-1471107340929-a87cd0f5b5f3"),
    alt: "A fountain pen resting on a notebook",
    subject: "Fountain pen",
    photographer: "Aaron Burden",
    photographerUrl: "https://unsplash.com/@aaronburden",
    sourceUrl: "https://unsplash.com/photos/fountain-pen-on-spiral-book-xG8IQMqMITM",
    licence: "Unsplash License",
  },
  glassBuilding: {
    src: unsplash("photo-1523477593243-78bbf626fd3b"),
    alt: "The glass facade of an office building",
    subject: "Glass facade, Berlin",
    photographer: "Christian Ladewig",
    photographerUrl: "https://unsplash.com/@dozy_de",
    sourceUrl: "https://unsplash.com/photos/architectural-photography-of-glass-building-T0iFfJw-rB0",
    licence: "Unsplash License",
  },
  humayunTomb: {
    src: unsplash("photo-1597040663342-45b6af3d91a5"),
    alt: "Humayun's Tomb in New Delhi, framed by palm trees",
    subject: "Humayun's Tomb, New Delhi",
    photographer: "Junaid Ahmad Ansari",
    photographerUrl: "https://unsplash.com/@junaidahmadansari",
    sourceUrl: "https://unsplash.com/photos/white-dome-building-near-palm-trees-during-daytime-9WP-NVh2d6U",
    licence: "Unsplash License",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Photograph for each sector, keyed by sector slug. */
export const sectorPhotos: Record<string, Photo> = {
  defence: photos.warship,
  pharma: photos.labShelves,
  "technology-ai": photos.dataCentre,
  "energy-climate": photos.solarFarm,
  "financial-services": photos.financialDistrict,
  infrastructure: photos.portBarcelona,
  semiconductors: photos.wafer,
};
