import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'
import { DefaultAdmin } from './layouts/DefaultAdmin'
import { Admin } from './pages/Admin'

export function Router() {
  return (
    <Routes>
      {/* O componente DefaultLayout será renderizado para os componentes Home e History. */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* O componente DefaultAdmin será renderizado para o componente Admin. */}
      <Route path="/admin" element={<DefaultAdmin />}>
        <Route path="products" element={<Admin />} />
      </Route>
    </Routes>
  )
}
