// ts functions
import { add } from "shared";

// react hooks
import { useMediaQuery } from "shared";

// react components
import { Button } from "shared";

import { ClientOnlyComponent } from "shared";

// side-effect components
import { SideEffectComponent } from "shared";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Imported from shared</h1>
      <div className="space-y-4">
        <div>TS functions: {add(1, 2)}</div>
        <div>React hooks: {isMobile ? "Mobile" : "Desktop"}</div>
        <div>
          React components: <Button>Click me</Button>
        </div>
        <div>
          Client-only component dynamic: <ClientOnlyComponent />
        </div>
        <div>
          Side-effect component:
          <div className="p-4">
            <div className="aspect-square sm:aspect-video sm:max-w-4xl w-full h-full overflow-x-clip">
              <SideEffectComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
