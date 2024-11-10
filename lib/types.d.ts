import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type SkillsProps = {
  name: string;
  icon: React.ComponentType;
};
