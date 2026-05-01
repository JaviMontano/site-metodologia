# Bootstrap super_admin — primer usuario con acceso al CMS

Esta guía es **una sola vez**. Después de hacerlo, los siguientes admins se asignan desde el panel de Users en `/admin/`.

## Prerrequisitos

- Cuenta Google que será super_admin (debe haber iniciado sesión al menos una vez en `metodologia.info/admin/` para que exista en Firebase Auth).
- Acceso al proyecto Firebase `metodologia-pristino-10x` con rol Owner o Editor.
- Node.js 22+ y `npm install --legacy-peer-deps` ya ejecutado en el repo.

## Paso 1 — Descargar el service account JSON

1. Abre [Firebase Console](https://console.firebase.google.com/project/metodologia-pristino-10x/settings/serviceaccounts/adminsdk).
2. Click **Generate new private key** → confirma → descarga el JSON.
3. Mueve el archivo a una carpeta fuera del repo. Recomendado:

   ```bash
   mkdir -p ~/secrets
   mv ~/Downloads/metodologia-pristino-10x-firebase-adminsdk-*.json ~/secrets/metodologia-sa.json
   chmod 600 ~/secrets/metodologia-sa.json
   ```

4. **Nunca** commitees este archivo. `.gitignore` ya bloquea `serviceAccountKey.json`, `*service-account*.json` y `secrets/`, pero verifica antes de hacer `git add`.

## Paso 2 — Crear el primer usuario en Firebase Auth

Antes de poder asignarle un rol, el usuario debe existir. Hay dos caminos:

**A) Login normal (recomendado)**: el usuario abre `metodologia.info/admin/`, hace click en "Sign in with Google" y se autentica. Verá la pantalla "Access Denied" porque aún no tiene rol — eso es esperado. Esto crea su entrada en Firebase Auth.

**B) Crear manualmente**: en [Firebase Console → Authentication → Users → Add user](https://console.firebase.google.com/project/metodologia-pristino-10x/authentication/users).

## Paso 3 — Asignar el rol super_admin

Desde el repo, en tu terminal:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=~/secrets/metodologia-sa.json
node scripts/set-user-role.js --email TU_EMAIL@dominio.com --role super_admin
```

Salida esperada:

```
Found user: TU_EMAIL@dominio.com (uid: ...)
Setting role: super_admin
✓ Custom claim set
✓ users/{uid} updated
✓ Audit log written
```

## Paso 4 — Refrescar el token y verificar

1. Si ya estabas en `metodologia.info/admin/`, **cierra sesión y vuelve a entrar** (Firebase ID tokens cachean los claims hasta una hora; cerrar sesión fuerza el refresh).
2. Tras login deberías ver el panel admin completo con badge `super admin`.

## Asignar más usuarios desde el CMS

Una vez que el primer super_admin tiene acceso, puede asignar roles desde la pestaña **Users** del panel — sin necesidad de service account JSON. La función `setRole` en `functions/index.js` valida que el caller sea super_admin antes de mutar claims.

## Roles disponibles

| Rol | Permisos |
|-----|----------|
| `super_admin` | Total: gestiona roles, usuarios, configuración, todo el contenido |
| `admin` | Gestiona contenido + audit log (lectura), no toca roles |
| `editor` | Edita programs, prices, translations, pages |
| `viewer` | Solo lectura del CMS |

## Troubleshooting

- **`Error: Could not load the default credentials`** → no exportaste `GOOGLE_APPLICATION_CREDENTIALS` o la ruta es incorrecta.
- **`Cannot find user`** → el usuario aún no se ha logueado nunca. Pídele que abra `/admin/` y haga sign-in primero.
- **Sigues viendo "Access Denied" tras asignar el rol** → cierra sesión y vuelve a entrar; el token cachea el claim hasta refresh.
- **Quieres cambiar de super_admin** → desde el panel Users → cambia tu rol a `admin` solo después de promover a otro super_admin.

## Seguridad

- El service account JSON da control total al proyecto. Trátalo como una contraseña.
- Si sospechas que se filtró: [Firebase Console → Service accounts → Manage all service accounts → Delete key](https://console.firebase.google.com/project/metodologia-pristino-10x/settings/serviceaccounts/adminsdk) y genera uno nuevo.
- Considera rotarlo cada 90 días.
