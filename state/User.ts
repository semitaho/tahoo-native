export enum UserRole {
  CREATOR = "CREATOR",
  JOINER = "JOINER"
}
export default interface User {
  name: string;
  role: UserRole;
}