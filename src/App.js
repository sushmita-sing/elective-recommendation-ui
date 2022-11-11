import LinearStepper from "./LinearStepper";
import { Container, Paper, Box } from "@material-ui/core";
import Navbar from "./Navbar";

function App() {
  return (
    <>
        <Navbar/>
        <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
