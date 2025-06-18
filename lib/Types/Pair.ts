  export interface Photo {
    image: string
  }

  export type FilterType = 'living' | 'bucatarie' | 'dormitor' | 'baie' | 'camera_copii';

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

  export interface ProjectLanType {
    id: number,
    titleRO: string,
    descriptionRO: string,
    titleEN: string,
    descriptionEN: string,
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