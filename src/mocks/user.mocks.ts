import { User } from "../models/user"

const userList: User[] = [
  {
    name: "Paul",
    company: "COMP",
    location: "Spain",
    bio: "My bio...",
    avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGftwHlIS4T4_DbxBYz9EbQHer1gpLOV3E3PuvVDkT7P7ggE-s",
    email: "paul@paul.paul"
  },
  {
    name: "Paul2",
    company: "COMP2",
    location: "Spain2",
    bio: "My bio...2",
    avatar_url: "http://.....2",
    email: "paul@paul.paul2"
  }
];

export const USER_LIST = userList;
