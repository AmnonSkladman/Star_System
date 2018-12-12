import Layout from '../components/Layout';
import Sun from '../components/Sun';
import Mercury from '../components/Mercury';
import Venus from '../components/Venus';

export default () => (
  <Layout>
    <Sun />
    <Mercury />
    <Venus />
    <style jsx>{`
      position: relative;
    `}</style>
  </Layout>
);
