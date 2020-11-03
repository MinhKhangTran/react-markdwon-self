import React from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [markdown, setMarkdown] = React.useState("# markdown preview");
  return (
    <section className="md:flex w-screen">
      <textarea
        className="w-full md:w-1/2 shadow-xl"
        name="markdown"
        rows="10"
        cols="50"
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      />
      <article>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
  );
}
