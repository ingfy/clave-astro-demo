import { useStore } from "@nanostores/react";
import { $messages, read } from "./messages";

export default function Inbox() {
  const messages = useStore($messages);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Received</th>
          <th>Sender</th>
          <th>Message</th>
          <th colSpan={2}>Read</th>
        </tr>
      </thead>
      <tbody>
        {messages.length === 0 && (
          <tr>
            <td>Tomt! 👐</td>
          </tr>
        )}
        {messages.map((message) => (
          <tr key={message.received.toISOString()}>
            <td>{new Date(message.received).toLocaleDateString()}</td>
            <td>{new Date(message.received).toLocaleTimeString()}</td>
            <td>{message.sender}</td>
            <td>{message.text}</td>
            {message.read ? (
              <>
                <td>{new Date(message.read).toLocaleDateString()}</td>
                <td>{new Date(message.read).toLocaleTimeString()}</td>
              </>
            ) : (
              <td colSpan={2}>
                <button onClick={() => read(message.id)}>✅</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
