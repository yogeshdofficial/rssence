import Parser from "rss-parser";

const parser = new Parser();

export async function getFeedFromUrl(url: string) {
  try {
    const feed = await parser.parseURL(url);
    console.log(url, "parsed ✅");

    return feed.items;
  } catch (err) {
    console.log(err);
    console.log(url, "not pared ❌");
    return [];
  }
}
