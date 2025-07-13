import React from 'react'

//import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            //onChange={(e) => setDisplayName(e.target.value)}
            //value={displayName}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            //onChange={(e) => setEmail(e.target.value)}
            //value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            //onChange={(e) => setPassword(e.target.value)}
            //value={password}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
           // onChange={(e) => setConfirmPassword(e.target.value)}
           // value={confirmPassword}
          />
        </label>
        <button type="submit" className={'btn'}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register