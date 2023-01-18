export default ({ html, css }) => {
  const template = () => html`
    <div>
      <div data-component="routerView"></div>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    [scope] > div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      width: 100%;
      height: 100%;
    }
  `

  return { template, styles }
}
