import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollManager } from './components/ScrollManager'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<div className="route-loading" role="status">Loading portfolio…</div>}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProjectPage />} path="/projects/:projectId" />
          <Route element={<NotFoundPage />} path="/404" />
          <Route element={<Navigate replace to="/404" />} path="*" />
        </Routes>
      </Suspense>
    </>
  )
}
