export default ({ html, css }) => {
  const template = () => html`
    <div>
      <h1>404</h1>
    </div>
  `

  const styles = () => css`
    ctx {
    }
  `

  return { template, styles }
}
