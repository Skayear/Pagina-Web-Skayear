# Personal Website - Pablo Rodriguez

Portfolio personal con estética retro/terminal, construido con React + TypeScript.

## Descripción

Este proyecto fue migrado desde una web estática a una SPA moderna con Vite. Mantiene el estilo terminal (CRT, scanlines, glow, tipografía mono) y organiza el contenido en secciones navegables.

## Stack actual

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- React Router DOM
- Vitest + Testing Library
- ESLint

## Secciones del sitio

- Hero (presentación principal)
- About Me
- Skills
- Experiencia
- Proyectos
- Contacto

## Skills destacadas

- Cloud: AWS, Azure, Google Cloud
- CI/CD: GitHub Actions, GitLab CI, Azure DevOps
- Automation: Docker, Docker Compose, Kubernetes, Helm, Terraform, Terraspace
- Observability: Prometheus, Grafana, OpenTelemetry, Splunk
- Scripting: Bash, Python
- AI Tools: GitHub Copilot, Claude, Codex, OpenAI, Gemini, Amazon Q

## Scripts disponibles

```bash
# desarrollo local (http://localhost:8080)
npm run dev

# build de producción
npm run build

# build en modo development
npm run build:dev

# previsualizar build
npm run preview

# lint
npm run lint

# tests
npm run test
npm run test:watch
```

## Instalación

```bash
npm install
npm run dev
```

## Cómo levantar la web

### Opción 1: Desarrollo local

```bash
# 1) Instalar dependencias
npm install

# 2) Levantar servidor de desarrollo
npm run dev
```

Luego abrí: `http://localhost:8080`

### Opción 2: Producción local (build + preview)

```bash
# 1) Generar build
npm run build

# 2) Servir el build generado
npm run preview
```

Luego abrí la URL que te muestre la consola de Vite Preview.

### Opción 3: Docker

```bash
# 1) Construir imagen
docker build -t pagina-web-personal -f dockerfile .

# 2) Ejecutar contenedor
docker run --rm -p 8082:8082 pagina-web-personal
```

Luego abrí: `http://localhost:8082`

## Estructura del proyecto

```text
Pagina_Web_Personal/
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ui/
│   └── test/
├── public/
├── vite.config.ts
├── tailwind.config.ts
└── vitest.config.ts
```

## Dónde editar contenido

- Textos principales y links: `src/components/*.tsx`
- Tema, colores y efectos visuales: `src/index.css`, `tailwind.config.ts`
- SEO/meta tags base: `index.html`

## Notas

- El servidor de desarrollo corre en el puerto `8080` (configurado en `vite.config.ts`).
- Hay placeholders en `index.html` (`<title>`, metadatos Open Graph/Twitter) que conviene personalizar para producción.

## Autor

**Pablo Rodriguez**  
SRE/DevOps Engineer - Montevideo, Uruguay
