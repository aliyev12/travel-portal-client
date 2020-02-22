import getHost from "./getHost";

const ROLES = {
  user: "Regular User",
  guide: "Tour Guide",
  lead_guide: "Lead Guide",
  admin: "Admin User"
};

export const parseRole = (role: string): string => ROLES[role];

export const imgUrl = (type: string, name: string): string =>
  `${getHost()}/img/${type}/${name}`;
