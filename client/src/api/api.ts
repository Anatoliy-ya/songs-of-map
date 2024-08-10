// api.ts
import axios from 'axios';
import { transformData } from '../utils/transformData';
import { Song } from '../types/songInterface';

const API_BASE_URL = 'http://localhost:3000';

export const getAllSongs = async (): Promise<Song[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/songs`);
    const rawSongsData = response.data;

    // Применяем transformData ко всем элементам массива
    const transformedSongs = rawSongsData.map(transformData);

    return transformedSongs;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const getSongById = async (id: string): Promise<Song> => {
  return transformData(await axios.get(`${API_BASE_URL}/songs/${id}`));
};
