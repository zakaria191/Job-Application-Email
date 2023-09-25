import React from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const recipient = <span>Imane</span>;

  const achievements = (
    <ul id="my-achievements">
      <li className="ln-achievement">Achievement 1</li>
      <li className="ln-achievement">Achievement 2</li>
      <li className="ln-achievement">Achievement 3</li>
    </ul>
  );

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const getCurrentName = () => {
    const currentMinute = new Date().getMinutes();
    return currentMinute % 2 === 0 ? 'ZAKARIA JANAH' : 'YourLastName';
  };

  const body = (
    <div>
      <h2>Dear {recipient}</h2>
      <br />
      <p>
        Hi, my name is {getCurrentName()}, and I would like to introduce myself to you. I am applying for the position of React developer.
      </p>
      <br />
      <p>I’ve attached my CV to this email.</p>
      <p>You can find details of my previous roles, experience, and achievements.</p>
      <p>I’m particularly proud of :</p>
      {achievements}
      <p>
        I’m excited about this opportunity and would love to know more about the process, including timelines for you to decide on interviews.
      </p>
    </div>
  );

  const signature = (
    <div>
      <br />
      <span>Best regards,</span>
      <span>{getCurrentName()}</span>
      <b>{getCurrentDate()}</b>
    </div>
  );

  return (
    <Container>
      {body}
      {signature}
    </Container>
  );
}

export default App;

