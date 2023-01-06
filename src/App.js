import  ResponsiveAppBar  from './Components/Appbar';
import AttendanceSystem from './Components/AttendanceSystem'
import Container from '@mui/material/Container'

function App() {
  return (
    <>

    <ResponsiveAppBar/>

    <Container maxWidth="sm">

  <AttendanceSystem/>
 

</Container>


    </>
  );
}

export default App;
