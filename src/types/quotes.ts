export interface GetQuotes {
  sha: string;
  quotes: string;
}

export interface Quotes {
  title: string;
  quote: string;
  author: string;
  url: string;
  tags: string[];
  addedAt?: number;
}
