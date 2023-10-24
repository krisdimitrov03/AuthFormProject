import { mockUser } from "../mock/users.js"
import * as api from '../api/api.js'

export const login = (email, password) => {
    return {
        success: true,
        user: mockUser
    }
}
export const register = (firstName, lastName, email, password) => {
    const result = api.createUser(firstName, lastName, email, password);

    return result ? { success: true } : { success: false, error: 'Invalid input data.' };
}
export const logout = () => { }
export const profile = () => { }