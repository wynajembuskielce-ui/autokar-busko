import seasonalCalendar from '@/data/seasonal-calendar-multilang.json';

export type Language = 'pl' | 'en' | 'de';

export function getSeasonalSegment(calendar: typeof seasonalCalendar) {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const monthData = calendar.calendar[month];
  if (!monthData) return null;
  const periodIndex = day < 16 ? 0 : 1;
  return monthData.periods[periodIndex] || null;
}

type SeasonalSegment = Record<string, unknown> | null;

export function getSeasonalCTA(segment: SeasonalSegment, lang: Language): string {
  if (!segment) return 'Zarezerwuj teraz';
  const cta = segment[`featured_cta_${lang}`];
  return typeof cta === 'string' ? cta : 'Book now';
}

export function getSeasonalKeywords(segment: SeasonalSegment, lang: Language): string[] {
  if (!segment) return [];
  const keywords = segment[`keywords_${lang}`];
  return Array.isArray(keywords) ? keywords.filter((item): item is string => typeof item === 'string') : [];
}
