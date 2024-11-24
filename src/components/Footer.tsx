export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="App-footer">
      <a 
        href="https://paulmoskow.github.io/portfolio" 
        className="App-copyright" 
        target="_blank"
        rel="noreferrer">
          &copy; {year} paulmoskow
        </a>
    </footer>
  )
}