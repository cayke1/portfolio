export interface Experience {
    id: number;
    type: "work" | "education" | "achievement";
    title: string;
    company?: string;
    institution?: string;
    location: string;
    date: string;
    description: string;
    skills?: string[];
  }