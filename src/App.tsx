import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'
import PokemonPage from './pages/PokemonPage'

import fetchPokemons from './pages/MainPage'

function App() {
	const router = createBrowserRouter([
		{
			path: '',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <MainPage /> },
				
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
