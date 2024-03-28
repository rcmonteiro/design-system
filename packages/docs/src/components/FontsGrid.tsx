import '../styles/tokens-grid.css'

interface FontsGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  property: string
}

export const FontsGrid = ({
  tokens,
  property,
  hasRemValue,
}: FontsGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          let style = {}
          switch (property) {
            case 'size':
              style = {
                fontSize: value,
              }
              break
            case 'weight':
              style = {
                fontWeight: value,
              }
              break
            case 'family':
              style = {
                fontFamily: value,
              }
              break
            case 'leading':
              style = {
                lineHeight: value,
              }
              break
          }
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace(/rem/, '')) * 16}px</td>
              )}
              <td>
                <span className={`preview-font ${property}`} style={style}>
                  Lorem ipsum
                </span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
