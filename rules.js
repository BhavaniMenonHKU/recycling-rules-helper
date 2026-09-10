/*
 * rules.js — the ONLY place recycling rules live in this prototype.
 *
 * Every entry below is grounded in HKU's published "re Campaign" pages
 * (Estates Office Sustainability Unit). If an item is not listed here,
 * the tool will say "not covered" instead of guessing — that is a
 * deliberate design rule ("does not invent rules not in the source").
 *
 * To add an item: add one entry to ITEMS with keywords + bin + note,
 * and make sure it really appears in the published source first.
 */

const SOURCE = {
  name: "HKU Estates Office — re Campaign (Recycling Facilities & Recycling 101)",
  facilitiesUrl: "https://www.wastereduction.hku.hk/re-facilities",
  guideUrl: "https://www.wastereduction.hku.hk/recycling-101",
  contact: "wastereduction@hku.hk",
  lastChecked: "2026-09-10"
};

/* The bins/facilities the published source defines. */
const BINS = {
  paper: {
    name: "Paper recycling",
    color: "#2563eb",
    where: "re Kiosk (Run Run Shaw Podium, 24h) or any Smart Recycling Bin"
  },
  plastic: {
    name: "Plastic recycling",
    color: "#b45309",
    where: "re Kiosk (Run Run Shaw Podium, 24h) or Smart Recycling Bins",
    quirk: "Plastic bottles are NOT accepted at the Central Podium Levels and Pine Court smart bins — use the re Kiosk or another smart bin for those."
  },
  metal: {
    name: "Metal recycling",
    color: "#64748b",
    where: "re Kiosk (Run Run Shaw Podium, 24h) or any Smart Recycling Bin"
  },
  glass: {
    name: "Glass bottle recycling",
    color: "#059669",
    where: "re Kiosk (Run Run Shaw Podium, 24h)",
    quirk: "Among smart bins, glass bottles are accepted ONLY at Central Podium Levels and Pine Court."
  },
  tetrapak: {
    name: "Tetra Pak recycling",
    color: "#0d9488",
    where: "re Kiosk ONLY (Run Run Shaw Podium, 24h) — smart bins do not take Tetra Pak"
  },
  battery: {
    name: "Rechargeable battery collection",
    color: "#7c3aed",
    where: "re Kiosk ONLY (Run Run Shaw Podium, 24h) — never in hall bins"
  },
  general: {
    name: "Ordinary waste bin",
    color: "#6b7280",
    where: "Your hall's ordinary waste bin (NOT the recycling bins)"
  }
};

/*
 * Items the published source covers.
 * bin "general" means: the item is NOT in HKU's published recyclable
 * categories, so it must stay out of the recycling bins.
 */
const ITEMS = [
  // ---- Paper ----
  { keywords: ["newspaper"], label: "Newspaper", bin: "paper",
    note: "Clean, dry newspaper goes in paper recycling." },
  { keywords: ["office paper", "a4 paper", "printer paper", "printout", "lecture notes", "notes paper"], label: "Office / printing paper", bin: "paper",
    note: "Clean paper only — HKU's Recycling 101 stresses clean recycling." },
  { keywords: ["cardboard box", "cardboard", "carton box", "shipping box", "delivery box"], label: "Cardboard box", bin: "paper",
    note: "Flatten the box and keep it clean and dry. Soiled cardboard is not recyclable." },
  { keywords: ["book", "textbook", "magazine", "notebook"], label: "Books / magazines", bin: "paper",
    note: "Accepted as paper. Remove plastic wrapping first." },
  { keywords: ["envelope", "paper bag", "flyer", "leaflet"], label: "Envelopes / paper bags / flyers", bin: "paper",
    note: "Clean paper products go in paper recycling." },

  // ---- Plastic ----
  { keywords: ["plastic bottle", "water bottle", "drinks bottle", "drink bottle", "soda bottle"], label: "Plastic beverage bottle", bin: "plastic",
    note: "Empty it before recycling. Accepted as 'Plastic bottle' at smart bins (except Central Podium Levels & Pine Court) and as 'Plastic' at the re Kiosk." },
  { keywords: ["shampoo bottle", "shower gel bottle", "detergent bottle"], label: "Toiletry / detergent plastic bottle", bin: "plastic",
    note: "Empty and clean it first — clean recycling is the published rule of thumb." },
  { keywords: ["plastic container", "plastic box", "plastic tub", "food container", "tupperware"], label: "Plastic container", bin: "plastic",
    note: "Falls under 'Other plastic' (smart bins) / 'Plastic' (re Kiosk). Make sure it is empty and clean." },
  { keywords: ["yogurt pot", "yoghurt pot", "plastic cup"], label: "Plastic cup / yoghurt pot", bin: "plastic",
    note: "Treated as other plastic — rinse clean before recycling." },

  // ---- Metal ----
  { keywords: ["aluminium can", "aluminum can", "soda can", "drink can", "drinks can", "coke can", "beer can"], label: "Aluminium drink can", bin: "metal",
    note: "Empty it before recycling." },
  { keywords: ["tin can", "food tin", "metal can", "canned food can"], label: "Tin / food can", bin: "metal",
    note: "Empty and clean — leftover food contaminates the recycling." },

  // ---- Glass ----
  { keywords: ["glass bottle", "wine bottle", "beer bottle", "glass drink bottle"], label: "Glass bottle", bin: "glass",
    note: "Empty it first. Accepted at the re Kiosk; at smart bins only at Central Podium Levels and Pine Court." },

  // ---- Tetra Pak ----
  { keywords: ["tetra pak", "milk carton", "juice carton", "drink carton", "soy milk carton"], label: "Tetra Pak drink carton", bin: "tetrapak",
    note: "Tetra Pak is accepted at the re Kiosk only, NOT at smart bins. Empty and flatten it." },

  // ---- Rechargeable battery ----
  { keywords: ["rechargeable battery", "rechargeable batteries", "rechargeable aa", "rechargeable aaa"], label: "Rechargeable battery", bin: "battery",
    note: "Rechargeable batteries are accepted ONLY at the re Kiosk. Never put any battery in a hall bin." },

  // ---- Not recyclable under the published list (keep OUT of recycling bins) ----
  { keywords: ["tissue", "tissue paper", "napkin", "paper towel", "toilet paper"], label: "Tissue / paper towel", bin: "general",
    note: "Not in HKU's published recyclable categories (and usually soiled). Keep it out of the recycling bins." },
  { keywords: ["pizza box"], label: "Greasy pizza box", bin: "general",
    note: "Cardboard is recyclable only when clean — a greasy, food-soiled box is contaminated, so it goes with ordinary waste." },
  { keywords: ["food waste", "leftovers", "food scraps", "leftover food", "apple core", "banana peel"], label: "Food scraps / leftovers", bin: "general",
    note: "Food is not in the published recyclable categories for hall bins. Scrape food into ordinary waste before recycling the container." },
  { keywords: ["disposable chopsticks", "chopsticks", "plastic cutlery", "plastic fork", "plastic spoon", "plastic straw", "straw"], label: "Disposable cutlery / straws", bin: "general",
    note: "Not listed in the published recyclable categories — ordinary waste." },
  { keywords: ["ceramic mug", "ceramic", "broken plate", "porcelain", "mirror"], label: "Ceramics / mirror", bin: "general",
    note: "Not a 'glass bottle' under the published rules, so it must stay out of glass recycling. Wrap broken pieces before binning." },
  { keywords: ["styrofoam", "polystyrene", "foam box"], label: "Styrofoam", bin: "general",
    note: "Not in the published recyclable categories — ordinary waste." }
];

/*
 * Hazardous / special waste: the tool REFUSES these outright.
 * ("Does not handle hazardous-waste disposal" — a firm boundary.)
 */
const HAZARDOUS = {
  keywords: [
    "battery", "batteries", "car battery", "button battery", "button cell",
    "paint", "thinner", "solvent", "chemical", "bleach", "acid",
    "pesticide", "insecticide", "fluorescent", "light tube", "cfl",
    "medicine", "pills", "drugs", "needle", "syringe", "sharps",
    "mercury", "thermometer", "gas canister", "aerosol", "lighter"
  ],
  message: "This helper does not cover hazardous or special waste — that is one of its firm boundaries. Please do NOT put it in any hall bin. Ask your hall office or building staff for the proper disposal route, or email the HKU Sustainability Unit at " + SOURCE.contact + "."
};
