import './index.css';
import './theme/mainTheme.css';
import App from './App';
import Work from './Work';
import ReactDOM from 'react-dom/client';

ReactDOM
	.createRoot(document.getElementById('root') as HTMLElement)
	// .render(<App />)
	.render(<Work />)