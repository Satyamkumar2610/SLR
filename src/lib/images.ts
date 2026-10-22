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
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
