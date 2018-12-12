import Layout from '../components/Layout';
import Sun from '../components/Sun';
import Mercury from '../components/Mercury';
import Venus from '../components/Venus';
import Earth from '../components/Earth';
import '../styles/stars.scss';

export default () => (
  <Layout>
    <div className="stars small" />
    <div className="stars medium" />
    <div className="stars large" />
    <Sun />
    <Mercury />
    <Venus />
    <Earth />
    <style jsx>{`
      position: relative;
    `}</style>
  </Layout>
);
