

Made by: Chhavi Sarswat (2022BITE067), NIT Srinagar

# TalentFlow - Mini Hiring Platform

A modern, production-ready React application for HR teams to manage the complete hiring workflow. Built with React, TypeScript, Vite, and featuring a fully functional mock backend with local persistence.

## Quick Summary

- Modern LinkedIn-inspired UI with Indian localization (names, cities, salaries)
- MSW + Dexie data layer with latency and 5–10% error simulation
- Optimistic updates with rollback (Jobs reorder, Candidate stage)
- Virtualized Candidates board (1,000+ items) with Load More
- Full Assessment Builder: 6 question types, conditional logic, live preview
- Landing page expanded with Companies, Stats, Testimonials, CTA
- See upstream reference for base: https://github.com/Ramanchoudhary07/TalentFlow--mini-hiring-platform

Documentation moved for a cleaner root:
- Full implementation details: `docs/IMPLEMENTATION_SUMMARY.md`

## 🧾 Attribution & Change Log (vs Upstream)

All work in this project was done by **Chhavi Sarswat (2022BITE067), NIT Srinagar**.

Baseline for comparison: upstream repository
`TalentFlow--mini-hiring-platform` — [GitHub link](https://github.com/Ramanchoudhary07/TalentFlow--mini-hiring-platform)

### Files created
- `IMPLEMENTATION_SUMMARY.md`

### Files updated/changed (from upstream)
- `README.md` (expanded with technical requirements, architecture, quick start, and this attribution/change log)
- `src/index.css` (LinkedIn-inspired design tokens, gradients, button effects, card styles, animations)
- `src/components/common/JobCard.tsx` (LinkedIn-style card, Indian context, hover/CTA enhancements)
- `src/components/ui/Button.tsx` (variants tuned to work with custom LinkedIn button classes)
- `src/components/layout/Header.tsx` (modernized nav, blur, LinkedIn buttons)
- `src/components/layout/Layout.tsx` (light gradient background)
- `src/components/layout/HrLayout.tsx` (light gradient background)
- `src/components/sections/Hero.tsx` (new gradient hero, pattern, headline gradients, CTA buttons)
- `src/components/sections/Features.tsx` (card hover effects, gradient icons, copy tweaks)
- `src/components/sections/JobExplore.tsx` (UX polish and browse all flow)
- `src/components/NotesWithMentions.tsx` (Indian names/emails in mentions)
- `src/pages/Landing.tsx` (added Companies, Stats, Testimonials, CTA sections; richer content)
- `src/pages/HrDashboard.tsx` (StatCard hover/shadow/progress bar enhancements)
- `src/pages/Candidates.tsx` (virtualization for 1,000+ candidates, load more, improved DnD/rollback)
- `src/pages/Jobs.tsx` (DnD reordering with optimistic updates and rollback; toasts)
- `src/components/Jobs/ApplicationModal.tsx` (stricter validation and error handling)
- `src/components/Jobs/JobModal.tsx` (validation improvements, required fields, dynamic toasts)
- `src/services/seed/candidateSeed.ts` (Indian names, phones, education; localized data)
- `src/services/seed/jobsSeed.ts` (Indian cities and ₹ LPA salary format)
- `src/services/db/candidatesDb.ts` (force reseed for fresh localized data)
- `src/services/db/jobsDb.ts` (force reseed for fresh localized data)
- `src/pages/AssessmentBuilder.tsx` (toast-based save error handling)
- `src/services/mocks/*` (latency + 5–10% error simulation across handlers)

Notes:
- The MSW handlers and Dexie operations together provide realistic latency and error behavior with optimistic UI patterns and rollback.
- UI follows a LinkedIn-inspired aesthetic with Indian localization for names, locations, and salary formats.

## 🚀 Live Demo

**Deployed App**: [Your Vercel URL]
**GitHub Repository**: [Your GitHub URL]

## 📋 Project Overview

TalentFlow is a complete hiring platform (frontend-only) that demonstrates:
- **Professional Architecture**: Production-ready code structure and patterns
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Full Functionality**: All CRUD operations with optimistic updates and error handling
- **Advanced Features**: Drag-and-drop, virtualization, conditional logic, and more
- **Real-time Feedback**: Toast notifications and loading states throughout
- **Local Persistence**: IndexedDB for data that persists across sessions

## ✨ Features

### 1. Jobs Board

- ✅ **Server-like Pagination & Filtering** - Title, status, and tags search
- ✅ **Create/Edit Jobs** - Modal with comprehensive validation (title required, unique slug)
- ✅ **Archive/Unarchive** - Toggle job status with visual feedback
- ✅ **Drag-and-Drop Reordering** - Visual feedback with optimistic updates and rollback on failure
- ✅ **Deep Linking** - Direct access via `/jobs/:jobId`
- ✅ **Delete with Confirmation** - Safe deletion with modal confirmation

### 2. Candidates Management

- ✅ **Virtualized Kanban Board** - Handles 1,000+ candidates efficiently
- ✅ **Client-side Search** - Filter by name/email instantly
- ✅ **Server-like Filter** - Filter by current stage
- ✅ **Drag-and-Drop Between Stages** - Move candidates with optimistic updates
- ✅ **Candidate Profile** - Timeline of status changes at `/candidates/:id`
- ✅ **@Mentions in Notes** - Rich text notes with team member suggestions
- ✅ **Load More** - Only renders 20 candidates per stage initially for performance

### 3. Assessments

- ✅ **Assessment Builder** - Create comprehensive assessments per job
- ✅ **Multiple Question Types**:
  - Single Choice
  - Multiple Choice
  - Short Text
  - Long Text
  - Numeric (with range validation)
  - File Upload (UI stub)
- ✅ **Live Preview Pane** - Real-time preview as you build
- ✅ **Validation Rules** - Min/max length, numeric ranges
- ✅ **Conditional Logic** - Show questions based on previous answers (e.g., "Show Q3 only if Q1 === 'Yes'")
- ✅ **Local Persistence** - Builder state and responses saved automatically
- ✅ **Form Runtime** - Validates all rules before submission

### 4. Dashboard Analytics

- ✅ **Real-time Statistics** - Job, candidate, and assessment metrics
- ✅ **Visual Cards** - Beautiful stat cards with icons and colors
- ✅ **Quick Navigation** - Jump to key sections from dashboard

### Question Types

- Single Choice
- Multiple Choice
- Short Text
- Long Text
- Numeric Input
- File Upload

## 🎯 Technical Requirements Implemented

### Data & API (No Real Server)

- ✅ **MSW (Mock Service Worker)** - Simulates REST API with realistic endpoints
- ✅ **IndexedDB via Dexie** - All persistence is local; app restores state on refresh
- ✅ **Seed Data**:
  - 25 jobs (mixed active/archived)
  - 1,000 candidates randomly assigned to jobs and stages
  - 5 assessments with 10+ questions each
- ✅ **Artificial Latency** - 200-1200ms random delay on all API calls
- ✅ **Error Simulation** - 5-10% error rate on write endpoints
- ✅ **API Endpoints**:
  - `GET /jobs?search=&status=&page=&pageSize=&sort=`
  - `POST /jobs` → `{ id, title, slug, status, tags, order }`
  - `PATCH /jobs/:id`
  - `PATCH /jobs/:id/reorder` → `{ fromOrder, toOrder }`
  - `GET /candidates?search=&stage=&page=`
  - `POST /candidates` → `{ id, name, email, stage, ... }`
  - `PATCH /candidates/:id` (stage transitions)
  - `GET /candidates/:id/timeline`
  - `GET /assessments/:jobId`
  - `PUT /assessments/:jobId`
  - `POST /assessments/:jobId/submit` (stores locally)

### Modern Frontend Patterns

- ✅ **Optimistic UI Updates** - Jobs reorder and candidate stage changes
- ✅ **Rollback on Failure** - Reverts changes if server returns error
- ✅ **Toast Notifications** - Success/error feedback on all actions
- ✅ **Loading States** - Skeleton loaders and spinners
- ✅ **Form Validation** - Comprehensive client-side validation with error messages
- ✅ **Responsive Design** - Mobile-first with Tailwind CSS
- ✅ **Smooth Animations** - Transitions, hover effects, and drag feedback

## Tech Stack

### Frontend

- **React 19.1.1** - UI library with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.2** - Fast build tool and dev server
- **React Router DOM 7.9.0** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework

### State Management & Data

- **Dexie 4.2.0** - IndexedDB wrapper for local storage
- **MSW 2.11.2** - Mock Service Worker for API mocking
- **Axios 1.12.1** - HTTP client for API requests

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications
- **Class Variance Authority** - Component variant management

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Faker.js** - Fake data generation for development

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (JobCard, JobSkeleton)
│   ├── HrDashboard/     # HR-specific components
│   ├── Jobs/            # Job-related components
│   ├── layout/          # Layout components (Header, Footer, HrLayout)
│   ├── sections/        # Landing page sections
│   └── ui/              # Base UI components (Button, Card, Logo)
├── pages/               # Page components
│   ├── AssessmentBuilder.tsx
│   ├── AssessmentPreview.tsx
│   ├── AssessmentResults.tsx
│   ├── Assessments.tsx
│   ├── CandidateJobs.tsx
│   ├── CandidateProfile.tsx
│   ├── Candidates.tsx
│   ├── HrDashboard.tsx
│   ├── JobDetails.tsx
│   ├── Jobs.tsx
│   └── Landing.tsx
├── services/            # Business logic and data layer
│   ├── db/              # Database layer (Dexie)
│   ├── mocks/           # Mock API handlers (MSW)
│   └── seed/            # Seed data generation
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── main.tsx            # Application entry point
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd talentflow
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Frontend Architecture

- **Component-Based**: Modular React components with clear separation of concerns
- **Type-Safe**: Full TypeScript coverage with strict type checking
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessible**: Built with accessibility in mind using Radix UI primitives

### Data Layer

- **Mock Backend**: MSW provides complete API simulation
- **Local Storage**: Dexie manages IndexedDB for persistent data
- **Seed Data**: Faker.js generates realistic test data
- **Type Safety**: All data operations are fully typed

### Routing

- **Client-Side Routing**: React Router DOM handles navigation
- **Nested Routes**: Dashboard with nested assessment routes
- **Route Protection**: Automatic redirects for HR login flow

## 🏗️ Architecture & Technical Decisions

### State Management
- **Local State (useState)** - Component-level state for forms and UI
- **IndexedDB (Dexie)** - Persistent storage layer, treated as "database"
- **MSW as Network Layer** - Intercepts HTTP calls, adds latency/errors, writes to Dexie
- **No Redux/Zustand needed** - MSW + Dexie provides sufficient state management

### Performance Optimizations
- **Virtualization** - Only renders visible candidates (20 per stage initially)
- **Pagination** - Jobs board with server-side style pagination
- **Debouncing** - Search inputs debounced to reduce unnecessary re-renders
- **Memoization** - Expensive computations cached where appropriate
- **Code Splitting** - Route-based lazy loading (potential future enhancement)

### Error Handling & UX
- **Try-Catch Everywhere** - All async operations wrapped with proper error handling
- **User-Friendly Messages** - Errors translated to actionable messages
- **Optimistic Updates** - UI updates immediately, rolls back on error
- **Form Validation** - Real-time validation with field-level error messages
- **Loading States** - Skeleton loaders prevent layout shift
- **Toast Notifications** - react-hot-toast for non-intrusive feedback

### TypeScript Usage
- **Strict Mode Enabled** - Full type safety throughout
- **Interface-First Design** - Clear contracts between components
- **Type Guards** - Runtime type checking where needed
- **No `any` Types** - Properly typed throughout (except error handling)

### Technical Stack Justification

**React 19.1.1** → Latest features, improved performance, better developer experience

**TypeScript 5.8.3** → Type safety catches bugs early, better IDE support

**Vite 7.1.2** → 10-100x faster than CRA, instant HMR, modern build output

**Dexie 4.2.0** → Better than localStorage for large datasets, supports queries

**MSW 2.11.2** → Realistic API mocking, same code works everywhere, proper network inspection

**Tailwind CSS 4.1.13** → Rapid development, consistent design system, excellent responsive utilities

**React Router DOM 7.9.0** → Best-in-class routing, nested layouts, type-safe routes

## 🐛 Known Issues & Solutions

### 1. SPA Routing on Deployment
**Issue**: 404 errors when refreshing pages on Vercel/Netlify
**Solution**: `vercel.json` rewrites all routes to `index.html` for SPA routing

### 2. MSW in Production
**Issue**: MSW should only run in development
**Solution**: Environment check ensures MSW only starts when `NODE_ENV === 'development'`

### 3. Large Dataset Performance
**Issue**: Rendering 1,000 candidates causes lag
**Solution**: Virtualization with "Load More" button renders only 20 candidates per stage initially

### 4. Form Validation UX
**Issue**: Validation errors not clear to users
**Solution**: Field-level error messages, red borders, and comprehensive validation rules

### 5. Drag-and-Drop Visual Feedback
**Issue**: Users unsure what happens during drag
**Solution**: Opacity changes, border highlights, and toast notifications on success/failure

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite config
4. `vercel.json` handles SPA routing
5. Deploy automatically on every push to main

### Environment Variables
No environment variables needed! Everything works client-side with MSW and IndexedDB.

### Production Build
```bash
npm run build    # Creates dist/ folder
npm run preview  # Preview production build locally
```

### Other Platforms
- **Netlify**: Add `_redirects` file with `/* /index.html 200`
- **GitHub Pages**: Use `gh-pages` package, set base path in `vite.config.ts`
- **AWS S3**: Configure error document to `index.html` with 200 status

## 🎓 Key Learnings & Technical Highlights

### 1. Optimistic Updates Pattern
Implemented true optimistic updates with rollback:
- Jobs reordering updates UI immediately
- If server fails, reverts to previous state
- User sees instant feedback with safety net

### 2. Virtualization Strategy
Custom virtualization for kanban board:
- Loads 20 candidates per stage initially
- "Load More" button for additional candidates
- Maintains smooth drag-and-drop across all items

### 3. Conditional Logic Implementation
Assessment questions can depend on previous answers:
- Parent question ID + expected value
- Only renders child questions when condition met
- Supports both single values and arrays

### 4. MSW Integration
Realistic API simulation:
- Intercepts actual fetch/axios calls
- Adds random latency (200-1200ms)
- Randomly fails 5-10% of write operations
- Writes through to IndexedDB for persistence

### 5. Form Validation Architecture
Multi-level validation:
- Field-level validation on blur
- Form-level validation on submit
- Server-side style validation in MSW handlers
- User-friendly error messages throughout

## 🚀 Future Enhancements

### Planned Features
- [ ] Real-time collaboration on assessments
- [ ] Video interview scheduling
- [ ] Email templates and automation
- [ ] Advanced analytics dashboard
- [ ] Bulk candidate operations
- [ ] Assessment templates library
- [ ] Calendar integration

### Technical Improvements
- [ ] Unit tests (Vitest + React Testing Library)
- [ ] E2E tests (Playwright)
- [ ] Error boundaries for graceful failures
- [ ] Performance monitoring (Web Vitals)
- [ ] Internationalization (i18n)
- [ ] Dark mode theme
- [ ] PWA features (offline support)
- [ ] A11y improvements (WCAG 2.1 AA)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) - The UI library
- [Vite](https://vitejs.dev/) - The build tool
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [MSW](https://mswjs.io/) - The API mocking library
- [Dexie](https://dexie.org/) - The IndexedDB wrapper
- [Radix UI](https://www.radix-ui.com/) - The component primitives

---

**TalentFlow** - Streamlining talent management for modern HR teams.
