import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollManager } from './components/ScrollManager'

const HomePage = lazy(() => import('./pages/HomePage'))
const AigcPage = lazy(() => import('./pages/projects/AigcPage'))
const PerfumePage = lazy(() => import('./pages/projects/PerfumePage'))
const PalsPage = lazy(() => import('./pages/projects/PalsPage'))
const IdeaPage = lazy(() => import('./pages/projects/IdeaPage'))
const OdorPage = lazy(() => import('./pages/projects/OdorPage'))
const TextualPage = lazy(() => import('./pages/projects/TextualPage'))
const ForestPage = lazy(() => import('./pages/projects/ForestPage'))
const StitchPage = lazy(() => import('./pages/projects/StitchPage'))
const ArtPage = lazy(() => import('./pages/projects/ArtPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<div className="route-loading" role="status">Loading portfolio…</div>}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AigcPage />} path="/projects/aigc-creative-practice" />
          <Route element={<PerfumePage />} path="/projects/perfume-lab" />
          <Route element={<PalsPage />} path="/projects/pals-go" />
          <Route element={<IdeaPage />} path="/projects/idea-tree" />
          <Route element={<OdorPage />} path="/projects/odor-land" />
          <Route element={<TextualPage />} path="/projects/textual-scent-lab" />
          <Route element={<ForestPage />} path="/projects/forest-wardrobe" />
          <Route element={<StitchPage />} path="/projects/stitch-revival" />
          <Route element={<ArtPage />} path="/projects/art-exhibitions" />
          <Route element={<NotFoundPage />} path="/404" />
          <Route element={<Navigate replace to="/404" />} path="*" />
        </Routes>
      </Suspense>
    </>
  )
}
