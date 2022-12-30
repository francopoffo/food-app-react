import React, { useState, useRef } from "react";
import classes from "./Checkout.module.css";

function Checkout(props) {
  const [cep, setCep] = useState("");
  const [FetchError, setError] = useState();
  const [nameError, setNameError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [complementError, setComplementError] = useState(false);

  const streetInput = useRef();
  const nameInput = useRef();
  const complementInput = useRef();
  const cepInput = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      nameInput.current.value.trim() === "" ||
      nameInput.current.value.trim().length < 2
    ) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (cepInput.current.value.trim() === "") {
      setCepError(true);
    } else {
      setCepError(false);
    }

    if (streetInput.current.value.trim() === "") {
      setStreetError(true);
    } else {
      setStreetError(false);
    }

    if (complementInput.current.value.trim() === "") {
      setComplementError(true);
    } else {
      setComplementError(false);
    }

    props.onConfirm({
      name: nameInput.current.value,
      CEP: cepInput.current.value,
      street: streetInput.current.value,
      complement: complementInput.current.value,
    });
  };

  const onChangeCepHandler = (e) => {
    setCep(e.target.value);
  };

  const onBlurCepHandler = (e) => {
    const usableCep = e.target.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${usableCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        streetInput.current.value = data.logradouro;
        setError(null);
      })
      .catch(() => {
        setError("CEP inválido!");
        setCep("");
      });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Nome</label>
        <input ref={nameInput} id="name" type="text" />
        {nameError && (
          <p className={classes.invalid}>
            O nome deve possuir ao menos 2 caracteres.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="cep">CEP</label>
        <input
          id="cep"
          value={cep}
          ref={cepInput}
          onBlur={onBlurCepHandler}
          onChange={onChangeCepHandler}
        />
        {FetchError && <p className={classes.invalid}>{FetchError}</p>}
        {cepError && (
          <p className={classes.invalid}>O CEP não pode estar em branco.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="rua">Rua</label>
        <input ref={streetInput} id="rua" type="text" />
        {streetError && (
          <p className={classes.invalid}>A rua não pode estar em branco.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="complemento">Complemento (nº, apto)</label>
        <input ref={complementInput} id="complemento" type="text" />
        {complementError && (
          <p className={classes.invalid}>
            O complemento não pode estar em branco.
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
