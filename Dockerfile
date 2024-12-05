# 1. Usar la imagen oficial de Node.js como base
FROM node:18

# 2. Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# 3. Copiar package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# 4. Instalar las dependencias de la aplicación
RUN npm install

# 5. Copiar todos los archivos del proyecto al contenedor
COPY . .

# 6. Exponer el puerto en el que la app va a correr
EXPOSE 3000

# 7. Definir el comando para iniciar la app (usando nodemon para desarrollo)
CMD ["node", "server.js"]

# Crea la imagen
# docker build -t node.app .

# Ejecutarla
# docker run -p 3000:3000 node-app