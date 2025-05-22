import {
  Globe,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  File,
  MessageSquare,
} from "lucide-react";

export interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon: keyof typeof LinkIconMap;
}

export const LinkIconMap = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  file: File,
  chat: MessageSquare,
};
