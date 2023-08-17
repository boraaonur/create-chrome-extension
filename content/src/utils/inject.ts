import ReactDOM from "react-dom";
import { ReactElement } from "react";

/**
 * Generalized function to inject React components into the DOM.
 *
 * @param {string} targetSelector - The CSS selector of the target node.
 * @param {ReactNode} Component - The React component to be rendered.
 * @param {string} id - The ID for the new element.
 * @param {("before"|"after"|"append")} position - Where to insert the component in relation to the target.
 */
export function injectComponent({
  targetElement,
  position,
  id,
  component,
}: {
  targetElement: string;
  component: ReactElement;
  id: string;
  position: "before" | "after" | "append";
}) {
  const targetNode = document.querySelector(targetElement);
  const existingComponent = document.getElementById(id);

  if (targetNode && !existingComponent) {
    const container = document.createElement("div");
    container.id = id;

    switch (position) {
      case "before":
        targetNode.parentNode?.insertBefore(container, targetNode);
        break;
      case "after":
        targetNode.parentNode?.insertBefore(container, targetNode.nextSibling);
        break;
      case "append":
      default:
        targetNode.appendChild(container);
        break;
    }

    ReactDOM.render(component, container);
  }
}
