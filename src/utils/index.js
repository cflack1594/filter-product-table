export const removeChar = (str, charToRemove) => {
  return str.replace(charToRemove, "");
};

export const getStateProxy = (component) => {
  new Proxy(component, {
    // 'Trap' the object on which we attempted to change a 'prop' - 'comp'
    set(comp, prop, value) {
      // 'this' is scoped to 'set' - so we must 'comp' which will be the original 'this'
      // Use brackets to interpolate - 'prop'
      comp.setState({ [prop]: value });
      return true;
    },
  });
};

export const parseDollarPrice = (dollarPrice) =>
  parseFloat(dollarPrice.slice(1));
