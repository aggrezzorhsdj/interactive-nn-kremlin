import { createRoot } from 'react-dom/client';
import {App} from "./App";
import "./App.scss";

// создание точки подключения react
const root = createRoot(
	document.getElementById('root')
)

// отображение корневого компонента
root.render(
	<App/>
);
