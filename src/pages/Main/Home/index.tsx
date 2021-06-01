import { Layout } from "components/containers";
import Discussions from "./Discussions";
import HotTopics from "./HotTopics";
import Overview from "./Overview";

function Home() {
  return (
    <Layout>
      <Overview />
      <Discussions />
      <HotTopics />
    </Layout>
  );
}

export default Home;
