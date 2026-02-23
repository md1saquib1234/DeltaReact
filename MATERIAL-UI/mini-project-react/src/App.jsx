
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

function App() {
  let handleClick = () => {
    console.log("button was clicked!");
  };

  return (
    <>
    <h1>Material UI Demo</h1>
    <Button
    variant="contained"
    onClick={handleClick}
    startIcon={<DeleteIcon />}
    >
      Delete
      </Button>
    <Alert severity="error">This is an error alert - check it out!</Alert>
    </>
  )
}

export default App
