import { UserModel } from "./user.model"

export interface NotificationModel{
  _id:string
  sender: UserModel
  receiver: string[]
  name: String
  content: String
  isRead: string[]
  createdAt: string
}