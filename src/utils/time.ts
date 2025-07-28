export function shortTimeAgo(dateStr) {
  const date = new Date(dateStr); // works for both pubDate and isoDate
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const units = [
    { label: "y", seconds: 60 * 60 * 24 * 365 },
    { label: "mo", seconds: 60 * 60 * 24 * 30 },
    { label: "d", seconds: 60 * 60 * 24 },
    { label: "h", seconds: 60 * 60 },
    { label: "m", seconds: 60 },
    { label: "s", seconds: 1 },
  ];

  for (let unit of units) {
    const value = Math.floor(seconds / unit.seconds);
    if (value >= 1) {
      return `${value}${unit.label}`;
    }
  }

  return "just now";
}
