const axios = require("axios");
const settings = require("./config/config");

const urlChecking = "https://raw.githubusercontent.com/Boyoke-Encok/api-id/refs/heads/main/endpoint.json";

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi(urlChecking);
    if (result.endpoint) {
      console.log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      endpoint: settings.BASE_URL,
      message:
        "PHAROS BY : Mas AL . Xyz",
    };
  }
}

async function getBaseApi(url) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    if (content?.pharos) {
      return { endpoint: content.pharos, message: content.copyright };
    } else {
      return {
        endpoint: null,
        message:
          "PHAROS BY : Mas AL . Xyz",
      };
    }
  } catch (e) {
    return {
      endpoint: null,
      message:
        "PHAROS BY : Mas AL . Xyz",
    };
  }
}

module.exports = { checkBaseUrl };
