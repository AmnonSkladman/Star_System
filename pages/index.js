import Layout from '../components/Layout';
import Sun from '../components/Sun';
import Mercury from '../components/Mercury';

export default () => (
  <Layout>
    <Sun />
    <Mercury />
    <style jsx>{`
      position: relative;
    `}</style>
  </Layout>
);
