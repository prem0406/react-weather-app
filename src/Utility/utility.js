export const ICON_MAP = new Map();

addMapping([0, 1], "sun");
addMapping([2], "cloud-sun");
addMapping([3], "cloud");
addMapping([45, 48], "smog");
addMapping(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  "cloud-showers-heavy"
);
addMapping([71, 73, 75, 77, 85, 86], "snowflake");
addMapping([95, 96, 99], "cloud-bolt");

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

export function getIconUrl(iconCode) {
  return `images/${ICON_MAP.get(iconCode)}.svg`;
}

export const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
});

export const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
});
