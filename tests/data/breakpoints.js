import { observable } from 'mobx';

export default observable({
  xs: '(max-width: 767px)',
  su: '(min-width: 768px)',
  sm: '(min-width: 768px) and (max-width: 991px)',
  md: '(min-width: 992px) and (max-width: 1199px)',
  mu: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
});
