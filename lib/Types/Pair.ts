  export interface Slide {
    image: string;
    title: string;
    description: string;
  }

  export interface Pair {
    slide1: Slide[];
    slide2: Slide[];
  }