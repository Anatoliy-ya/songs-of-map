import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { SongsService } from './songs.service';
import { Song } from 'src/common/interface/song.interface';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @ApiOperation({ summary: 'Get all songs' })
  @Get()
  getAllSongs(): Song[] {
    return this.songsService.getAllSongs();
  }

  @ApiOperation({ summary: 'Get a song by ID' })
  @ApiParam({ name: 'id', description: 'The unique identifier of the song' })
  @Get(':id')
  getSongById(@Param('id') id: string): Song {
    return this.songsService.getSongById(id);
  }
}
