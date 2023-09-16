import moment from "moment";

export const extractPlaylistId = (playlistUrl: string) => {
  const regex = /[?&]list=([^&]+)/;
  const match = playlistUrl.match(regex);
  if (match) {
    return match[1];
  }
  return null;
};

export const convertIsoToSeconds = (duration: string) => {
  const x = moment.duration(duration).asSeconds();
  return x;
};

export const displayTime = (totalDuration:number) => {
  const duration = moment.duration(totalDuration, 'seconds');  
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds()
  return `${days} days, ${hours} hours, ${minutes} minutes ${seconds} seconds`;
}
