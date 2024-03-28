import { radii } from '@rcmonteiro-ui/tokens'
import '../styles/tokens-grid.css'

export const RadiusGrid = () => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Pixels</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(radii).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              <td>
                <div className="box" style={{ borderRadius: value }}></div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
