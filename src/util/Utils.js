export async function getIpInfo() {
  try {
    const { data } = await axios.get("https://www.cloudflare.com/cdn-cgi/trace")

    return data
      .trim()
      .split("\n")
      .reduce(function (obj, pair) {
        pair = pair.split("=")
        return (obj[pair[0]] = pair[1]), obj
      }, {})
  } catch (error) {
    console.error(error)
    return {}
  }
}
