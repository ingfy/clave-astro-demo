export default function NavigatorInfo() {
  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Logical CPUs</th>
          <td>{navigator.hardwareConcurrency}</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{navigator.language}</td>
        </tr>
        <tr>
          <th>Max touch points</th>
          <td>{navigator.maxTouchPoints}</td>
        </tr>
        <tr>
          <th>User Agent</th>
          <td>{navigator.userAgent}</td>
        </tr>
      </tbody>
    </table>
  );
}
