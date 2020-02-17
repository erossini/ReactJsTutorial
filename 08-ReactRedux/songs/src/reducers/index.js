import { combineReducers } from 'redux';
import { selectSong } from '../actions';

const songsReducer = () => {
  return [
    { title: "Barbie girl", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:15" },
    { title: "Test", duration: "2:59" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});