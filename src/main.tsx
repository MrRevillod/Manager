
import ReactDOM from "react-dom/client"
import MainLayout from "./layouts/main"

import "./main.css"

import { App } from "./app"
import { Modals } from "./components/Modals"
import { TaskProvider } from "./context/TaskContext"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(

	<TaskProvider>

		<MainLayout>

			<App />
			<Modals />

		</MainLayout>

	</TaskProvider>
)

