import LinearStepper from "./LinearStepper";
import { Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
        <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
