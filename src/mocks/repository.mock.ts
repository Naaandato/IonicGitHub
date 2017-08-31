import { Repository } from "../models/repository"
import { USER_LIST} from "./user.mocks"

const repositoryList: Repository[] = [
  {
    name: 'Ionic 3 camera',
    description: 'This repository shows the usage of the Camera',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'This repository shows the usage of the Camera',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Geolocation',
    description: 'This repository shows the usage of the Camera',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'This repository shows the usage of the Camera',
    owner: USER_LIST[1]
  }

];

export const REPOSITORY_LIST = repositoryList;
