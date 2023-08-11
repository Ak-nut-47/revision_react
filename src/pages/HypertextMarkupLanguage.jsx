import {
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HypertextMarkupLanguage = () => {
  const navigate = useNavigate();
  return (
    <Flex direction={"column"}>
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
      <Flex direction={"column"}>
        <Button colorScheme="red">html</Button>
        <Text>
          {" "}
          Represents the root (top-level element) of an HTML document, so it is
          also referred to as the root element. All other elements must be
          descendants of this element.
        </Text>
        <hr />
        <Table variant="striped" colorScheme="teal">
          <TableCaption placement="top">Document Metadata</TableCaption>
          <Thead>
            <Tr>
              <Th>Element</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;base&gt;</chakra.code>
              </Td>
              <Td>
                Specifies the base URL to use for all relative URLs in a
                document. There can be only one such element in a document.
              </Td>
            </Tr>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;head&gt;</chakra.code>
              </Td>
              <Td>
                Contains machine-readable information (metadata) about the
                document, like its title, scripts, and style sheets.
              </Td>
            </Tr>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;link&gt;</chakra.code>
              </Td>
              <Td>
                Specifies relationships between the current document and an
                external resource. This element is most commonly used to link to
                CSS but is also used to establish site icons among other things.
              </Td>
            </Tr>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;meta&gt;</chakra.code>
              </Td>
              <Td>
                Represents metadata that cannot be represented by other HTML
                meta-related elements, like &lt;base&gt;, &lt;link&gt;,
                &lt;script&gt;, &lt;style&gt;, and &lt;title&gt;.
              </Td>
            </Tr>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;style&gt;</chakra.code>
              </Td>
              <Td>
                Contains style information for a document or part of a document.
                It contains CSS, which is applied to the contents of the
                document containing this element.
              </Td>
            </Tr>
            <Tr>
              <Td>
                <chakra.code color="blue">&lt;title&gt;</chakra.code>
              </Td>
              <Td>
                Defines the document's title that is shown in a browser's title
                bar or a page's tab. It only contains text; tags within the
                element are ignored.
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <hr />
        {
          <Table
            variant="striped"
            colorScheme="purple"
            borderWidth="1px"
            borderRadius="md"
            my={4}
          >
            <TableCaption placement="top">
              Content Sectioning Elements Description
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Element</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;address&gt;</chakra.code>
                </Td>
                <Td>
                  Indicates that the enclosed HTML provides contact information
                  for a person or people, or for an organization.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;article&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a self-contained composition in a document, page,
                  application, or site, which is intended to be independently
                  distributable or reusable (e.g., in syndication).
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;aside&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a portion of a document whose content is only
                  indirectly related to the document's main content. Asides are
                  frequently presented as sidebars or call-out boxes.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;footer&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a footer for its nearest ancestor sectioning
                  content or sectioning root element. A ```footer```` typically
                  contains information about the author of the section,
                  copyright data, or links to related documents.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;header&gt;</chakra.code>
                </Td>
                <Td>
                  Represents introductory content, typically a group of
                  introductory or navigational aids. It may contain some heading
                  elements but also a logo, a search form, an author name, and
                  other elements.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">
                    &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,
                    &lt;h6&gt;
                  </chakra.code>
                </Td>
                <Td>
                  Represent six levels of section headings. &lt;h1&gt; is the
                  highest section level and &lt;h6&gt; is the lowest.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;hgroup&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a heading grouped with any secondary content, such
                  as subheadings, an alternative title, or a tagline.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;main&gt;</chakra.code>
                </Td>
                <Td>
                  Represents the dominant content of the body of a document. The
                  main content area consists of content that is directly related
                  to or expands upon the central topic of a document, or the
                  central functionality of an application.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;nav&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a section of a page whose purpose is to provide
                  navigation links, either within the current document or to
                  other documents. Common examples of navigation sections are
                  menus, tables of contents, and indexes.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;section&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a generic standalone section of a document, which
                  doesn't have a more specific semantic element to represent it.
                  Sections should always have a heading, with very few
                  exceptions.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <chakra.code color="blue">&lt;search&gt;</chakra.code>
                </Td>
                <Td>
                  Represents a part that contains a set of form controls or
                  other content related to performing a search or filtering
                  operation.
                </Td>
              </Tr>
            </Tbody>
          </Table>
        }
      </Flex>
    </Flex>
  );
};

export default HypertextMarkupLanguage;
