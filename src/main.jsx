import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.js'
import { GlobalStyle } from './styles/global.js'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './context/UserContext.jsx'

import '@radix-ui/themes/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { GrupoProvider } from './context/GrupoContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserProvider>
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyle />
					<Theme>
						<GrupoProvider>
							<App />
						</GrupoProvider>
						<ToastContainer />
					</Theme>
				</ThemeProvider>
			</BrowserRouter>
		</UserProvider>
	</StrictMode>
)
