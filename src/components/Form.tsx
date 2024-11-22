import React from "react";

interface FormProps {
  onSubmit: (data: { text: string }) => void
}

export default function Form({ onSubmit } : FormProps ) {
  const [text, setText] = React.useState('');

  const handleSubmit = (event: React.FormEvent ) => {
    event.preventDefault();
    if (text.trim()) {
      onSubmit({ text });
      setText('');
    }
  };

  return (    
    <main className="App-form">
      <p>Type and save your own fact about cats</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            maxLength={400}
            minLength={2}
            placeholder="text here"
          />          
        </label>
        <button
          type="submit"
          className="App-form__button"
        >
          save fact
        </button>
      </form>
    </main>     
  )
};