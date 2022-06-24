import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <div className="m-5 p-5 bg-black text-light">
        <h1>Search an image</h1>
        <p>
          This is a simple application tha retrieves photos using Unplash API.
        </p>
        <p>
          <Button variant="info" href="https://unsplash.com" target="_blank">
            Learn more
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
