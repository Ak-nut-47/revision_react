import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={8}>
          Homepage
        </Heading>
        <Button
          leftIcon={<Icon as={FaReact} />}
          colorScheme="blue"
          size="lg"
          m={2}
          onClick={() => navigate("/react")}
        >
          React
        </Button>
        <Link to={"/html"}>
          <Button
            leftIcon={<Icon as={FaHtml5} />}
            colorScheme="orange"
            size="lg"
            m={2}
          >
            HTML
          </Button>
        </Link>
        <Button
          leftIcon={<Icon as={FaCss3Alt} />}
          colorScheme="teal"
          size="lg"
          m={2}
          onClick={() => navigate("/css")}
        >
          CSS
        </Button>
        <Button
          leftIcon={<Icon as={FaJs} />}
          colorScheme="yellow"
          size="lg"
          m={2}
          onClick={() => navigate("/javascript")}
        >
          JavaScript
        </Button>
      </Box>
    </Flex>
  );
}

export default Homepage;
