import mobx from './mobx';
import components from './react';

export default () => {
  const stores = mobx();
  return components(stores);
}