import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };
  
  return (
    <main className="App-notfound">
      <h2 className="App-card__text">404<br/>page not found</h2>
      <p onClick={handleGoBack} className='App-link'>&larr; go back</p>
    </main>
  )
}