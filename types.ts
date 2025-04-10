export type SelectedProjectProps = {
  id: string;
  image: string;
  label: string;
  caption: string;
  description: string;
  github?: string;
  website?: string;
  meta?: Record<string, string>;
  content: string;
};
