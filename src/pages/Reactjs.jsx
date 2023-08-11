import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Reactjs.css";

function Reactjs() {
  const navigate = useNavigate();
  return (
    <Flex direction="column" gap={10} bgColor="#e6e6e6" p={4}>
      <Flex>
        <Button
          leftIcon={<FaHome />}
          onClick={() => navigate("/")}
          margin="auto"
          colorScheme="teal"
        >
          GO TO Homepage
        </Button>
      </Flex>
      <Text fontSize="xl" textDecoration="underline" margin="auto">
        React Questions
      </Text>
      <Flex
        direction="column"
        gap={4}
        bgColor="white"
        p={4}
        rounded="md"
        shadow="md"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton bgColor={"navajowhite"}>
                <Box as="span" flex="1" textAlign="left">
                  <b>
                    {" "}
                    1. What is React ? Why did you choose React over other
                    Libraries and Frameworks
                  </b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"teal.500"} color={"white"}>
              <>
                <div>
                  <div>
                    React is a popular JavaScript library for building user
                    interfaces. It was developed by Facebook and is widely used
                    in web development. React allows developers to create
                    reusable UI components and efficiently update and render
                    them in response to data changes.
                  </div>
                </div>

                <div>
                  <div>
                    There are several reasons why React has gained popularity
                    and why it might be preferred over other libraries and
                    frameworks:
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>
                      Component-Based Architecture
                    </span>
                    : React follows a component-based architecture, which means
                    you can break down your UI into reusable, self-contained
                    components. This modularity makes it easier to manage and
                    maintain complex UIs, as well as promote code reusability.
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>Virtual DOM</span>: React
                    uses a virtual DOM (Document Object Model), which is an
                    abstract representation of the actual HTML DOM. When data
                    changes, React efficiently updates only the necessary parts
                    of the DOM, reducing the number of expensive DOM operations.
                    This approach leads to better performance and a smoother
                    user experience.
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>
                      Unidirectional Data Flow
                    </span>
                    : React enforces a unidirectional data flow, which means
                    data flows in a single direction from parent components to
                    child components. This approach simplifies data management
                    and makes it easier to understand and debug the
                    application's state.
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>
                      Rich Ecosystem and Community
                    </span>
                    : React has a vast ecosystem of third-party libraries,
                    tools, and extensions that enhance its capabilities and
                    simplify development tasks. Additionally, React has a large
                    and active community of developers who contribute to its
                    growth, provide support, and share knowledge.
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>Flexibility</span>: React
                    is primarily a view library, which means it focuses on
                    handling the UI layer. It doesn't enforce strict conventions
                    or opinions about the rest of the application stack,
                    allowing developers to choose their preferred tools and
                    libraries for state management, routing, and other aspects
                    of their application.
                  </div>
                </div>

                <div>
                  <div>
                    <span style={{ fontWeight: 600 }}>Reusability</span>: React
                    components can be reused across different projects or even
                    within the same project, promoting code reusability and
                    reducing development time. This reusability is particularly
                    useful when building large-scale applications.
                  </div>
                </div>
              </>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <b>
                    2. What is the difference between State and Props in React
                  </b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"teal.500"}>
              <h2>
                In React, both state and props are used to manage and pass data
                between components, but they have different purposes and
                characteristics.
              </h2>
              <u>
                {" "}
                <b>State :</b>
              </u>
              <ul>
                <li>
                  State is a JavaScript object that represents the internal data
                  of a component.
                </li>
                <li>
                  It is managed within the component and can be changed using
                  the `setState()` method provided by React.
                </li>
                <li>
                  State is mutable and can be updated, causing the component to
                  re-render and reflect the updated data.
                </li>
                <li>
                  State is typically used for data that is specific to a
                  component and may change over time, such as form inputs, user
                  interactions, or dynamic data from APIs.
                </li>
                <li>
                  State is initialized and managed within the component itself
                  and is not directly accessible by other components.
                </li>
              </ul>
              <u>
                <b>Props (short for properties)</b>
              </u>
              <ul>
                <li>
                  Props are passed to a component from its parent component and
                  are read-only.
                </li>
                <li>
                  They are used to pass data from a parent component to its
                  child components.
                </li>
                <li>
                  Props are immutable, meaning they cannot be modified within
                  the child component.
                </li>
                <li>
                  Changes in props from the parent component trigger a re-render
                  of the child component to reflect the new data.
                </li>
                <li>
                  Props are useful for providing configuration or data to a
                  component and enabling the composition of components.
                </li>
                <li>
                  Components can define their expected props using prop types or
                  TypeScript interfaces to enforce type checking and
                  documentation.
                </li>
              </ul>
              <p>
                In summary, state is used to manage internal, mutable data
                within a component, while props are used to pass data from
                parent components to child components. State represents the
                current state of a component, whereas props represent the
                configuration and data passed to a component.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton bgColor={"navajowhite"}>
                <Box as="span" flex="1" textAlign="left">
                  <b>3. What is JSX?</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"teal.500"} color={"white"}>
              <p>
                JSX (JavaScript Syntax Extension and occasionally referred as
                JavaScript XML) is a JavaScript extension that allows creation
                of DOM trees using an XML-like syntax. Initially created by Meta
                for use with React, JSX has been adopted by multiple web
                frameworks. Being a syntactic sugar, JSX is generally transpiled
                into nested JavaScript function calls structurally similar to
                the original JSX.
              </p>
              <br />
              <p>
                JavaScript expressions (but not statements) can be used inside
                JSX with curly brackets {}
              </p>
              <u>Now is this a feature of React to be able to write JSX? </u>So
              the answer is No. There are tools like babel which converts our
              JSX code to simple React.createElement code.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <b>4. What are keys in React?</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"teal.500"} color={"white"}>
              <code>
                JSX elements directly inside a map() call always need keys!
              </code>
              <br />
              <p>
                {" "}
                key — a string or a number that uniquely identifies it among
                other items in that array:
              </p>
              <p>
                Keys tell React which array item each component corresponds to,
                so that it can match them up later. This becomes important if
                your array items can move (e.g. due to sorting), get inserted,
                or get deleted. A well-chosen key helps React infer what exactly
                has happened, and make the correct updates to the DOM tree.
              </p>
              <hr />
              <p>
                Rules of keys Keys must be unique among siblings. However, it’s
                okay to use the same keys for JSX nodes in different arrays.
                Keys must not change or that defeats their purpose! Don’t
                generate them while rendering. Why does React need keys? Imagine
                that files on your desktop didn’t have names. Instead, you’d
                refer to them by their order — the first file, the second file,
                and so on. You could get used to it, but once you delete a file,
                it would get confusing. The second file would become the first
                file, the third file would be the second file, and so on. File
                names in a folder and JSX keys in an array serve a similar
                purpose. They let us uniquely identify an item between its
                siblings. A well-chosen key provides more information than the
                position within the array. Even if the position changes due to
                reordering, the key lets React identify the item throughout its
                lifetime.
              </p>
              <article>
                <progress></progress>
                <b>
                  <u>
                    {" "}
                    <h2> Pitfall</h2>
                  </u>
                </b>
                You might be tempted to use an item’s index in the array as its
                key. In fact, that’s what React will use if you don’t specify a
                key at all. But the order in which you render items will change
                over time if an item is inserted, deleted, or if the array gets
                reordered. Index as a key often leads to subtle and confusing
                bugs. Similarly, do not generate keys on the fly, e.g. with key=
                {Math.random()}. This will cause keys to never match up between
                renders, leading to all your components and DOM being recreated
                every time. Not only is this slow, but it will also lose any
                user input inside the list items. Instead, use a stable ID based
                on the data. Note that your components won’t receive key as a
                prop. It’s only used as a hint by React itself. If your
                component needs an ID, you have to pass it as a separate prop
              </article>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default Reactjs;

{
  /* <AccordionItem>
            <h2>
              <AccordionButton bgColor={"navajowhite"}>
                <Box as="span" flex="1" textAlign="left">
                  <b>1.</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              bgColor={"teal.500"}
              color={"white"}
            ></AccordionPanel>
          </AccordionItem> */
}
