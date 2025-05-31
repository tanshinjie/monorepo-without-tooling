import { createRoot } from "react-dom/client";
import { SideEffectComponent } from "../src/side-effect-component";

const App = () => (
	<div style={{ padding: 32 }}>
		<h2>D3 Bar Chart (side-effect import demo)</h2>
		<SideEffectComponent />
	</div>
);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
