import { EvolutionChain, GrowthRateExperienceLevel } from 'pokenode-ts';

export type PokebreederSpecies = {
  dex: number;
  levels: GrowthRateExperienceLevel[];
  sprites: {
    idle: string;
    attack?: string;
  };
  evolution?: EvolutionChain;
};
