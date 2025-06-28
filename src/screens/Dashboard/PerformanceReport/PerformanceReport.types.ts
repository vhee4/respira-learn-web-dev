// Define the CardDetail interface to allow string or ReactNode for headText
export interface CardDetail {
  id: number;
  headText: string | React.ReactNode;
  subText: string;
}
