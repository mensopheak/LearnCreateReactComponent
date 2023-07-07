import Button from "./components/Button";

function App() {
  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <Button onClick={handleClick} primary>
          Primary
        </Button>
        <Button onClick={handleClick} secondary>
          Secondary
        </Button>
        <Button onClick={handleClick} success>
          Success
        </Button>
        <Button onClick={handleClick} warning>
          Warning
        </Button>
        <Button onClick={handleClick} danger>
          Danger
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={handleClick} rounded primary>
          Primary
        </Button>
        <Button onClick={handleClick} rounded secondary>
          Secondary
        </Button>
        <Button onClick={handleClick} rounded success>
          Success
        </Button>
        <Button onClick={handleClick} rounded warning>
          Warning
        </Button>
        <Button onClick={handleClick} rounded danger>
          Danger
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={handleClick} outline primary>
          Primary
        </Button>
        <Button onClick={handleClick} outline secondary>
          Secondary
        </Button>
        <Button onClick={handleClick} outline success>
          Success
        </Button>
        <Button onClick={handleClick} outline warning>
          Warning
        </Button>
        <Button onClick={handleClick} outline danger>
          Danger
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={handleClick} outline rounded primary>
          Primary
        </Button>
        <Button onClick={handleClick} outline rounded secondary>
          Secondary
        </Button>
        <Button onClick={handleClick} outline rounded success>
          Success
        </Button>
        <Button onClick={handleClick} outline rounded warning>
          Warning
        </Button>
        <Button onClick={handleClick} outline rounded danger>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;
