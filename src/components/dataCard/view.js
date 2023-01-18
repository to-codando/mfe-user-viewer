export default ({ html, css }) => {
  const template = () => html`
    <div class="card">
      <div class="card-head">#554785</div>
      <div class="card-content">Rodrigo Rocha</div>
      <button>Editar</button>
      <button>Remover</button>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background: #fff;
      border-radius: 8px;
      border: 1px #ebebeb solid;
      padding: 1em;
      color: #666;
    }

    .card-header,
    .card-content {
      display: flex;
      width: 100%;
      padding: 1em 0;
    }

    [scope] button {
      padding: 1em 2em;
      border-radius: 8px;
      text-transform: uppercase;
      font-size: 0.675em;
      font-weight: 500;
      transition: all ease-in-out 0.5s;
      color: #fff;
    }

    [scope] button + button {
      margin-left: 1em;
    }

    [scope] button:first-of-type {
      background: #f2eef0;
      color: #aeb6b2;
    }
    [scope] button:first-of-type:hover {
      background: #67d2b5;
      color: #fff;
    }

    [scope] button:last-of-type {
      background: #fff;
      color: #aeb6b2;
    }
    [scope] button:last-of-type:hover {
      background: #eb64a8;
    }

    [scope] button:hover {
      color: #fff;
    }
  `

  return { template, styles }
}
