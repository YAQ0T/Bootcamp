function songManager() {
  const songList = [];

  let addSong = (songName, songLink) => {
    let objectOfNameAndLink = {};
    objectOfNameAndLink.name = songName;
    songLink = songLink.slice(-11);
    objectOfNameAndLink.link = songLink;
    songList.push(objectOfNameAndLink);
  };
  let getSong = (songName) => {
    for (i of songList) {
      if (i.name == songName) {
        console.log("https://www.youtube.com/watch?v=" + i.link);
      }
    }
  };
  return {
    addSong: addSong,
    getSong: getSong,
  };
}
const songsManager = songManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
