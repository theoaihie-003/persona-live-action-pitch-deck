import { createFileRoute } from "@tanstack/react-router";
import { PersonaSite } from "@/components/persona-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PERSONA — A Netflix Original Series Pitch" },
      {
        name: "description",
        content:
          "Every mask protects you… until it becomes you. A six-season cinematic adaptation of the Persona saga.",
      },
      { property: "og:title", content: "PERSONA — Netflix Original Series Pitch" },
      {
        property: "og:description",
        content: "Six seasons. Three masks. One question: who are you, really?",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PersonaSite />;
}
