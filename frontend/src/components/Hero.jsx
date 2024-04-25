import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Rafiki App Authentication</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere
            quasi dolor, voluptas explicabo est sequi in, error obcaecati cum
            laudantium iste ipsam exercitationem ipsa, tempora quo praesentium a
            nostrum.
          </p>
          <div className="d-flex">
            <LinkContainer to={"/login"}>
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Button variant="secondary">Sign Up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
