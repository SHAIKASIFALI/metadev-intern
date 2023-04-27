const ogs = require("open-graph-scraper");
const options = {
  url: "https://www.instagram.com/reel/CqnTcGJAckx/?igshid=YmMyMTA2M2Y%3D",
};

const getMetadata = async (options) => {
  const data = await ogs(options);
  console.log(data.result);
};
getMetadata(options);
