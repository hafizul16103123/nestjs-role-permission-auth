export interface IUser{
    username:string,
    roles:string[],
    password:string,
    permissions:string[]
}
export class UserDTO {
    username:string;
    password:string
}
export const userStub = ():IUser[]=>{
    return [
        {
        username:"hafiz",
        password:"123",
        roles:["admin"],
        permissions:["user.create","user.update"],
      },
      {
        username:"nusayeb",
        password:"123",
        roles:["user"],
        permissions:["user.get","use.get.all"],
      }
    ]
}