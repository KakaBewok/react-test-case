// import ProjectsPage from './projects/ProjectsPage'
// import ProjectDetailPage from './projects/ProjectDetailPage'
import { Routes, Route } from 'react-router-dom'


import Navbar from './view/components/Navbar'
import HomePage from './view/pages/HomePage'
import BlogPageDetail from './view/pages/BlogPageDetail'
import Footer from './view/components/Footer'
import NotFound from './view/components/404'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/blog/:id' element={<BlogPageDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App