export default ({ html, css }) => {
  const template = () => html`
    <div class="container">
      <h1>Usuários cadastrados</h1>
      <div data-component="appSearch"></div>
      <div class="content">
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
        <div data-component="dataCard"></div>
      </div>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      padding: 1em 0 0 0;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      width: calc(100% - 32px);
      border-radius: 8px;
      max-width: 1180px;
      background: #fff;
    }

    .content {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      width: 100%;
      padding: 1em;
    }

    [scope] h1 {
      display: flex;
      padding: 1em;
      width: 100%;
      height: 60px;
      font-weight: 300;
      font-size: 1.2em;
      color: #6d7073;
      border-bottom: 2px #f1f1f1 solid;
    }
  `

  return { template, styles }
}
