import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className=" nav-banner job-detail  text-center">
        <h2>Blog F&Q :</h2>
      </div>

      <div className="my-container chart">
        <Accordion defaultActiveKey="0" className="my-container mt-5 mb-5 pb-5">
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              1. When should you use context api ?
            </Accordion.Header>
            <Accordion.Body>
              The Context API helps share data between components which you
              can't easily share with props, for example, complex data objects.
              React Context API provides a way to send data like userid, auth,
              and theme data through the component tree without sending any
              props manually at every level.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>2. What is react custom hook ?</Accordion.Header>
            <Accordion.Body>
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>3. What is useref in React.</Accordion.Header>
            <Accordion.Body>
              useRef() only returns one item. It returns an Object called
              current . When we initialize useRef we set the initial value:
              useRef(0) . It's like doing this: const count = current: 0 . We
              can access the count by using count.current .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>4. What is usememo in react ?</Accordion.Header>
            <Accordion.Body>
              useMemo is a React Hook that lets you cache the result of a
              calculation between re-renders. const cachedValue =
              useMemo(calculateValue, dependencies) Reference.
              useMemo(calculateValue, dependencies)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
