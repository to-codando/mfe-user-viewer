export default ({ html, css }) => {
  const template = () => html`
    <div class="container">
      <h1>Cadastro de usuários</h1>
      <form>
        <label grid-area="name">
          <span>Nome</span>
          <input type="text" />
        </label>

        <label grid-area="email">
          <span>E-mail</span>
          <input type="email" />
        </label>

        <label grid-area="password">
          <span>Password</span>
          <input type="password" />
        </label>

        <label class="pull-right" grid-area="button">
          <button>Salvar</button>
        </label>
      </form>
    </div>
  `

  const styles = () => css`
    [scope] {
      padding: 1em;
    }

    [scope],
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    .container {
      justify-content: flex-start;
      background: #fff;
      max-width: 1180px;
      border-radius: 8px;
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

    [scope] form [grid-area='name'] {
      grid-area: name;
    }
    [scope] form [grid-area='email'] {
      grid-area: email;
    }
    [scope] form [grid-area='password'] {
      grid-area: password;
    }
    [scope] form [grid-area='button'] {
      grid-area: button;
      display: flex;
      justify-content: flex-end;
    }

    [scope] form {
      display: grid;
      grid-gap: 1em;
      grid-template:
        'name name name name'
        'email email email password'
        'button button button button';
      padding: 1em;
      width: 100%;
    }

    [scope] input,
    [scope] span,
    [scope] label {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    [scope] span {
      font-size: 0.875em;
      color: #666;
      padding-bottom: 3px;
    }

    [scope] input {
      padding: 1em;
      color: #666;
      border: 2px #ebebeb solid;
      border-radius: 8px;
    }

    [scope] input:focus {
      outline-color: #ccc;
    }
    [scope] button {
      padding: 1em 2em;
      border-radius: 8px;
      text-transform: uppercase;
      font-size: 0.675em;
      font-weight: 500;
      transition: all ease-in-out 0.5s;
      background: #f2eef0;
      color: #aeb6b2;
    }

    [scope] button:hover {
      background: #67d2b5;
      color: #fff;
    }
  `

  return { template, styles }
}
