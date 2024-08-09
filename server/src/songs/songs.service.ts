import { Injectable } from '@nestjs/common';
import { Song } from 'src/common/interface/song.interface';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongsService {
  private songs: Song[] = [];

  constructor() {
    this.loadSongs();
  }

  private loadSongs() {
    const csvFilePath = path.join(__dirname, 'Songs2024.csv');
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row: Song) => {
        const id: string = uuidv4();
        this.songs.push({ ...row, id });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
  }

  getAllSongs() {
    return this.songs;
  }

  getSongById(id: string) {
    console.log(this.songs.find((song) => song.id === id));
    return this.songs.find((song) => song.id === id);
  }
}
