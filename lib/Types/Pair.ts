  export interface Photo {
    image: string
  }

  export type FilterType = 'Living' | 'Bucătărie' | 'Dormitor' | 'Baie' | 'Cameră pentru copii';

  export interface ProjectType {
    id: number,
    title: string,
    description: string,
    bedroom?: Photo[],
    living?: Photo[],
    kitchen?: Photo[],
    bedroom_children?: Photo[],
    bathroom?: Photo[],
  }

  export interface Pair {
    slide1: ProjectType;
    slide2: ProjectType;
  }