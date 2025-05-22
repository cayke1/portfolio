export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
  status: 'completo' | 'em andamento' | 'planejado';
}
