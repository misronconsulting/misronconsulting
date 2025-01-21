import { ChakraProvider, Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import theme from "./theme"
import Partners from "./components/Partners"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header />
          <Box flexGrow={1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partners" element={<Partners />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App

