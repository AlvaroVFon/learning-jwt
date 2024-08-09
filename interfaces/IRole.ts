import { RoleType } from '../enums/RoleType.enum'

export interface IRole {
    id?: RoleType
    name: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
}
