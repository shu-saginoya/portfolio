import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Category } from "./category";
import type { Tag } from "./tag";

export type Blog = {
  title: string;
  date: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: MicroCMSListContent & Category;
  tags?: (MicroCMSListContent & Tag)[] | null;
};
