function Message() {
  const name = "Manasa Designers";
  const age = 25;
  const isStudent = false;

  if (isStudent) {
    return (
      <h1>
        Hello {name}, {age} you are a student!
      </h1>
    );
  } else if (age > 18) {
    return <h1>Hello Manasa Designers, My Age is {age}</h1>;
  }
}

export default Message;
