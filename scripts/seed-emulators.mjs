// Seeds the local Firebase emulators with a demo user and note sets.
// Start the emulators first:  npx firebase-tools emulators:start --only auth,firestore
// Then run:                   node scripts/seed-emulators.mjs
// Then start the app with:    VITE_USE_EMULATORS=true npm run dev

import { pathToFileURL } from "node:url";

const PROJECT_ID = "note-reviewer";
const AUTH_URL = "http://127.0.0.1:9099";
const FIRESTORE_URL = "http://127.0.0.1:8080";

// Emulator-only account, never used against the real Firebase project
export const DEMO_USER = {
  email: "demo@notes-review.test",
  password: "emulator-demo-7f3k2q",
  displayName: "Bruce Peters",
};

export const DEMO_NOTE_SETS = [
  {
    noteSetId: "lBBT7vInu7lhQ9kRMEHE",
    noteSetName: "Unit 1 Review",
    noteSetRaw:
      "<ul><li>Big idea - Building of STATES</li><li>Song China<ul><li>Confucianism<ul><li>Society hierarchical by nature</li><li>Unequal relationships</li><li>Filial piety<ul><li>Respecting ancestors</li></ul></li></ul></li><li>Neo-confucianism<ul><li>Carried over from Tang but different</li><li>Sought to rid Buddhist influence</li><li>Everyone has place and role</li></ul></li><li>Women in Song China<ul><li>Subordinate position</li><li>Not much legal rights</li><li>Foot binding<ul><li>Making feet small as a status symbol and a symbol of beauty</li></ul></li></ul></li><li>Imperial bureaucracy<ul><li>Expanded</li><li>Civil service exam<ul><li>Meritocratic</li><li>In reality people had to be rich enough to afford studying</li></ul></li></ul></li><li>Economy<ul><li>Pop doubled</li><li>Commercialization</li></ul></li></ul></li></ul>",
    noteSetFacts: [
      {
        sectionName: "Song China",
        sectionContent: [
          "Confucianism: Hierarchical society, unequal relationships, filial piety (ancestor respect).",
          "Filial Piety: Respect for elders, ancestors.",
          "Neo-Confucianism: Tang dynasty continuation, anti-Buddhist.",
          "Song women: Subordinate, limited legal rights, foot-binding (beauty, status symbol).",
          "Imperial bureaucracy: Expansion, meritocratic civil service exams (reality: wealth-based).",
          "Economy: Population doubled, commercialization (porcelain, silk), agricultural innovation (Champa rice).",
          "Champa Rice: High-yield, drought-resistant rice from Vietnam.",
        ],
      },
      {
        sectionName: "Buddhism",
        sectionContent: [
          "Four Noble Truths: Life is suffering (craving causes suffering; cessation of craving ends suffering).",
          "Nirvana: Ultimate goal in Buddhism and Hinduism; release from cycle of rebirth.",
          "Theravada Buddhism: Sri Lanka, monastic focus.",
          "Mahayana Buddhism: East Asia, broader participation.",
          "Bodhisattvas: Enlightened beings aiding others' enlightenment.",
        ],
      },
      {
        sectionName: "Dar al-Islam",
        sectionContent: [
          "Abbasid Caliphate: Ethnically Arab, Baghdad-centered, replaced by Turkic empires.",
          "Seljuk Empire: Turkic warriors, weakened Abbasids, maintained continuity (military rule, Sharia law).",
          "Sharia Law: Islamic legal code based on Quran.",
          "Muslim Scholars: Significant contributions to math, science.",
          "House of Wisdom (Baghdad): Greek text translation, center for scholarship, religiously inclusive.",
          "Dar al-Islam Expansion: Military (Delhi Sultanate), trade (Mali), missionaries (Sufis).",
          "Sufis: Mystical branch of Islam.",
        ],
      },
      {
        sectionName: "India",
        sectionContent: [
          "Bhakti Movement: Hindu devotion to single deity, challenged hierarchies.",
          "Delhi Sultanate: Ruled North India, struggled for control, limited conversion.",
          "Vijayanagara Empire: South India, arose in response to Delhi Sultanate.",
        ],
      },
      {
        sectionName: "Southeast & East Asia",
        sectionContent: [
          "Majapahit Kingdom: Buddhist, powerful sea trade control, declined due to Malacca Sultanate (China support).",
        ],
      },
      {
        sectionName: "Americas",
        sectionContent: [
          "Aztec Empire: Decentralized, large capital (Tenochtitlan), tribute states (labor, goods, sacrifices).",
          "Inca Empire: Centralized, extensive bureaucracy (Mit'a system: state labor).",
          "Mit'a System: Inca labor system for state projects.",
        ],
      },
      {
        sectionName: "Africa",
        sectionContent: [
          "Swahili Civilization: Commerce-based, merchant elite, Islamic influence (language, trade).",
          "West African Civilizations (Ghana, Mali, Songhai): Trade-driven, elite Muslim conversion.",
        ],
      },
      {
        sectionName: "Europe",
        sectionContent: [
          "Christianity: Dominant religion.",
          "Eastern Orthodox Christianity: Byzantines, spread to Kievan Rus' (trade integration, Caesaropapism).",
          "Caesaropapism: System where emperor holds supreme authority over both church and state.",
          "Roman Catholic Church: Western Europe, influence on society, linked via feudalism.",
          "Feudalism: System of allegiances (lords, monarchs, knights; land for service).",
          "Al-Andalus: Muslim-ruled Iberia, Reconquista (Christian reconquest), diverse religious coexistence (prior to reconquest).",
          "Manorialism: Peasants bound to land, working for lord's protection.",
          "Serfs: Bound to land, not property.",
        ],
      },
    ],
  },
  {
    noteSetId: "6D4OqOccc5EiQrBDyL8k",
    noteSetName: "Chapter 8 Notes",
    noteSetRaw:
      "<ul><li>European Centrality and the problem of Eurocentrism<ul><li>Europeans had a very prominent role in world history</li><li>“European Moment”<ul><li>Start of Anthropocene era or “age of man”</li><li>Industrialization</li></ul></li><li>Eurocentrism<ul><li>Flat maps put Europe at center of the world</li><li>Far east and Middle east defined in terms of distance from Europe</li></ul></li><li>Other peoples had similar moments<ul><li>Arabs (600-1000)</li><li>Chinese (1000-1500)</li><li>Mongols (1200-1350)</li><li>Aztecs and Incas (15th century)</li></ul></li></ul></li></ul>",
    noteSetFacts: [
      {
        sectionName: "European Centrality & Eurocentrism",
        sectionContent: [
          "Europe's prominent role in world history.",
          '"European Moment": Period of significant European influence.',
          "Eurocentrism: Bias favoring European perspectives.",
          "Flat maps: Europe central.",
          "Non-European civilizations also had periods of dominance (Arab, Chinese, Mongol, Aztec, Inca).",
          "Anthropocene: Age of humans; linked to Industrial Revolution.",
        ],
      },
      {
        sectionName: "Atlantic Revolutions: Global Context",
        sectionContent: [
          "1730s: Safavid, Mughal decline.",
          "Late 18th-early 19th centuries: Unsuccessful Chinese rebellions.",
          "Seven Years' War: Increased taxes, fueled American and French Revolutions.",
          "Atlantic Revolutions interconnected: American, French, Haitian, Latin American.",
          "Enlightenment ideas: Liberty, equality, free trade, religious tolerance.",
          "Popular sovereignty: Authority from the people, not divine right.",
        ],
      },
      {
        sectionName: "The Haitian Revolution",
        sectionContent: [
          "Saint-Domingue: Major sugar and coffee producer.",
          "Social classes: Slaves (majority), whites (planters, petit blancs), free people of color.",
          "Slave revolt (1791): Toussaint Louverture led successful rebellion.",
          "Only successful slave revolt; independence.",
          "Haiti: Equal citizenship regardless of race or class.",
          '"Remember Haiti": Warning against similar outcomes.',
        ],
      },
    ],
  },
];

// Converts a plain JS value into Firestore REST API typed values
const toFirestoreValue = (value) => {
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map(toFirestoreValue) } };
  }
  if (value !== null && typeof value === "object") {
    return { mapValue: { fields: toFirestoreFields(value) } };
  }
  return { stringValue: String(value) };
};

const toFirestoreFields = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, toFirestoreValue(value)])
  );

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!response.ok) {
    throw new Error(`${options.method ?? "GET"} ${url} -> ${response.status} ${await response.text()}`);
  }
  return response.json();
};

const seed = async () => {
  // Start from a clean slate
  await request(`${AUTH_URL}/emulator/v1/projects/${PROJECT_ID}/accounts`, {
    method: "DELETE",
  });
  await request(
    `${FIRESTORE_URL}/emulator/v1/projects/${PROJECT_ID}/databases/(default)/documents`,
    { method: "DELETE" }
  );

  const { localId: uid } = await request(
    `${AUTH_URL}/identitytoolkit.googleapis.com/v1/accounts:signUp?key=emulator`,
    {
      method: "POST",
      body: JSON.stringify({ ...DEMO_USER, returnSecureToken: true }),
    }
  );

  for (const noteSet of DEMO_NOTE_SETS) {
    // "Bearer owner" lets the seed bypass security rules in the emulator
    await request(
      `${FIRESTORE_URL}/v1/projects/${PROJECT_ID}/databases/(default)/documents/users/${uid}/note-sets/${noteSet.noteSetId}`,
      {
        method: "PATCH",
        headers: { Authorization: "Bearer owner" },
        body: JSON.stringify({ fields: toFirestoreFields(noteSet) }),
      }
    );
  }

  console.log(`Seeded ${DEMO_NOTE_SETS.length} note sets for ${DEMO_USER.email} (uid ${uid})`);
};

// Only seed when run directly, not when imported for the test credentials
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  seed().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
