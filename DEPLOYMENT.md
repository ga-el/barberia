# Guía de Despliegue - Netlify

## Pasos para desplegar tu aplicación de barbería en Netlify

### 1. Preparación del proyecto

✅ **Completado**: El proyecto ya está configurado para Netlify con:
- `astro.config.mjs` usando `@astrojs/netlify`
- `netlify.toml` con configuración de build
- Variables de entorno configuradas
- Firebase configurado para usar variables de entorno

### 2. Subir el código a Git

```bash
# Inicializar repositorio (si no está inicializado)
git init

# Añadir archivos
git add .

# Commit inicial
git commit -m "Initial commit - Barberia app ready for Netlify"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/tu-usuario/barberia.git

# Subir código
git push -u origin main
```

### 3. Configurar Netlify

#### Opción A: Desde la interfaz web de Netlify

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta/inicia sesión
2. Haz clic en "New site from Git"
3. Conecta tu repositorio de GitHub/GitLab/Bitbucket
4. Selecciona tu repositorio `barberia`
5. Netlify detectará automáticamente la configuración desde `netlify.toml`

#### Opción B: Desde la CLI de Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticarse
netlify login

# Inicializar sitio
netlify init

# Desplegar
npm run deploy
```

### 4. Configurar Variables de Entorno en Netlify

1. Ve a tu sitio en el dashboard de Netlify
2. Ve a **Site settings** > **Environment variables**
3. Añade las siguientes variables:

```
FIREBASE_API_KEY=AIzaSyDW7XqxbEv_hCgqGimg8bF93nvbxOjSamg
FIREBASE_AUTH_DOMAIN=barberia-citas-b0750.firebaseapp.com
FIREBASE_PROJECT_ID=barberia-citas-b0750
FIREBASE_STORAGE_BUCKET=barberia-citas-b0750.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=584877576845
FIREBASE_APP_ID=1:584877576845:web:b750e7ef331b3c0a41c8c4
FIREBASE_MEASUREMENT_ID=G-1BDBYHMT1S
```

### 5. Verificar el despliegue

1. Netlify construirá automáticamente tu sitio
2. Una vez completado, tu sitio estará disponible en la URL proporcionada
3. Prueba el formulario de citas para verificar que Firebase funciona correctamente

### 6. Configurar dominio personalizado (opcional)

1. En tu dashboard de Netlify, ve a **Site settings** > **Domain management**
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar tu dominio

## Comandos útiles

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Previsualizar build local
npm run preview

# Desplegar a Netlify (con CLI)
npm run deploy

# Validar configuración
node scripts/validate-config.js
```

## Solución de problemas comunes

### Error: "Firebase not configured"
- Verifica que todas las variables de entorno estén configuradas en Netlify
- Asegúrate de que las variables no tengan espacios extra

### Error: "Build failed"
- Revisa los logs de build en Netlify
- Verifica que todas las dependencias estén en `package.json`

### Error: "API endpoints not working"
- Verifica que `netlify.toml` esté configurado correctamente
- Asegúrate de que las rutas API estén en `src/pages/api/`

## Recursos adicionales

- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de Netlify](https://docs.netlify.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Astro Netlify Adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/)

