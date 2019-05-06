import { Schema, model, Document } from 'mongoose'

// interface extending Document to use as Object when request from database
interface UserInterface extends Document {
  email?: string,
  firstName?: string,
  lastName?: string,
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)
