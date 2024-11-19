import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.js'
import { GlobalStyle } from './styles/global.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</StrictMode>
)
