
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-4xl bg-green-600'>Vite + React</h1>

      <div className="mockup-phone">
      <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>

      <div className="radial-progress bg-primary text-primary-content border-primary border-4"
        style={{ "--value": 100 }}
        role="progressbar">
        100%
      </div>


    </>
  )
}

export default App
