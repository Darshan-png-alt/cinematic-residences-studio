/**
 * PLACEHOLDER AMENITIES CONTENT
 * Image slots are intentionally empty (`image: null`). Drop a real asset in
 * `src/assets/`, import it, and assign it to `image` — no layout change needed.
 */

export type AmenityImage = {
  /** Imported asset URL. `null` renders an elegant placeholder slot. */
  src: string | null;
  /** Always author alt text, even while the slot is empty. */
  alt: string;
  /** Controls the crop used by the layout. */
  ratio: "portrait" | "landscape" | "wide" | "square";
};

export type Amenity = {
  title: string;
  body: string;
  /** Feature amenities occupy a larger cell in the editorial grid. */
  feature?: boolean;
  image: AmenityImage;
};

export type AmenityCategory = {
  id: string;
  index: string;
  eyebrow: string;
  heading: string;
  intro: string;
  cover: AmenityImage;
  items: Amenity[];
};

export const amenitiesPage = {
  eyebrow: "Amenities",
  title: "Amenities — Shared days at STHITHA",
  heading: "Where a family's ordinary day becomes a memory",
  lede: "Every shared space here is drawn for togetherness — grandparents walking at first light, children calling across the lawn, neighbours who slowly become friends. The architecture simply holds the moment.",
  cover: {
    src: null,
    alt: "Residents and their children gathered around the sunlit pool deck in the late afternoon",
    ratio: "wide",
  } as AmenityImage,
  closing: {
    eyebrow: "Everyday moments",
    heading: "Nothing here is meant to impress. It is meant to be lived in.",
    body: "Placeholder closing copy — describe the rhythm of a weekend at STHITHA: morning laps, an afternoon of cricket, dinner under the amphitheatre lights.",
  },
};

export const amenityCategories: AmenityCategory[] = [
  {
    id: "general",
    index: "01",
    eyebrow: "General amenities",
    heading: "The everyday, made generous",
    intro:
      "Arrivals, errands and morning walks — the quiet infrastructure of family life, placed within a few unhurried minutes of every door.",
    cover: {
      src: null,
      alt: "Families walking along the tree-lined jogging track at sunrise",
      ratio: "wide",
    },
    items: [
      {
        title: "Drop & pick-up zone",
        body: "A sheltered arrival court for the school bus and cabs, where mornings begin without rush.",
        image: { src: null, alt: "Children boarding the school bus at the sheltered drop-off court", ratio: "landscape" },
      },
      {
        title: "Energy stores",
        body: "An organic store and energy bar for the small daily errands — fresh produce, a cold press after a run.",
        image: { src: null, alt: "Neighbours choosing fresh produce at the organic store", ratio: "portrait" },
      },
      {
        title: "High street & cafe",
        body: "A shaded street of small storefronts and a corner cafe where afternoons stretch a little longer.",
        feature: true,
        image: { src: null, alt: "Friends talking over coffee at the high-street cafe terrace", ratio: "landscape" },
      },
      {
        title: "Jogging track",
        body: "A soft loop through the gardens, wide enough for two to run side by side.",
        image: { src: null, alt: "A parent and child jogging together on the garden track", ratio: "portrait" },
      },
      {
        title: "Cycle track",
        body: "A dedicated ribbon for first bicycles, training wheels and Sunday rides.",
        image: { src: null, alt: "A child learning to cycle beside their parent on the cycle track", ratio: "landscape" },
      },
      {
        title: "Reflexology path",
        body: "River-stone underfoot along a slow, shaded walk taken barefoot at dusk.",
        image: { src: null, alt: "Bare feet walking the river-stone reflexology path", ratio: "square" },
      },
      {
        title: "Outdoor gym",
        body: "Open-air equipment set under the canopy, in company rather than in isolation.",
        image: { src: null, alt: "Residents training together at the open-air gym", ratio: "landscape" },
      },
      {
        title: "Zen gardens",
        body: "Small pockets of stillness — for a book, a phone call home, or nothing at all.",
        image: { src: null, alt: "A quiet zen garden courtyard with raked gravel and planting", ratio: "portrait" },
      },
      {
        title: "Wall climbing",
        body: "A climbing wall where courage is measured in one more hold, cheered from below.",
        image: { src: null, alt: "A child climbing the wall while family watches from below", ratio: "portrait" },
      },
    ],
  },
  {
    id: "outdoor",
    index: "02",
    eyebrow: "Outdoor games & event spaces",
    heading: "Evenings that everyone turns out for",
    intro:
      "Courts, nets and an open-air stage — the parts of the plan that fill with noise, teams, festivals and the whole neighbourhood at once.",
    cover: {
      src: null,
      alt: "Residents gathered on the lawn for an evening event under warm lighting",
      ratio: "wide",
    },
    items: [
      {
        title: "Baseball court",
        body: "A full-sized court for weekend teams and the spectators who come with them.",
        image: { src: null, alt: "A neighbourhood baseball game in the evening light", ratio: "landscape" },
      },
      {
        title: "Pickleball",
        body: "Quick, sociable rallies — the game where generations play on level terms.",
        feature: true,
        image: { src: null, alt: "Two generations playing a pickleball rally together", ratio: "landscape" },
      },
      {
        title: "Cricket nets",
        body: "Practice nets lit for the hour after school and the hour after work.",
        image: { src: null, alt: "A father bowling to his child in the cricket nets", ratio: "portrait" },
      },
      {
        title: "Kids play area",
        body: "Soft ground, shade and sightlines — designed so parents can sit and simply watch.",
        image: { src: null, alt: "Children playing while parents sit nearby in the shade", ratio: "landscape" },
      },
      {
        title: "Amphitheater — Sangeeth",
        body: "Stone tiers for music nights, festival evenings and impromptu performances.",
        image: { src: null, alt: "A music evening at the open-air amphitheatre", ratio: "portrait" },
      },
      {
        title: "Fine dining",
        body: "Long festival tables, match nights on the big screen, and candlelit dinners for two.",
        image: { src: null, alt: "A long candlelit dining table set outdoors for a celebration", ratio: "landscape" },
      },
      {
        title: "Home tuitions",
        body: "Quiet one-to-one rooms for study, close enough to home to walk back for dinner.",
        image: { src: null, alt: "A student and tutor working together in a quiet study room", ratio: "square" },
      },
    ],
  },
  {
    id: "clubhouse",
    index: "03",
    eyebrow: "Clubhouse & indoor facilities",
    heading: "A second living room for the whole community",
    intro:
      "Inside, the clubhouse carries the seasons — celebrations, training, a shared screen, and games that run far later than intended.",
    cover: {
      src: null,
      alt: "The clubhouse interior filled with residents on a weekend afternoon",
      ratio: "wide",
    },
    items: [
      {
        title: "Party hall",
        body: "A room that holds birthdays, weddings and every anniversary in between.",
        feature: true,
        image: { src: null, alt: "A family celebration underway in the party hall", ratio: "landscape" },
      },
      {
        title: "Swimming pool",
        body: "Morning laps, afternoon lessons, and the long golden hour when the children take over.",
        image: { src: null, alt: "Children and parents in the pool during the warm late afternoon", ratio: "landscape" },
      },
      {
        title: "TV hall",
        body: "Deep seating and one big screen — for finals, premieres and Sunday afternoons.",
        image: { src: null, alt: "Neighbours watching a match together in the TV hall", ratio: "portrait" },
      },
      {
        title: "Gym",
        body: "A daylit training floor looking onto the gardens, busy from dawn.",
        image: { src: null, alt: "Residents training in the daylit gym overlooking the gardens", ratio: "portrait" },
      },
      {
        title: "Shuttle court",
        body: "A sprung indoor court for evening doubles, whatever the weather outside.",
        image: { src: null, alt: "A doubles badminton match on the indoor shuttle court", ratio: "landscape" },
      },
      {
        title: "Indoor games",
        body: "Table tennis, carrom, chess and billiards — the slow games that keep people talking.",
        image: { src: null, alt: "Family members playing carrom and table tennis in the games room", ratio: "square" },
      },
    ],
  },
];
