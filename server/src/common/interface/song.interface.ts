import { ApiProperty } from '@nestjs/swagger';

export interface Song {
  id: string;
  track: string;
  albumName: string;
  artist: string;
  releaseDate: string;
  isrc: string;
  allTimeRank: number;
  trackScore: number;
  spotifyStreams: number;
  spotifyPlaylistCount: number;
  spotifyPlaylistReach: number;
  spotifyPopularity: number;
  youtubeViews: number;
  youtubeLikes: number;
  tiktokPosts: number;
  tiktokLikes: number;
  tiktokViews: number;
  youtubePlaylistReach: number;
  appleMusicPlaylistCount: number;
  airplaySpins: number;
  siriusXMSpins: number;
  deezerPlaylistCount: number;
  deezerPlaylistReach: number;
  amazonPlaylistCount: number;
  pandoraStreams: number;
  pandoraTrackStations: number;
  soundcloudStreams: number;
  shazamCounts: number;
  tidalPopularity: number;
  isExplicit: boolean;
}

export class SongProperties {
  @ApiProperty({
    example: '1',
    description: 'The unique identifier of the song',
  })
  id: string;

  @ApiProperty({
    example: 'Shape of You',
    description: 'The title of the song',
  })
  track: string;

  @ApiProperty({ example: 'Ed Sheeran', description: 'The artist of the song' })
  artist: string;

  @ApiProperty({ example: 'Divide', description: 'The album name of the song' })
  albumName: string;

  @ApiProperty({
    example: '2024-04-11T21:00:00.000Z',
    description: 'The release date of the song',
  })
  releaseDate: string;

  @ApiProperty({ example: 1, description: 'The rank of the song' })
  allTimeRank: number;

  @ApiProperty({
    example: 'USUM72403305',
    description: 'The ISRC code of the song',
  })
  isrc: string;

  @ApiProperty({ example: 1, description: 'The rank of the song' })
  trackScore: number;

  @ApiProperty({
    example: 123456,
    description: 'The number of streams on Spotify',
  })
  spotifyStreams: number;

  @ApiProperty({
    example: 10,
    description: 'The number of playlists on Spotify',
  })
  spotifyPlaylistCount: number;

  @ApiProperty({
    example: 100,
    description: 'The reach of playlists on Spotify',
  })
  spotifyPlaylistReach: number;

  @ApiProperty({
    example: 100,
    description: 'The popularity of the song on Spotify',
  })
  spotifyPopularity: number;

  @ApiProperty({ example: 100, description: 'The number of views on YouTube' })
  youtubeViews: number;

  @ApiProperty({ example: 100, description: 'The number of likes on YouTube' })
  youtubeLikes: number;

  @ApiProperty({ example: 100, description: 'The number of posts on TikTok' })
  tiktokPosts: number;

  @ApiProperty({ example: 100, description: 'The number of likes on TikTok' })
  tiktokLikes: number;

  @ApiProperty({ example: 100, description: 'The number of views on TikTok' })
  tiktokViews: number;

  @ApiProperty({
    example: 100,
    description: 'The reach of playlists on YouTube',
  })
  youtubePlaylistReach: number;

  @ApiProperty({
    example: 100,
    description: 'The number of playlists on Apple Music',
  })
  appleMusicPlaylistCount: number;

  @ApiProperty({ example: 100, description: 'The number of spins on Airplay' })
  airplaySpins: number;

  @ApiProperty({ example: 100, description: 'The number of spins on SiriusXM' })
  siriusXMSpins: number;

  @ApiProperty({
    example: 100,
    description: 'The number of playlists on Deezer',
  })
  deezerPlaylistCount: number;

  @ApiProperty({
    example: 100,
    description: 'The reach of playlists on Deezer',
  })
  deezerPlaylistReach: number;

  @ApiProperty({
    example: 100,
    description: 'The number of playlists on Amazon Music',
  })
  amazonPlaylistCount: number;

  @ApiProperty({
    example: 100,
    description: 'The number of streams on Pandora',
  })
  pandoraStreams: number;

  @ApiProperty({
    example: 100,
    description: 'The number of stations on Pandora',
  })
  pandoraTrackStations: number;

  @ApiProperty({
    example: 100,
    description: 'The number of streams on SoundCloud',
  })
  soundcloudStreams: number;

  @ApiProperty({
    example: 100,
    description: 'The number of shazams on Shazam!',
  })
  shazamCounts: number;

  @ApiProperty({
    example: 100,
    description: 'The popularity of the song on Tidal',
  })
  tidalPopularity: number;

  @ApiProperty({
    example: true,
    description: 'Whether the song is explicit or not',
  })
  isExplicit: boolean;
}
