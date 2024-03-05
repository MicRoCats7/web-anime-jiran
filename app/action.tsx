"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&limit=8`)


  const data = await response.json()

  return data.data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.mal_id} anime={item} index={index} />
  ))
}

export const fetchAnimeDetail = async (id: number) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)

  const data = await response.json()
  console.log(data)

  return data
}