import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type Topic = {
  id: number;
  scheduledDate: string;
  topic: string;
  seoPhrase: string;
  category: string;
  lang: string;
  context: string;
};

type GeneratedArticle = {
  title: string;
  slug: string;
  metaDescription: string;
  content: string;
  readingTime: number;
};

type AnthropicResponse = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
  error?: {
    message?: string;
  };
};

const TOPICS_QUEUE: Topic[] = [
  {
    id: 1,
    scheduledDate: '2026-04-28',
    topic: 'Ile kosztuje wynajem autokaru w 2026? Kompletny cennik z Krakowa',
    seoPhrase: 'wynajem autokaru cena 2026',
    category: 'poradnik',
    lang: 'pl',
    context:
      'Ceny: Krakow-Kraków 1200-1500 zł, Krakow-Warszawa 1800-2400 zł, Krakow-Zakopane 2200-2800 zł. Minibus 800-1100 zł na krótkie trasy. Firma ma 180 pojazdów, 24 lata doświadczenia.',
  },
  {
    id: 2,
    scheduledDate: '2026-05-01',
    topic: 'Wycieczka szkolna autokarem z Krakowa — poradnik dla nauczycieli',
    seoPhrase: 'wynajem autokaru wycieczka szkolna Krakow',
    category: 'poradnik',
    lang: 'pl',
    context:
      'Firma obsługuje setki wycieczek szkolnych rocznie. Pasy bezpieczeństwa, CASCO, NNW, kontrole WITD pozytywne. Rezerwacja 3 tygodnie wcześniej.',
  },
  {
    id: 3,
    scheduledDate: '2026-05-05',
    topic: 'Jewish Heritage Tours in Poland — Complete Transport Guide',
    seoPhrase: 'Jewish heritage tour Poland transport',
    category: 'destynacje',
    lang: 'en',
    context:
      "Routes: Kraków Kazimierz, Auschwitz (60km from Kraków), Leżajsk (Rabbi Elimelech tomb), Lublin/Majdanek, Łańcut synagogue. Kosher lunch stops available. English-speaking drivers.",
  },
  {
    id: 4,
    scheduledDate: '2026-05-08',
    topic: 'Transport gości weselnych — 5 rzeczy które Para Młoda musi wiedzieć',
    seoPhrase: 'transport gości wesele autokar Krakow',
    category: 'poradnik',
    lang: 'pl',
    context:
      'Obsługa 500+ wesel. Autokar czeka na gości. Dekoracje możliwe. Powroty o 3 w nocy - tak, kierowca czeka. Od 600 zł trasa lokalna.',
  },
  {
    id: 5,
    scheduledDate: '2026-05-12',
    topic: 'MSPO Defence Exhibition Krakow — Transport Guide for Exhibitors',
    seoPhrase: 'MSPO Krakow transport exhibitors',
    category: 'B2B',
    lang: 'en',
    context:
      'Targi Krakow - MSPO (defence), SACROEXPO, PLASTPOL. Transfer z lotnisk KRK/WAW/KTW. Shuttle hotel-hale. VIP transport. Ceny w EUR: minibus from €280.',
  },
  {
    id: 6,
    scheduledDate: '2026-05-15',
    topic: 'Autokar, bus czy minibus — jaki pojazd wybrać na Twój wyjazd?',
    seoPhrase: 'różnica autokar bus minibus wynajem',
    category: 'poradnik',
    lang: 'pl',
    context:
      'Minibus 8-20 osób (wesela, lotnisko), bus 20-35 (firmy, szkoły), autokar 40-57 (wycieczki, pielgrzymki). Wszystkie z klimatyzacją, część z WC i WiFi.',
  },
  {
    id: 7,
    scheduledDate: '2026-05-19',
    topic: '10 najlepszych miejsc na wycieczkę szkolną z Krakowa',
    seoPhrase: 'wycieczka szkolna z Krakowa dokąd',
    category: 'destynacje',
    lang: 'pl',
    context:
      'Kraków 130km, Wieliczka 140km, Auschwitz 200km, Warszawa 180km, Sandomierz 80km, Jaskinia Raj 15km, Łysa Góra 30km, Wrocław 280km, Toruń 330km, Malbork 450km.',
  },
  {
    id: 8,
    scheduledDate: '2026-05-22',
    topic: 'Which Airport for Krakow? Complete Guide for International Visitors',
    seoPhrase: 'airport transfer Krakow Poland which airport',
    category: 'poradnik',
    lang: 'en',
    context:
      'Kraków KRK 120km/1.5h, Katowice KTW 160km/2h, Warsaw WAW 180km/2.5h, Radom RDO 90km/1h. Private transfer prices: KRK from €280 minibus, WAW from €400.',
  },
  {
    id: 9,
    scheduledDate: '2026-05-26',
    topic: 'MSPO Messe Krakow — Bustransfer für Aussteller und Delegationen',
    seoPhrase: 'MSPO Messe Krakow Bustransfer',
    category: 'B2B',
    lang: 'de',
    context:
      'Transfer Flughafen Krakau-Krakow 1.5h, Katowice-Krakow 2h. Shuttle-Service Hotel-Messehallen. VIP-Transport. Preise ab 280€ Kleinbus.',
  },
  {
    id: 10,
    scheduledDate: '2026-05-29',
    topic: '7 rzeczy do sprawdzenia zanim wynajmiesz autokar',
    seoPhrase: 'na co zwrócić uwagę wynajem autokaru',
    category: 'poradnik',
    lang: 'pl',
    context:
      'Sprawdź: 1) licencja, 2) OC+NNW, 3) wiek pojazdów, 4) pasy bezpieczeństwa, 5) opinie Google, 6) jawny cennik, 7) dyspozytornia weekendowa. Muszkieter ma wszystko.',
  },
  {
    id: 11,
    scheduledDate: '2026-06-02',
    topic: 'Częstochowa i Jasna Góra — jak zorganizować pielgrzymkę autokarem',
    seoPhrase: 'pielgrzymka Częstochowa autokar Krakow',
    category: 'destynacje',
    lang: 'pl',
    context:
      'Krakow-Częstochowa 150km, 2h jazdy. Parking dla autokarów przy Jasnej Górze. Grupy parafialne 30-50 osób. Połączenie z Gidle lub Mstów.',
  },
  {
    id: 12,
    scheduledDate: '2026-06-05',
    topic: 'Auschwitz-Birkenau Private Bus from Kraków — What to Expect',
    seoPhrase: 'private bus Auschwitz Kraków',
    category: 'destynacje',
    lang: 'en',
    context:
      '60km from Kraków, 1h drive. Parking permits handled. Allow 3-4h for visit. Combined with Wieliczka Salt Mine possible. From €280 minibus.',
  },
  {
    id: 13,
    scheduledDate: '2026-06-09',
    topic: 'Autokarem do Krakowa — co zobaczyć w 1 dzień z grupą',
    seoPhrase: 'wycieczka autokar Kraków jeden dzień',
    category: 'destynacje',
    lang: 'pl',
    context:
      'Krakow-Kraków 130km, 1.5h. Plan: Wawel, Rynek, Sukiennice, Kazimierz, opcjonalnie Wieliczka. Parking autokarowy przy Wawelu i w Nowej Hucie.',
  },
  {
    id: 14,
    scheduledDate: '2026-06-12',
    topic: 'Busmiete in Polen — Was kostet ein Reisebus 2026?',
    seoPhrase: 'Busmiete Polen Kosten Preise',
    category: 'poradnik',
    lang: 'de',
    context:
      'Preise: Kleinbus (8-20 Pers.) ab 200€/Tag, Reisebus (40-57 Pers.) ab 350€/Tag. Krakau-Auschwitz ab 280€. Flughafen-Transfer ab 250€.',
  },
  {
    id: 15,
    scheduledDate: '2026-06-16',
    topic: 'Piknik firmowy — jak dojechać z 50 pracownikami na integrację',
    seoPhrase: 'transport piknik firmowy autokar',
    category: 'sezon',
    lang: 'pl',
    context:
      'Sezon piknikowy VI-IX. Popularne lokalizacje: Ameliówka, Sabat Krajno, Bałtów. Autokar 50-osobowy z klimatyzacją. Odbiór spod biura, dowóz na miejsce.',
  },
];

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const querySecret = url.searchParams.get('secret');
  const headerAuth = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ debug: 'CRON_SECRET not set in env' });
  }

  const isAuthorized = querySecret === cronSecret || headerAuth === `Bearer ${cronSecret}`;

  if (!isAuthorized) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
        debug: {
          hasQuerySecret: !!querySecret,
          hasCronSecret: !!cronSecret,
          match: querySecret === cronSecret,
        },
      },
      { status: 401 }
    );
  }

  const today = new Date().toISOString().split('T')[0];
  const nextTopic = TOPICS_QUEUE.find((topic) => topic.scheduledDate === today);

  if (!nextTopic) {
    return NextResponse.json({
      message: 'Brak tematu zaplanowanego na dziś',
      today,
      nextScheduled: TOPICS_QUEUE.filter((topic) => topic.scheduledDate > today).sort((left, right) =>
        left.scheduledDate.localeCompare(right.scheduledDate)
      )[0] ?? null,
    });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({
      error: 'Missing ANTHROPIC_API_KEY',
      details: 'Set ANTHROPIC_API_KEY in the deployment environment before calling this endpoint.',
    }, { status: 500 });
  }

  try {
    const article = await generateWithClaude(nextTopic);

    return NextResponse.json({
      success: true,
      topic: nextTopic.topic,
      generatedTitle: article.title,
      slug: article.slug,
      lang: nextTopic.lang,
      content: article,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown generation error';

    return NextResponse.json({
      error: 'Generation failed',
      details: message,
    }, { status: 500 });
  }
}

async function generateWithClaude(topic: Topic): Promise<GeneratedArticle> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('Missing ANTHROPIC_API_KEY');
  }

  const langInstructions: Record<string, string> = {
    pl: 'Pisz po polsku. Ton: ciepły, profesjonalny, bez żargonu.',
    en: 'Write in English. Tone: professional, warm, trustworthy.',
    de: 'Schreiben Sie auf Deutsch. Ton: professionell, freundlich, vertrauenswürdig.',
    ar: 'اكتب باللغة العربية. النبرة: مهنية، ودية، جديرة بالثقة.',
    ru: 'Пишите на русском языке. Тон: профессиональный, дружелюбный.',
    fr: 'Écrivez en français. Ton: professionnel, chaleureux.',
    es: 'Escriba en español. Tono: profesional, cálido.',
  };

  const prompt = `Jesteś copywriterem firmy transportowej Muszkieter z Krakowa, Polska.
Firma: 24 lata doświadczenia, 180 pojazdów (8-57 miejsc), CASCO, NNW, licencja ITD.
Telefon: +48 601 076 652. Adres: ul. Kolberga 9, Krakow.

Napisz artykuł blogowy:
Temat: "${topic.topic}"
Fraza SEO: "${topic.seoPhrase}"
Kategoria: ${topic.category}
${langInstructions[topic.lang] ?? langInstructions.pl}

Kontekst: ${topic.context}

ZASADY:
- 500-700 słów
- H1 zawiera frazę SEO
- Pierwszy akapit = problem/potrzeba klienta (NIE opis firmy)
- 3-5 śródtytułów H2
- Na końcu sekcja FAQ (3 pytania z odpowiedziami)
- Ostatnie zdanie = CTA z numerem telefonu 601 076 652
- Pisz oryginalnie, NIE kopiuj z internetu
- Brak emoji w treści (profesjonalnie)

Odpowiedz WYŁĄCZNIE w formacie JSON (bez markdown backticks):
{
  "title": "tytuł",
  "slug": "slug-bez-polskich-znakow",
  "metaDescription": "opis 160 znaków",
  "content": "treść w Markdown",
  "readingTime": 5
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    }),
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorBody = (await response.text()) || response.statusText;
    throw new Error(`Claude API error: ${response.status} ${errorBody}`);
  }

  const data = (await response.json()) as AnthropicResponse;
  const text = data.content?.find((item) => item.type === 'text' && item.text)?.text;

  if (!text) {
    throw new Error(data.error?.message ?? 'Claude API returned no text content');
  }

  const cleanText = text.replace(/```json\n?|```\n?/g, '').trim();
  const parsed = JSON.parse(cleanText) as GeneratedArticle;

  if (!parsed.title || !parsed.slug || !parsed.metaDescription || !parsed.content || !parsed.readingTime) {
    throw new Error('Claude response is missing required article fields');
  }

  return parsed;
}