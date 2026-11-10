import { Route, Routes } from 'react-router-dom'
import {
  AboutPage,
  ContactPage,
  DevPage,
  ErrorPage,
  HomePage,
  LeadPage,
  ProjectPage,
  ProjectsPage,
  RecruiterPage,
  SkillsPage,
} from './pages'

import MainLayout from './components/layout/main-layout/MainLayout'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/developer" element={<DevPage />} />
        <Route path="/lead" element={<LeadPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
