import type { Route } from "./+types/home";
import { Home } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lucie Bedouret" },
    { name: "description", content: "Full Stack Dev" },
  ];
}

export default function App() {
  return <Home />;
}
