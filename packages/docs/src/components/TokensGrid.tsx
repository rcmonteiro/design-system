import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export const TokensGrid = ({
  tokens,
  hasRemValue = false,
}: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && (
            <>
              <th>Pixels</th>
              <th>Preview</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <>
                  <td>{Number(value.replace(/rem/, '')) * 16}px</td>
                  <td>
                    <div
                      className="rem-bar"
                      style={{
                        width: `${Number(value.replace(/rem/, '')) * 16}px`,
                      }}
                    ></div>
                  </td>
                </>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
