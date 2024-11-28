const users = {};

// Crear un nuevo usuario
function createUser(username, password) {
    if (users[username]) {
        throw new Error('El usuario ya existe');
    }
    users[username] = { password };
}

// Obtener un usuario por nombre
function getUser(username) {
    return users[username];
}

// Obtener todos los usuarios
function getAllUsers() {
    return Object.keys(users);
}

// Actualizar un usuario existente
function updateUser(oldUsername, newUsername, newPassword) {
    if (!users[oldUsername]) {
        throw new Error('Usuario no encontrado');
    }
    const userData = users[oldUsername];
    delete users[oldUsername];
    users[newUsername] = { ...userData, password: newPassword };
}

// Eliminar un usuario
function deleteUser(username) {
    if (!users[username]) {
        throw new Error('Usuario no encontrado');
    }
    delete users[username];
}

// Validar un usuario y contraseña
function validateUser(username, password) {
    const user = users[username];
    return user && user.password === password;
}

// Exportar funciones
module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    validateUser,
};
