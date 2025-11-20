export interface IUser {
    id: number
    name: string
}

export interface IInitialState {
    user: IUser
    isLoading: boolean
    error: {message: string} | null
}