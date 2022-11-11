import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CoffeeContext } from './contexts/CoffeeContexts'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  const { paymentMethod, itemsOnShoppingCart } = useContext(CoffeeContext)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            itemsOnShoppingCart.length > 0 ? <Checkout /> : <Navigate to="/" />
          }
        />
        <Route
          path="/success"
          element={paymentMethod ? <Success /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  )
}
