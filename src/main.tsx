import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { contactStore } from './store'

ReactDOM.createRoot(document.getElementById('react-root')!).render(
	<Provider store={contactStore}>
		<App />
	</Provider>,
)
