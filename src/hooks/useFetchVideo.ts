import axios from "axios";
import { baseVideoUrl, apiKey } from "../constants";
import { convertIsoToSeconds } from "../app.utils";

export const useFetchVideo = async (videoId: string) => {
  const { data } = await axios.get(baseVideoUrl(videoId, apiKey));
  console.log(data.items[0].contentDetails.duration,convertIsoToSeconds(data.items[0].contentDetails.duration))
  return convertIsoToSeconds(data.items[0].contentDetails.duration);
};
