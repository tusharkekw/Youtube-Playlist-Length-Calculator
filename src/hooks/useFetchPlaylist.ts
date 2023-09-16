import axios from "axios";
import { basePlaylistUrl, apiKey } from "../constants";
import { useFetchVideo } from "./useFetchVideo";


export const useFetchPlaylistItems = async (playlistId: string,setTotalDuration : any,setTotalVideos:any ) => {
  let nextPageToken='';
  let allVideoIds:string[] = [];
  while (true) {
    const { data } = await axios.get(basePlaylistUrl(playlistId, apiKey,nextPageToken));

    const videoIds = data.items.map((item: any) => item.contentDetails.videoId);
    allVideoIds = allVideoIds.concat(videoIds);

    if (data.nextPageToken) {
      nextPageToken = data.nextPageToken;
    } else {
      break; // Exit the loop when nextPageToken is null
    }
  }
    //map starts all the operations concurrently, and it doesn't wait for one before starting another, thus is fast. 
  const durationArray = await Promise.all(allVideoIds.map(async (videoId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return await useFetchVideo(videoId);
  }));

  const totalDuration = durationArray.reduce((acc, duration) => acc + duration, 0);
  setTotalVideos(allVideoIds.length)
  setTotalDuration(totalDuration);

};
