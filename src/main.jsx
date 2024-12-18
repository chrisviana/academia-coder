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
import { GrupoProvider } from './context/GrupoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ExercicioProvaider } from './context/ExericicioContext.jsx'
import { AlunoProvider } from './context/AlunoContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyle />
					<Theme>
						<AlunoProvider>
							<ExercicioProvaider>
								<GrupoProvider>
									<App />
								</GrupoProvider>
							</ExercicioProvaider>
						</AlunoProvider>
						<ToastContainer />
					</Theme>
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
)
