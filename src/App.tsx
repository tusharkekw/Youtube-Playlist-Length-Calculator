import {Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFetchPlaylistItems } from "./hooks/useFetchPlaylist";
import { displayTime, extractPlaylistId } from "./app.utils";


const App: React.FC = () => {
  const [playlistUrl, setPlaylistUrl] = useState<string>("");
  const [totalDuration , setTotalDuration] = useState<number>(0);
  const[totalVideos, setTotalVideos] =  useState<number>(0);
  const onTextChange = (e: any) => setPlaylistUrl(e.target.value);

  const handleSubmit = async () => {
    const playlistId = extractPlaylistId(playlistUrl);
    if (playlistId) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useFetchPlaylistItems(playlistId,setTotalDuration,setTotalVideos);
    }
  };
  
  const formattedTime = (displayTime(totalDuration));

  return (
    <>
      <Stack direction='row' sx={{ justifyContent: 'center', alignItems: 'center', mt: 4, mb: 2 }}>
        <TextField
          onChange={onTextChange}
          value={playlistUrl}
          variant="outlined"
          label="Enter Playlist URL"
          sx={{width:'50%'}}
        />
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Calculate Length
        </Button>
      </Stack>
      <Stack sx={{ textAlign: 'center', mt: 2 }}>
        {totalVideos !== 0 && (
          <div>
            <strong>Total Videos:</strong> {totalVideos}
          </div>
        )}
        {totalDuration !== 0 && (
          <div>
            <strong>Total Duration:</strong> {formattedTime}
          </div>
        )}
      </Stack>
    </>
  );
};
export default App;
