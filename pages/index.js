import Layout from "../components/layout";
import PostLink from "../components/postlink";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to SW4T</h1>
        <ul>
          <PostLink id="Welcome" />
          <PostLink id="Hello Next.js" />
          <PostLink id="Learn Next.js is awesome" />
          <PostLink id="Deploy apps with Zeit" />
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
