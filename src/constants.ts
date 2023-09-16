export const basePlaylistUrl = (playlistId: string, apiKey: string,pageToken?:string) =>
  `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&pageToken=${pageToken}&playlistId=${playlistId}&key=${apiKey}`;
export const baseVideoUrl = (videoId: string, apiKey: string) =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=50&id=${videoId}&key=${apiKey}`;
export const apiKey = "AIzaSyChDyVtA9ghxaZrBBPkMggLyDuduEZAu6c";
