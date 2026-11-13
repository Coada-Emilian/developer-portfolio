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

import Layout from './components/layout/layout/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/developer" element={<DevPage />} />
        <Route path="/lead" element={<LeadPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/skills/technical" element={<SkillsPage />} />
        <Route path="/skills/personal" element={<SkillsPage />} />
        <Route path="/skills/complementary" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
