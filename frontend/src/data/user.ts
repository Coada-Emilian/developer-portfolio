import type { IUser } from "../@types/interfaces/IUser";
import firstUserPhoto from "../assets/images/user_image.png";
import secondUserPhoto from "../assets/images/user_image2.jpeg";
import thirdUserPhoto from "../assets/images/user_image3.jpg";

export const user: IUser = {
  firstName: "Emilian",
  lastName: "Coada",
  subtitle: "Développeur Full Stack",
  photos: [firstUserPhoto, secondUserPhoto, thirdUserPhoto],
};
