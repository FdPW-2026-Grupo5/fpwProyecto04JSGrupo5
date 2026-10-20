
/*export const validarNombreApellido = (valor) => {
  const soloLetras = /^[\p{L}\s]*$/u;
  return soloLetras.test(valor);
};

export const validarEdad = (valor) => {
  // Solo dígitos
  if (!/^[0-9]*$/.test(valor)) {
    return false;
  }

  // Permitimos el campo vacío mientras se escribe
  if (valor === '') {
    return true;
  }

  const edad = Number(valor);

  return edad >= 16 && edad <= 99;
  
};*/


export const validarNombreApellido = (valor) => {
  return /^[\p{L}\s]*$/u.test(valor);
};

export const validarEdad = (valor) => {
  // La edad debe contener solamente dígitos
  if (!/^[0-9]+$/.test(String(valor))) {
    return false;
  }

  const edad = Number(valor);

  // Edad mínima: 16. Edad máxima: 99.
  return edad >= 16 && edad <= 99;
};

