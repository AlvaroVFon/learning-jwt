import User from '../../models/User'
import { securePasswordSync } from '../../helpers/securePassword'

const users: User[] = [
    {
        name: 'Admin',
        email: 'admin@email.com',
        password: securePasswordSync('password123'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        password: securePasswordSync('password123'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'María López',
        email: 'maria.lopez@example.com',
        password: securePasswordSync('securepass456'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Carlos Sánchez',
        email: 'carlos.sanchez@example.com',
        password: securePasswordSync('mypassword789'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Ana González',
        email: 'ana.gonzalez@example.com',
        password: securePasswordSync('strongpass321'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Luis Fernández',
        email: 'luis.fernandez@example.com',
        password: securePasswordSync('password654'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Laura Martínez',
        email: 'laura.martinez@example.com',
        password: securePasswordSync('mysecret987'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Miguel Torres',
        email: 'miguel.torres@example.com',
        password: securePasswordSync('password321'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Elena Ruiz',
        email: 'elena.ruiz@example.com',
        password: securePasswordSync('securepasswordSync654'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Jorge Ramírez',
        email: 'jorge.ramirez@example.com',
        password: securePasswordSync('mypassword321'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
    {
        name: 'Sofía Mendoza',
        email: 'sofia.mendoza@example.com',
        password: securePasswordSync('password789'),
        role_id: Math.floor(Math.random() * 3) + 1,
    },
]

export { users }
