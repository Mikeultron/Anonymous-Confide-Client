import { Layout } from "components/containers";
import Modal from "components/molecules/Modal";
import Discussions from "./Discussions";
import HotTopics from "./HotTopics";
import Overview from "./Overview";

function Home() {
  return (
    <Layout>
      <Modal />
      <Overview />
      <Discussions />
      <HotTopics />
    </Layout>
  );
}

export default Home;
