import { MainClient } from 'pokenode-ts';
import { PokebreederSpecies } from '../../shared/types';

function normalizeId(id: number) {
  let str = id.toString();
  while (str.length < 3) {
    str = '0' + str;
  }
  return str;
}

export const pokeApi = new MainClient();

export async function getPokemonSpecimen(
  id: number,
): Promise<PokebreederSpecies> {
  const species = await pokeApi.pokemon.getPokemonSpeciesById(id);
  const growth = await pokeApi.pokemon.getGrowthRateByName(
    species.growth_rate.name
  );
  // const evolution = await pokeApi.evolution.getEvolutionChainById(id);

  const normalizedId = normalizeId(species.id);

  return {
    dex: species.id,
    levels: growth.levels,
    // evolution: evolution,
    sprites: {
      idle: `http://localhost:3000/sprites/pokemon/${normalizedId}/${normalizedId}.gif`,
      attack: `http://localhost:3000/sprites/pokemon/${normalizedId}/${normalizedId}-2.gif`,
    },
  };
}
