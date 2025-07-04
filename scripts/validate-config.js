#!/usr/bin/env node

// Script para validar que la configuración de Firebase esté completa

const requiredEnvVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID',
  'FIREBASE_MEASUREMENT_ID'
];

const missing = [];

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    missing.push(envVar);
  }
});

if (missing.length > 0) {
  console.error('❌ Faltan las siguientes variables de entorno:');
  missing.forEach(envVar => {
    console.error(`   - ${envVar}`);
  });
  console.error('\nAsegúrate de configurar estas variables en tu archivo .env o en el dashboard de Netlify.');
  process.exit(1);
} else {
  console.log('✅ Todas las variables de entorno están configuradas correctamente.');
}

console.log('\n📋 Configuración actual:');
requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    console.log(`   ${envVar}: ${value.substring(0, 10)}...`);
  }
});

