import { ReactNode } from "react";

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}
