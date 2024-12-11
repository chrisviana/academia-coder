import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.js'
import { GlobalStyle } from './styles/global.js'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import '@radix-ui/themes/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from './context/user.context'
import { GrupoProvaider } from './context/GrupoContex.jsx'
import { WorkoutProvider } from './context/TreinoContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserProvider>
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyle />
					<Theme>
						<WorkoutProvider>
							<GrupoProvaider>
								<App />
							</GrupoProvaider>
						</WorkoutProvider>

						<ToastContainer />
					</Theme>
				</ThemeProvider>
			</BrowserRouter>
		</UserProvider>
	</StrictMode>
)
