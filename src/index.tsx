import './index.css';
import './theme/mainTheme.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import Work from './Work';

ReactDOM
	.createRoot(document.getElementById('root') as HTMLElement)
	.render(<Work/>)