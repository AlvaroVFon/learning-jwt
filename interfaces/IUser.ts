interface IUser {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: string
    updated_at?: string
    deleted_at?: string
}

export { IUser }
