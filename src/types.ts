export type PageContentType = {
  title: string;
  content: string;
  url?: string;
  date?: string | Date;
  imgUrls?: string[];
};

export type MainPageType = {
  title: string;
  subtitle: string;
  section: PageContentType[];
};

export type PagesType = {
  [k: string]: PageContentType;
};

export type ContactType = {
  title: string;
  url: string;
  img: string;
};
export type BlogType = string | (PageContentType | string)[];
export type RouterDataType = {
  main?: MainPageType;
  pages?: PagesType;
  blog?: BlogType;
  contact?: ContactType[];
};
