const categories = [
  "weight-loss",
  "supplements",
  "diabetes",
  "heart-health",
  "skin-care",
  "fitness",
  "sleep",
  "immunity",
  "mental-health",
  "anti-aging",
];

const subcategories = {
  "weight-loss": ["metabolism", "meal-plans", "appetite-control", "walking", "gut-health"],
  supplements: ["vitamins", "greens", "protein", "omega", "probiotics"],
  diabetes: ["glucose-support", "low-carb", "monitoring", "recipes", "education"],
  "heart-health": ["cholesterol", "blood-pressure", "cardio", "nutrition", "stress"],
  "skin-care": ["hydration", "anti-wrinkle", "acne", "sensitive-skin", "sun-care"],
  fitness: ["home-workouts", "mobility", "strength", "recovery", "walking"],
  sleep: ["sleep-aids", "routines", "snoring", "relaxation", "tracking"],
  immunity: ["vitamin-c", "zinc", "seasonal", "gut-support", "wellness"],
  "mental-health": ["stress-relief", "focus", "mood", "mindfulness", "burnout"],
  "anti-aging": ["longevity", "collagen", "cell-health", "mobility", "skin-support"],
};

export const offerTypes = ["email-submit", "zip-submit", "win", "discount-purchase"];

const authors = [
  "Maya Collins",
  "Jordan Hale",
  "Priya Stone",
  "Evan Brooks",
  "Nadia Wells",
  "Theo Mercer",
  "Lena Grant",
  "Caleb Price",
];

const titleAngles = [
  "Simple Daily Plan",
  "Beginner Guide",
  "Smart Buyer Checklist",
  "Morning Routine",
  "Seven Day Reset",
  "Home Wellness Playbook",
  "Doctor Visit Prep Guide",
  "Budget Friendly Strategy",
  "Rapid Start Checklist",
  "Healthy Habit Blueprint",
];

const ctaByType = {
  "email-submit": "Get the free guide",
  "zip-submit": "Check local availability",
  win: "Enter to win today",
  "discount-purchase": "Reveal discount",
};

const formatLabel = (value) =>
  value
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const makeBlocks = (category, subcategory, index) => [
  {
    heading: `Why ${formatLabel(category)} Is Trending`,
    body: `Consumers are comparing practical ${formatLabel(category).toLowerCase()} options that fit busy schedules, clear budgets, and simple daily routines. This guide highlights what to look for before taking the next step.`,
  },
  {
    heading: `The ${formatLabel(subcategory)} Opportunity`,
    body: `The strongest offers make the value obvious quickly: simple eligibility, low friction forms, clear benefits, and a next action that feels useful instead of generic.`,
  },
  {
    heading: "What Smart Shoppers Compare",
    body: `Before joining any promotion, review the offer type, fulfillment expectations, privacy language, and whether the incentive matches your health goal.`,
  },
  {
    heading: "How To Use This Guide",
    body: `Start with one small action, compare two alternatives, and keep notes on what feels sustainable. A focused approach usually beats chasing every wellness trend at once.`,
  },
  {
    heading: "Offer Quality Signals",
    body: `High performing CPA placements use clear headlines, benefit-led copy, believable social proof, and a call to action that directly matches the user's intent.`,
  },
  {
    heading: "Next Step",
    body: `If this topic fits your current goal, use the featured offer block below to check the latest sample promotion for item ${index + 1}.`,
  },
];

const makeItem = (category, categoryIndex, itemIndex) => {
  const globalIndex = categoryIndex * 50 + itemIndex;
  const subcategory = subcategories[category][itemIndex % subcategories[category].length];
  const offerType = offerTypes[globalIndex % offerTypes.length];
  const title = `${formatLabel(category)} ${titleAngles[itemIndex % titleAngles.length]} ${itemIndex + 1}`;
  const slug = `${category}-${subcategory}-${itemIndex + 1}`;
  const description = `A conversion-focused ${formatLabel(category).toLowerCase()} article covering ${formatLabel(subcategory).toLowerCase()}, benefits, FAQs, and a sample ${formatLabel(offerType).toLowerCase()} CPA offer.`;
  const image = `/placeholders/${category}-${itemIndex + 1}.jpg`;

  return {
    id: globalIndex + 1,
    slug,
    title,
    category,
    subcategory,
    author: authors[globalIndex % authors.length],
    publishDate: `2026-${String((globalIndex % 12) + 1).padStart(2, "0")}-${String((globalIndex % 27) + 1).padStart(2, "0")}`,
    image,
    description,
    contentBlocks: makeBlocks(category, subcategory, globalIndex),
    benefits: [
      `Clear ${formatLabel(category).toLowerCase()} action plan`,
      `Low-friction ${formatLabel(offerType).toLowerCase()} funnel angle`,
      "Mobile-friendly reader journey",
      "Built-in FAQs and related content",
    ],
    faq: [
      {
        question: `Is this ${formatLabel(category).toLowerCase()} offer free to review?`,
        answer: "Yes. This demo uses fake promotional data and placeholder calls to action.",
      },
      {
        question: "Do I need a prescription?",
        answer: "This content is informational and does not replace professional medical advice.",
      },
      {
        question: "How is popularity calculated?",
        answer: "Popularity is simulated from deterministic fake engagement signals.",
      },
    ],
    rating: Number((4.1 + (globalIndex % 9) / 10).toFixed(1)),
    offerType,
    ctaText: ctaByType[offerType],
    keywords: [category, subcategory, offerType, "health offers", "wellness deals"],
    popularityScore: 67 + (globalIndex % 31),
    trending: globalIndex % 5 === 0,
    seo: {
      title: `${title} | Health CPA Offers`,
      description,
      ogImage: image,
    },
  };
};

export const fakeData = categories.flatMap((category, categoryIndex) =>
  Array.from({ length: 50 }, (_, itemIndex) => makeItem(category, categoryIndex, itemIndex)),
);

export const healthCategories = categories.map((slug) => ({
  slug,
  label: formatLabel(slug),
  count: 50,
}));

export const testimonials = [
  { name: "Alicia R.", text: "The checklist made it easy to compare offers without getting lost.", result: "Saved 18 minutes" },
  { name: "Marcus T.", text: "The discount reveal flow felt direct and simple on mobile.", result: "Found a sample deal" },
  { name: "June P.", text: "The category filters helped me find the right wellness topic fast.", result: "Read 3 guides" },
];

export const getArticleBySlug = (slug) => fakeData.find((item) => item.slug === slug);
export const getArticlesByCategory = (category) => fakeData.filter((item) => item.category === category);
export const getArticlesByOfferType = (offerType) => fakeData.filter((item) => item.offerType === offerType);
export const getRelatedArticles = (article, limit = 4) =>
  fakeData
    .filter((item) => item.category === article.category && item.slug !== article.slug)
    .slice(0, limit);

