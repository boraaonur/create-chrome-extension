import { useEffect, useRef } from "react";

const observerOptions = {
  childList: true,
  subtree: true,
};

function App() {
  const observer = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const mutationHandler: MutationCallback = (mutationsList, observer) => {
      for (let mutation of mutationsList) {
        // Inject your component here
        // injectComponent()
      }
    };

    // Creating and starting the observer
    observer.current = new MutationObserver(mutationHandler);
    observer.current.observe(document.body, observerOptions);

    return () => {
      if (observer.current) {
        console.log("Disconnecting the observer");
        observer.current.disconnect();
      }
    };
  }, []);

  return null;
}

export default App;
