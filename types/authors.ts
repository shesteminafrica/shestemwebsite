/**
 * Types for the `authors` constant.
 *
 * Author objects are keyed by a string (typically the display name or slug)
 * and contain localized `bio` and `title` fields for `fr` and `en`.
 */

export type LocalizedString = {
    fr: string;
    en: string;
};

export interface Author {
    name: string;
    /** Path under `public/` or URL to the author's photo */
    photo?: string;
    bio: LocalizedString;
    title?: LocalizedString;
}

/** Map of author key -> Author */
export type AuthorsMap = Record<string, Author>;
