import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      emoji={contact.emoji}
      details={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
