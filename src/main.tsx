
import "./main.css"

import ReactDOM from "react-dom/client"

import { App } from "./app"
import { Modals } from "./components/Modals"
import { MainLayout} from "./layouts/main"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(

	<MainLayout>

		<App />
		<Modals />

	</MainLayout>
)

