import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.js'
import { GlobalStyle } from './styles/global.js'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Theme>
					<App />
				</Theme>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
